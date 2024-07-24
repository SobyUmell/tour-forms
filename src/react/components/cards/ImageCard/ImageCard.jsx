import ImageIcon from '@mui/icons-material/Image';
import handleOnDrag from '../../../../scripts/helpers/handleOnDrag';

const ImageCard = () => {

  return (
    <div className="ImageCard Card" draggable onDragStart={(e) => handleOnDrag(e, 'IMAGE')}>
      <div className="content">
        <ImageIcon />
        <h3>Image</h3>
      </div>
    </div>
  );
}
 
export default ImageCard;