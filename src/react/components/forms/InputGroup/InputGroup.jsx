import { useDispatch } from "react-redux";
import { changePlaceholder } from "../../../../store/slices/WidgetSlice";
import { TextField} from "@mui/material";
import './InputGroup.scss';

const InputGroup = ({current}) => {

  const dispatch = useDispatch();

  const pushChangedPlaceholder = (placeholder) => {
    const batch = {
      name: current.name,
      parent: current.parent,
      placeholder,
    }
    dispatch(changePlaceholder(batch))
  };


  if (!current) {
    return null;
  }

  return (
    <div className="InputGroup">
      <div className="content">
        <TextField type={'text'} value={current.attributes.placeholder} onChange={(e) => pushChangedPlaceholder(e.target.value)} />
      </div>
    </div>
  );
}
 
export default InputGroup;