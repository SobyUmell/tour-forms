import { handleDragOver } from "../../../../scripts/helpers/handleOnDrag";

import { useSelector, useDispatch } from 'react-redux';

import handleOnDrop from "../../../../scripts/helpers/handleOnDrop";

import AutoWidget from "../AutoWidget/AutoWidget";


import './FormCanvas.scss'
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const FormCanvas = () => {

  const dispatch = useDispatch();
  const widgets = useSelector(state => state.widgets.all);

  return (
    <div className="FormCanvas" onDragOver={handleDragOver} onDrop={(e) => handleOnDrop(e, 'root', dispatch)} >
      {
        widgets['root'].children.map((widget) => {
          return <AutoWidget key={widget.name} widget={widget}/>
        })
      }
    </div>
  );
}
 
export default FormCanvas;