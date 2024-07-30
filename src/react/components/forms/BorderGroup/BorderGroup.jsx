import ColorPicker from "../../inputs/ColorPicker";
import { useDispatch } from "react-redux";
import { changeParam } from "../../../../store/slices/WidgetSlice";
import { TextField, FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import setDefaultWhenEmpty from "../../../../scripts/helpers/setDefaultWhenEmpty";
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

  if (!current) {
    return null;
  }

  return (
    <div className="BorderGroup">
      <div className="content">
        <FormControl fullWidth>
          <InputLabel>style</InputLabel>
          <Select
            label='style'
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
          label={'width'}
          value={current.styles.borderWidth ? current.styles.borderWidth.replace('px', '') : ''}
          onChange={(e) => pushChangedStyles({borderWidth: e.target.value + 'px'})}
          onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({borderWidth: '0px'}))}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <ColorPicker value={current.styles.borderColor} handler={handleOnColor} />
        <TextField
          label={'radius'}
          type="number"
          value={current.styles.borderRadius ? current.styles.borderRadius.replace('px', '') : ''}
          onChange={(e) => pushChangedStyles({borderRadius: e.target.value + 'px'})}
          onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({borderRadius: '0px'}))}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </div>
  );
}
 
export default BorderGroup;