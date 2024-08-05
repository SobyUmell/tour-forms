import { TextField, FormControlLabel, FormControl, FormLabel, RadioGroup, Radio } from "@mui/material";
import { changeParam } from "../../../../store/slices/WidgetSlice";
import { useDispatch } from "react-redux";
import setDefaultWhenEmpty from "../../../../scripts/helpers/setDefaultWhenEmpty";

import selectInter from "../../../../scripts/helpers/sizeInter";

import './SizeGroup.scss';
import { useState } from "react";

const SizeGroup = ({current}) => {

  const dispatch = useDispatch();
  const [customMw, setCustomMw] = useState(false);
  const [customMnw, setCustomMnw] = useState(false);
  const [customMh, setCustomMh] = useState(false);
  const [customMnh, setCustomMnh] = useState(false);
  const [customW, setCustomW] = useState(false);
  const [customH, setCustomH] = useState(false);

  
  const pushChangedStyles = (styles) => {
    const batch = {
      name: current.name,
      styles
    }
    dispatch(changeParam(batch))
  };

  const handleSizeMode = (value, param, callback) => {
    switch(value) {
      case 'custom': 
        pushChangedStyles({[param]: '1000px'});
        callback(true)
        break;
      case 'inherit':
      case 'none':
      case 'fit-content':
        callback(false);
        pushChangedStyles({[param]: value});
        break;
      case 'full': 
        callback(false);
        pushChangedStyles({[param]: '100%'});
    }
  }
  
  

  if (!current) {
    return null;
  }

  return (
    <div className="SizeGroup">
      <div className="content">
        <FormControl>
          <FormLabel>width</FormLabel>
          <RadioGroup
            value={selectInter(current.styles.width)}
            onChange={(e, value) => handleSizeMode(value, 'width', setCustomW)}
          >
            <FormControlLabel value="inherit" control={<Radio />} label="inherit" />
            <FormControlLabel value="full" control={<Radio />} label="full width" />
            <FormControlLabel value="fit-content" control={<Radio />} label="fit content" />
            <FormControlLabel value="custom" control={<Radio />} label="custom:px" />
          </RadioGroup>
        </FormControl>
        {
          customW
          &&
          <TextField
            type="number"
            value={current.styles.width ? current.styles.width.replace('px', '') : ''}
            onChange={(e) => pushChangedStyles({width: e.target.value + 'px'})}
            onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({width: '100%'}))}
            InputLabelProps={{
              shrink: true,
            }}
          />
        }
        <FormControl>
          <FormLabel>height</FormLabel>
          <RadioGroup
            value={selectInter(current.styles.height)}
            onChange={(e, value) => handleSizeMode(value, 'height', setCustomH)}
          >
            <FormControlLabel value="inherit" control={<Radio />} label="inherit" />
            <FormControlLabel value="full" control={<Radio />} label="full height" />
            <FormControlLabel value="fit-content" control={<Radio />} label="fit content" />
            <FormControlLabel value="custom" control={<Radio />} label="custom:px" />
          </RadioGroup>
        </FormControl>
        {
          customH
          &&
          <TextField
            type="number"
            value={current.styles.height ? current.styles.height.replace('px', '') : ''}
            onChange={(e) => pushChangedStyles({height: e.target.value + 'px'})}
            onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({height: 'none'}))}
            InputLabelProps={{
              shrink: true,
            }}
          />
        }
        <FormControl>
          <FormLabel>max width</FormLabel>
          <RadioGroup
            value={selectInter(current.styles.maxWidth)}
            onChange={(e, value) => handleSizeMode(value, 'maxWidth', setCustomMw)}
          >
            <FormControlLabel value="none" control={<Radio />} label="none" />
            <FormControlLabel value="full" control={<Radio />} label="full width" />
            <FormControlLabel value="fit-content" control={<Radio />} label="fit content" />
            <FormControlLabel value="custom" control={<Radio />} label="custom:px" />
          </RadioGroup>
        </FormControl>
        {
          customMw
          &&
          <TextField
            type="number"
            value={current.styles.maxWidth ? current.styles.maxWidth.replace('px', '') : ''}
            onChange={(e) => pushChangedStyles({maxWidth: e.target.value + 'px'})}
            onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({maxWidth: 'none'}))}
            InputLabelProps={{
              shrink: true,
            }}
          />
        }
        <FormControl>
          <FormLabel>min width</FormLabel>
          <RadioGroup
            value={selectInter(current.styles.minWidth)}
            onChange={(e, value) => handleSizeMode(value, 'minWidth', setCustomMnw)}
          >
            <FormControlLabel value="none" control={<Radio />} label="none" />
            <FormControlLabel value="full" control={<Radio />} label="full width" />
            <FormControlLabel value="fit-content" control={<Radio />} label="fit content" />
            <FormControlLabel value="custom" control={<Radio />} label="custom:px" />
          </RadioGroup>
        </FormControl>
        {
          customMnw
          &&
          <TextField
            type="number"
            value={current.styles.minWidth ? current.styles.minWidth.replace('px', '') : ''}
            onChange={(e) => pushChangedStyles({mixWidth: e.target.value + 'px'})}
            onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({minWidth: 'none'}))}
            InputLabelProps={{
              shrink: true,
            }}
          />
        }
        
        <FormControl>
          <FormLabel>max height</FormLabel>
          <RadioGroup
            value={selectInter(current.styles.maxHeight)}
            onChange={(e, value) => handleSizeMode(value, 'maxHeight', setCustomMh)}
          >
            <FormControlLabel value="none" control={<Radio />} label="none" />
            <FormControlLabel value="full" control={<Radio />} label="full height" />
            <FormControlLabel value="fit-content" control={<Radio />} label="fit content" />
            <FormControlLabel value="custom" control={<Radio />} label="custom:px" />
          </RadioGroup>
        </FormControl>
        {
          customMh
          &&
          <TextField
            type="number"
            label={'max height'}
            value={current.styles.maxHeight ? current.styles.maxHeight.replace('px', '') : ''}
            onChange={(e) => pushChangedStyles({maxHeight: e.target.value + 'px'})}
            onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({maxHeight: 'none'}))}
            InputLabelProps={{
              shrink: true,
            }}
          />
        }

        <FormControl>
          <FormLabel>min height</FormLabel>
          <RadioGroup
            value={selectInter(current.styles.minHeight)}
            onChange={(e, value) => handleSizeMode(value, 'minHeight', setCustomMnh)}
          >
            <FormControlLabel value="none" control={<Radio />} label="none" />
            <FormControlLabel value="full" control={<Radio />} label="full height" />
            <FormControlLabel value="fit-content" control={<Radio />} label="fit content" />
            <FormControlLabel value="custom" control={<Radio />} label="custom:px" />
          </RadioGroup>
        </FormControl>
        {
          customMnh
          &&
          <TextField
            type="number"
            label={'min height'}
            value={current.styles.minHeight ? current.styles.minHeight.replace('px', '') : ''}
            onChange={(e) => pushChangedStyles({minHeight: e.target.value + 'px'})}
            onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({minHeight: 'none'}))}
            InputLabelProps={{
              shrink: true,
            }}
          />
        }
      </div>
    </div>
  );
}
 
export default SizeGroup;