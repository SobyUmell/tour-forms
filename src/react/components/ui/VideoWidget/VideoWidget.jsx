import { Modal, Skeleton } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { delWidget, changeValue, setCurrentWidget } from "../../../../store/slices/WidgetSlice";
import { MuiFileInput } from "mui-file-input";
import ReactPlayer from "react-player";

import { storage } from "../../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import uuid from 'react-uuid';


const VideoWidget = ({widget}) => {

  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const [uploaded, setUploaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState(null)
  
  const pushChangedValue = (value) => {
    const batch = {
      name: widget.name,
      parent: widget.parent,
      value
    } 
    dispatch(changeValue(batch))
  };

  const handleClose = () => {
    setOpen(false);
    if (!uploaded) {
      dispatch(delWidget({
        name: widget.name,
        parent: widget.parent,
      }))
    }
  }

  const handleOnClick = (e) => {
    e.stopPropagation();
    dispatch(setCurrentWidget(widget));
  }


  const uploadVideo = (newFile) => {
    setFile(newFile);
    setOpen(false);
    setLoading(true);
    const imageRef = ref(storage, `videos/${newFile.name + uuid()}`)
    uploadBytes(imageRef, newFile)
    .then((image) => {
      getDownloadURL(image.ref)
      .then(url => {
        pushChangedValue(url);
        setLoading(false);
        setUploaded(true);
      })
      .catch(error => {
        console.log(error);
      })
    })
  }

  return (
    <div className="VideoWidget">
      <div className="contene">
        {
          loading && 
          <Skeleton variant="rectangular" sx={{width: '500px', height: '500px'}} />
        }
        {
          uploaded && <ReactPlayer url={widget.attributes.value ? widget.attributes.value : ''} controls style={widget.styles} onClick={handleOnClick}/>
        }
        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <MuiFileInput value={file} onChange={uploadVideo} placeholder={'Upload a video'} />
        </Modal>
      </div>
    </div>
  );
}
 
export default VideoWidget;