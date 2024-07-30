import { Modal, Skeleton } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delWidget, changeValue, setCurrentWidget, setMediaRef } from "../../../../store/slices/WidgetSlice";
import { MuiFileInput } from "mui-file-input";

import { storage } from "../../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import uuid from 'react-uuid';

const ImageWidget = ({widget}) => {
  const [open, setOpen] = useState(true);
  const [uploaded, setUploaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null)
  
  const dispatch = useDispatch();
  const current = useSelector(state => state.widgets.current);

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
    setOpen(false);
    setLoading(true);
    const imageRef = ref(storage, `images/${newFile.name + uuid()}`)
    uploadBytes(imageRef, newFile)
    .then((image) => {
      dispatch(setMediaRef({name: widget.name, ref: image.ref}))
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

  const handleOnClick = (e) => {
    e.stopPropagation();
    dispatch(setCurrentWidget(widget.name));
  }

  return (
    <div className={`ImageWidget ${widget.name === current ? 'focused' : ''}`}>
      {
        loading && 
        <Skeleton variant="rectangular" sx={{width: '500px', height: '500px'}} />
      }
      {
        uploaded && <img src={widget.attributes.value ? widget.attributes.value : ''} alt={'Image Widget'} style={widget.styles} onClick={handleOnClick} />
      }
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MuiFileInput value={file} onChange={uploadImg} placeholder={'Upload an image'} />
      </Modal>
    </div>
  );
}
 
export default ImageWidget;