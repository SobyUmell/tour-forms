import ContWidget from "../ContWidget";
import ImageWidget from "../ImageWidget/ImageWidget";
import InputWidget from "../../inputs/InputWidget";
import TitleWidget from "../TitleWidget";
import VideoWidget from "../VideoWidget";
import SubmitWidget from "../../inputs/Submitwidget/SubmitWidget";

const AutoWidget = ({widget}) => {
  const type = widget.name.split('_')[0];
  switch(type) {
    case 'CONT':
      return <ContWidget widget={widget} />
    case 'IMAGE':
      return <ImageWidget widget={widget} />
    case 'INPUT':
      return <InputWidget widget={widget} />
    case 'SUBMIT':
      return <SubmitWidget widget={widget} />
    case 'TITLE':
      return <TitleWidget widget={widget} />
    case 'VIDEO':
      return <VideoWidget widget={widget} />
    default:
      return <div>The widget've not found</div>
  }
}
 
export default AutoWidget;