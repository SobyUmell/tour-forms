import ColorPicker from "../../inputs/ColorPicker";
import { useDispatch } from "react-redux";
import { changeParam } from "../../../../store/slices/WidgetSlice";
import { TextField, InputAdornment, FormControl, Select, MenuItem } from "@mui/material";

import './BorderGroup.scss';

const BorderGroup = ({current}) => {
  const border_type = ['solid', 'dashed', 'dotted', 'inset', 'double', 'none']
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

  const handleOnColor = (borderColor) => {
    pushChangedStyles({ borderColor })
  }

  if (!current.name) {
    return null;
  }

  return (
    <div className="BorderGroup">
      <div className="content">
        <ColorPicker value={current.styles.borderColor} handler={handleOnColor} />
        <TextField
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">W</InputAdornment>,
          }}
          value={current.styles.borderWidth ? current.styles.borderWidth.replace('px', '') : ''}
          onChange={(e) => pushChangedStyles({borderWidth: e.target.value + 'px'})}
        />
        <FormControl fullWidth>
          <Select
            value={current.styles.borderStyle || ''}
            onChange={(e) => pushChangedStyles({borderStyle: e.target.value})}
          >
            {
              border_type.map(type => {
                return <MenuItem key={type} value={type}>{type}</MenuItem>
              })
            }
          </Select>
        </FormControl>
        <TextField
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">R</InputAdornment>,
          }}
          value={current.styles.borderRadius ? current.styles.borderRadius.replace('px', '') : ''}
          onChange={(e) => pushChangedStyles({borderRadius: e.target.value + 'px'})}
        />
      </div>
    </div>
  );
}
 
export default BorderGroup;