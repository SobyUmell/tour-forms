import FormStatic from "../FormStatic";
import ContStatic from "../ContStatic";
import ImageStatic from "../../ui/ImageStatic";
import InputStatic from "../../inputs/InputStatic";
import TitleStatic from "../../ui/TitleStatic";
import VideoStatic from "../../ui/VideoStatic";
import SubmitStatic from "../../inputs/SubmitStatic";

const AutoStatic = ({widget, children}) => {
  const type = widget.name.split('_')[0];
  switch(type) {
    case 'root': 
      return <FormStatic widget={widget}>
        {children}
      </FormStatic>
    case 'CONT':
      return <ContStatic widget={widget}>
        {children}
      </ContStatic>
    case 'IMAGE':
      return <ImageStatic widget={widget} />
    case 'INPUT':
      return <InputStatic widget={widget} />
    case 'SUBMIT':
      return <SubmitStatic widget={widget} />
    case 'TITLE':
      return <TitleStatic widget={widget} />
    case 'VIDEO':
      return <VideoStatic widget={widget} />
    default:
      return <div>The widget've not found</div>
  }
}
 
export default AutoStatic;