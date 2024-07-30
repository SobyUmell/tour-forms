import { useDispatch } from "react-redux";
import { Select, FormControl, MenuItem, InputLabel} from "@mui/material";
import { changeParam } from "../../../../store/slices/WidgetSlice";
import validateStyle from "../../../../scripts/helpers/validateStyle";

import './FlexGroup.scss'

const FlexGroup = ({current}) => {
  const dispatch = useDispatch();
  const justify_content = ['center', 'start', 'end', 'space-between', 'space-around', 'space-evenly']
  const align_items = ['center', 'start', 'end'];
  const flex_dir = ['column', 'row']
  const pushChangedStyles = (styles) => {
    const batch = {
      name: current.name,
      parent: current.parent,
      styles
    }
    dispatch(changeParam(batch))
  };

  if (!current) {
    return null;
  }

  return (
    <div className="FlexGroup">
      <div className="content">
        <FormControl fullWidth>
          <InputLabel>justefy content</InputLabel>
          <Select
            label={'justefy content'}
            value={current.styles.justifyContent || ''}
            onChange={(e) => pushChangedStyles({justifyContent: e.target.value})}
          >
            {
              justify_content.map(pos => {
                return <MenuItem key={pos} value={pos}>{pos}</MenuItem>
              })
            }
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>align items</InputLabel>
          <Select
            label={'align items'}
            value={current.styles.alignItems || ''}
            onChange={(e) => pushChangedStyles({alignItems: e.target.value})}
          >
            {
              align_items.map(pos => {
                return <MenuItem key={pos} value={pos}>{pos}</MenuItem>
              })
            }
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>direction</InputLabel>
          <Select
            label={'direction'}
            value={current.styles.flexDirection || ''}
            onChange={(e) => pushChangedStyles({flexDirection: e.target.value})}
          >
            {
              flex_dir.map(type => {
                return <MenuItem key={type} value={type}>{type}</MenuItem>
              })
            }
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
 
export default FlexGroup;