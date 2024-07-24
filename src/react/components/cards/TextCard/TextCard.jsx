import ShortTextIcon from '@mui/icons-material/ShortText';
import handleOnDrag from '../../../../scripts/helpers/handleOnDrag';

const TextCard = () => {

  return (
    <div className='TextCard Card' draggable onDragStart={(e) => handleOnDrag(e, 'TEXT')}>
      <div className="content">
        <ShortTextIcon />
        <h3>Text</h3>
      </div>
    </div>
  );
}
 
export default TextCard;