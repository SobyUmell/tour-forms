import ContWidget from "../ContWidget";
import ImageWidget from "../ImageWidget/ImageWidget";
import InputWidget from "../../inputs/InputWidget";
import TitleWidget from "../TitleWidget";
import VideoWidget from "../VideoWidget";

const AutoWidget = ({widget}) => {
  const type = widget.name.split('_')[0];
  switch(type) {
    case 'CONT':
      return <ContWidget widget={widget} />
      break;
    case 'IMAGE':
      return <ImageWidget widget={widget} />
      break;
    case 'INPUT':
      return <InputWidget widget={widget} />
      break;
    case 'TITLE':
      return <TitleWidget widget={widget} />
      break;
    case 'VIDEO':
      return <VideoWidget widget={widget} />
      break;
    default:
      return <div>The widget've not found</div>
  }
}
 
export default AutoWidget;