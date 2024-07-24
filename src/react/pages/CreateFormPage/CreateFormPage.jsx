import FormCanvas from "../../components/ui/FormCanvas";
import LeftBar from "../../components/ui/LeftBar";
import './CreateFormPage.scss'
const CreateFormPage = () => {

  return (
    <div className="CreateFormPage">
      <div className="content">
        <LeftBar />
        <div className="scroll">
          <FormCanvas />
        </div>
      </div>
    </div>
  );
}
 
export default CreateFormPage; 