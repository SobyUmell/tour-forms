import { Modal } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { delWidget, changeValue } from "../../../../store/slices/WidgetSlice";
import { MuiFileInput } from "mui-file-input";
import ReactPlayer from "react-player";

import { storage } from "../../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import uuid from 'react-uuid';


const VideoWidget = ({widget}) => {

  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const [uploaded, setUploaded] = useState(false);

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


  const uploadImg = (newFile) => {
    setFile(newFile);
    const imageRef = ref(storage, `videos/${newFile.name + uuid()}`)
    uploadBytes(imageRef, newFile)
    .then((image) => {
      getDownloadURL(image.ref)
      .then(url => {
        pushChangedValue(url);
        setOpen(false);
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
        <ReactPlayer url={widget.attributes.value ? widget.attributes.value : ''} controls />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <MuiFileInput value={file} onChange={uploadImg} placeholder={'Upload a video'} />
        </Modal>
      </div>
    </div>
  );
}
 
export default VideoWidget;