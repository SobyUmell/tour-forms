import CropSquareIcon from '@mui/icons-material/CropSquare';
import handleOnDrag from '../../../../scripts/helpers/handleOnDrag';

const ContCard = () => {

  return (
    <div className="ContCard Card" draggable onDragStart={(e) => handleOnDrag(e, 'CONT')}>
      <div className="content">
        <CropSquareIcon />
        <h3>Container</h3>
      </div>
    </div>
  )
}

export default ContCard