import { handleDragOver } from "../../../../scripts/helpers/handleOnDrag";

import { useSelector, useDispatch } from 'react-redux';

import handleOnDrop from "../../../../scripts/helpers/handleOnDrop";

import AutoWidget from "../AutoWidget/AutoWidget";
import { setCurrentWidget } from "../../../../store/slices/WidgetSlice";

import './FormCanvas.scss'

const FormCanvas = ({ zm }) => {

  const dispatch = useDispatch();
  const widgets = useSelector(state => state.widgets.all);
  const current = useSelector(state => state.widgets.current);

  const handleOnClick = (e) => {
    e.stopPropagation();
    dispatch(setCurrentWidget('root'));
  }

  return (
    <div className={`FormCanvas ${ current === 'root' ? 'focused' : ''}`} onDragOver={handleDragOver} onDrop={(e) => handleOnDrop(e, 'root', dispatch)} style={{ ...widgets['root'].styles, zoom: zm + '%'}} onClick={handleOnClick}>
      {
        widgets['root'].children.map((w_name) => {
          return <AutoWidget key={w_name} widget={widgets[w_name]}/>
        })
      }
    </div>
  );
}
 
export default FormCanvas;