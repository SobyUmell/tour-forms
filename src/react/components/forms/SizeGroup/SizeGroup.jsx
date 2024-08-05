import { TextField, FormControlLabel, FormControl, FormLabel, RadioGroup, Radio } from "@mui/material";
import { changeParam } from "../../../../store/slices/WidgetSlice";
import { useDispatch } from "react-redux";
import setDefaultWhenEmpty from "../../../../scripts/helpers/setDefaultWhenEmpty";

import selectInter from "../../../../scripts/helpers/sizeInter";

import './SizeGroup.scss';
import { useState } from "react";

const SizeGroup = ({current}) => {

  const dispatch = useDispatch();
  
  const pushChangedStyles = (styles) => {
    const batch = {
      name: current.name,
      styles
    }
    dispatch(changeParam(batch))
  };

  const handleSizeMode = (value, param) => {
    switch(value) {
      case 'custom': 
        pushChangedStyles({[param]: '500px'});
        break;
      case 'inherit':
      case 'none':
      case 'fit-content':
        pushChangedStyles({[param]: value});
        break;
      case 'full': 
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
            onChange={(e, value) => handleSizeMode(value, 'width')}
          >
            <FormControlLabel value="inherit" control={<Radio />} label="inherit" />
            <FormControlLabel value="full" control={<Radio />} label="full width" />
            <FormControlLabel value="fit-content" control={<Radio />} label="fit content" />
            <FormControlLabel value="custom" control={<Radio />} label="custom:px" />
          </RadioGroup>
        </FormControl>
        {
          selectInter(current.styles.width) === 'custom'
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
            onChange={(e, value) => handleSizeMode(value, 'height')}
          >
            <FormControlLabel value="inherit" control={<Radio />} label="inherit" />
            <FormControlLabel value="full" control={<Radio />} label="full height" />
            <FormControlLabel value="fit-content" control={<Radio />} label="fit content" />
            <FormControlLabel value="custom" control={<Radio />} label="custom:px" />
          </RadioGroup>
        </FormControl>
        {
          selectInter(current.styles.height) === 'custom'
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
            onChange={(e, value) => handleSizeMode(value, 'maxWidth')}
          >
            <FormControlLabel value="none" control={<Radio />} label="none" />
            <FormControlLabel value="full" control={<Radio />} label="full width" />
            <FormControlLabel value="fit-content" control={<Radio />} label="fit content" />
            <FormControlLabel value="custom" control={<Radio />} label="custom:px" />
          </RadioGroup>
        </FormControl>
        {
          selectInter(current.styles.maxWidth) === 'custom'
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
            onChange={(e, value) => handleSizeMode(value, 'minWidth')}
          >
            <FormControlLabel value="none" control={<Radio />} label="none" />
            <FormControlLabel value="full" control={<Radio />} label="full width" />
            <FormControlLabel value="fit-content" control={<Radio />} label="fit content" />
            <FormControlLabel value="custom" control={<Radio />} label="custom:px" />
          </RadioGroup>
        </FormControl>
        {
          selectInter(current.styles.minWidth) === 'custom'
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
            onChange={(e, value) => handleSizeMode(value, 'maxHeight')}
          >
            <FormControlLabel value="none" control={<Radio />} label="none" />
            <FormControlLabel value="full" control={<Radio />} label="full height" />
            <FormControlLabel value="fit-content" control={<Radio />} label="fit content" />
            <FormControlLabel value="custom" control={<Radio />} label="custom:px" />
          </RadioGroup>
        </FormControl>
        {
          selectInter(current.styles.maxHeight) === 'custom'
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
            onChange={(e, value) => handleSizeMode(value, 'minHeight')}
          >
            <FormControlLabel value="none" control={<Radio />} label="none" />
            <FormControlLabel value="full" control={<Radio />} label="full height" />
            <FormControlLabel value="fit-content" control={<Radio />} label="fit content" />
            <FormControlLabel value="custom" control={<Radio />} label="custom:px" />
          </RadioGroup>
        </FormControl>
        {
          selectInter(current.styles.minHeight) === 'custom'
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