import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeValue } from "../../../../store/slices/WidgetSlice";

const ValueGroup = ({current}) => {
  const dispatch = useDispatch();

  const pushChangedValue = (value) => {
    const batch = {
      name: current.name,
      parent: current.parent,
      value,
    }
    dispatch(changeValue(batch))
  };

  if (!current) {
    return null;
  }
  return (
    <div className="ValueGroup">
      <div className="content">
        <TextField type={'text'} value={current.attributes.value} onChange={(e) => pushChangedValue(e.target.value)} multiline />
      </div>
    </div>
  );
}
 
export default ValueGroup;