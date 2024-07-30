import handleOnDrop from '../../../../scripts/helpers/handleOnDrop'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentWidget } from '../../../../store/slices/WidgetSlice';
import AutoWidget from '../AutoWidget/AutoWidget';

import './ContWidget.scss'


const ContWidget = ({widget}) => {
  const widgets = useSelector(state => state.widgets.all);
  const current = useSelector(state => state.widgets.current);
  const dispatch = useDispatch();
  console.log(widgets);
  const handleOnClick = (e) => {
    e.stopPropagation();
    dispatch(setCurrentWidget(widget.name));
  }
  return (
    <div className={`ContWidget ${widget.name === current ? 'focused' : ''}`} onDrop={(e) => handleOnDrop(e, widget.name, dispatch)} style={widget.styles} onClick={handleOnClick} >
      {
        widgets[widget.name].children.map(w => {
          return <AutoWidget key={w} widget={widgets[w]} />
        })
      }
    </div>
  );
}
 
export default ContWidget;