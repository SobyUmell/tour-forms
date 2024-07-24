import handleOnDrop from '../../../../scripts/helpers/handleOnDrop'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentWidget } from '../../../../store/slices/WidgetSlice';
import AutoWidget from '../AutoWidget/AutoWidget';

import './ContWidget.scss'


const ContWidget = ({widget}) => {
  const widgets = useSelector(state => state.widgets.all);
  const current = useSelector(state => state.widgets.current);
  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    e.stopPropagation();
    dispatch(setCurrentWidget(widget));
  }
  return (
    <div className={`ContWidget ${widget.name === current.name ? 'focused' : ''}`} onDrop={(e) => handleOnDrop(e, widget.name, dispatch)} style={widget.styles} onClick={handleOnClick} >
      {
        widgets[widget.name].children.map(w => {
          return <AutoWidget key={w.name} widget={w} />
        })

      }
    </div>
  );
}
 
export default ContWidget;