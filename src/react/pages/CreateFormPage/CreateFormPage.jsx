import { useSelector } from "react-redux";
import postNewForm from "../../../scripts/backend/postNewForm";
import LeftBar from "../../components/ui/LeftBar";
import ZoomPage from "../../components/ui/ZoomPage";
import './CreateFormPage.scss'
const CreateFormPage = () => {
  const obj_layout = useSelector(state => state.widgets.all);
  const handleOnSave = (setOpen, setIsError, navigate) => {
    setOpen(true);
    postNewForm(obj_layout)
    .then(() => {
      setOpen(false);
      navigate('/');
    })
    .catch((error) => { 
      setOpen(false);
      setIsError(true);
    })
    console.log('handleOnSave!')
  }

  return (
    <div className="CreateFormPage">
      <div className="content">
        <LeftBar />
        <ZoomPage onSave={handleOnSave} />
      </div>
    </div>
  );
}
 
export default CreateFormPage; 