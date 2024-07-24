import TitleIcon from '@mui/icons-material/Title';
import handleOnDrag from '../../../../scripts/helpers/handleOnDrag';

const TitleCard = () => {

  return (
    <div className='TitleCard Card' draggable onDragStart={(e) => handleOnDrag(e, 'TITLE')}>
      <div className="content">
        <TitleIcon />
        <h3>Title</h3>
      </div>
    </div>
  );
}
 
export default TitleCard;