import InputIcon from '@mui/icons-material/Input';
import handleOnDrag from '../../../../scripts/helpers/handleOnDrag'

const InputCard = () => {

  return (
    <div className="InputCard Card" draggable onDragStart={(e) => handleOnDrag(e, 'INPUT')}>
      <div className="content">
        <InputIcon />
        <h3>Input</h3>
      </div>
    </div>
  );
}
 
export default InputCard;