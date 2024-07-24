import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import { Autocomplete, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';
import ColorPicker from '../../inputs/ColorPicker';

import HeightIcon from '@mui/icons-material/Height';

import { changeParam } from '../../../../store/slices/WidgetSlice';
import { useDispatch } from 'react-redux';

import { font_list, font_weights } from '../../../../constants/fonts';
import validateStyle from '../../../../scripts/helpers/validateStyle';
import setDefaultWhenEmpty from '../../../../scripts/helpers/setDefaultWhenEmpty';
import './FontGroup.scss'

const FontGroup = ({current}) => {

  const dispatch = useDispatch();

  const pushChangedStyles = (styles) => {
    const batch = {
      name: current.name,
      parent: current.parent,
      styles
    }
    dispatch(changeParam(batch))
  };

  const handleOnColor = (color) => {
    pushChangedStyles({ color })
  }

  if (!current.name) {
    return null;
  }
  return (
    <div className="FontGroup">
      <ColorPicker value={current.styles.color} handler={handleOnColor} />
      <Autocomplete 
        disablePortal
        value={current.styles.fontFamily}
        onChange={(e, new_style) => pushChangedStyles({fontFamily: new_style})}
        options={font_list}
        renderInput={(params) => <TextField label={'family'} InputLabelProps={{
          shrink: true,
        }} {...params} />}
        
      />
      <TextField
        id="outlined-number"
        label={'size'}
        type="number"
        value={validateStyle(current.styles.fontSize, '', 'px')}
        onChange={(e) => pushChangedStyles({fontSize: e.target.value + 'px'})}
        onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({fontSize: '40px'}))}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <FormControl fullWidth>
        <InputLabel>weight</InputLabel>
        <Select
          value={current.styles.fontWeight}
          label={'weight'}
          onChange={(e) => pushChangedStyles({fontWeight: e.target.value})}
        >
          {
            font_weights[current.styles.fontFamily] &&
            font_weights[current.styles.fontFamily].map(weight => {
              return <MenuItem key={weight.weight} value={weight.weight}>{weight.name}</MenuItem>
            })
          }
        </Select>
      </FormControl>
      <Stack sx={{gap: '10px'}} direction="row" alignItems="center">
        <HeightIcon />
        <Slider 
          value={Number(validateStyle(current.styles.lineHeight, '110', '%'))} 
          onChange={(e, new_value) => pushChangedStyles({lineHeight: new_value + '%'})} 
          step={10} 
          marks 
          min={100} 
          max={200} 
        />
      </Stack>
    </div>
  );
}
 
export default FontGroup;