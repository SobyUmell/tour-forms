import { useDispatch } from "react-redux";
import { changeParam } from "../../../../store/slices/WidgetSlice";
import { MuiFileInput } from "mui-file-input";
import { useState } from "react";
import { FormControl, Select, MenuItem } from "@mui/material";
import ColorPicker from "../../inputs/ColorPicker";

import { storage } from "../../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import uuid from 'react-uuid';


const BcgGroup = ({ current }) => {



  const bcg_pos = ['top', 'bottom', 'left', 'right', 'center'];
  const bcg_size = ['auto', 'cover', 'contain'];
  const bcg_repeat = ['repeat', 'no-repeat'];
  const dispatch = useDispatch();

  const pushChangedStyles = (styles) => {
    const batch = {
      name: current.name,
      parent: current.parent,
      styles
    }
    dispatch(changeParam(batch))
    console.log(current);
  };

  const handleOnBcgColor = (backgroundColor) => {
    pushChangedStyles({ backgroundColor })
  }

  const [file, setFile] = useState(null);

  const uploadBcgImage = (newFile) => {
    setFile(newFile);
    const imageRef = ref(storage, `backgrounds/${newFile.name + uuid()}`)
    uploadBytes(imageRef, newFile)
    .then((image) => {
      console.log(image)
      getDownloadURL(image.ref)
      .then(url => {
        console.log(url)
        pushChangedStyles({backgroundImage: `url(${url})`});
      })
      .catch(error => {
        console.log(error);
      })
    })
  }
  
  if (!current.name) {
    return null;
  }

  return (
    <div className="BcgGroup">
      <div className="content">
        <ColorPicker value={current.styles.backgroundColor} handler={handleOnBcgColor}/>
        <MuiFileInput placeholder="upload background image" value={file} onChange={uploadBcgImage} />
        <FormControl fullWidth>
          <Select
            value={current.styles.backgroundSize || ''}
            onChange={(e) => pushChangedStyles({backgroundSize: e.target.value})}
          >
            {
              bcg_size.map(type => {
                return <MenuItem key={type} value={type}>{type}</MenuItem>
              })
            }
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <Select
            value={current.styles.backgroundPosition || ''}
            onChange={(e) => pushChangedStyles({backgroundPosition: e.target.value})}
          >
            {
              bcg_pos.map(type => {
                return <MenuItem key={type} value={type}>{type}</MenuItem>
              })
            }
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <Select
            value={current.styles.backgroundRepeat || ''}
            onChange={(e) => pushChangedStyles({backgroundRepeat: e.target.value})}
          >
            {
              bcg_repeat.map(type => {
                return <MenuItem key={type} value={type}>{type}</MenuItem>
              })
            }
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
 
export default BcgGroup;