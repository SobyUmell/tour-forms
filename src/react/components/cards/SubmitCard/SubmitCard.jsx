import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import handleOnDrag from '../../../../scripts/helpers/handleOnDrag';

const SubmitCard = () => {
  return (
    <div className="SubmitCard Card" draggable onDragStart={(e) => handleOnDrag(e, 'SUBMIT')}>
      <div className="content">
        <ForwardToInboxIcon />
        <h3>Submit</h3>
      </div>
    </div>
  );
}
 
export default SubmitCard;