import VideocamIcon from '@mui/icons-material/Videocam';
import handleOnDrag from '../../../../scripts/helpers/handleOnDrag';

const VideoCard = () => {
  return (
    <div className="VideoCard Card" draggable onDragStart={(e) => handleOnDrag(e, 'VIDEO')}>
      <div className="content">
        <VideocamIcon />
        <h3>Video</h3>
      </div>
    </div>
  );
}
 
export default VideoCard;