import { useSelector, useDispatch } from "react-redux";
import postNewForm from "../../../scripts/backend/postNewForm";
import { resetState } from "../../../store/slices/WidgetSlice";
import LeftBar from "../../components/ui/LeftBar";
import ZoomPage from "../../components/ui/ZoomPage";
import './CreateFormPage.scss'
const CreateFormPage = () => {
  const obj_layout = useSelector(state => state.widgets.all);
  const dispatch = useDispatch();
  const handleOnSave = (setOpen, setIsError, navigate) => {
    setOpen(true);
    postNewForm(obj_layout)
    .then(() => {
      setOpen(false);
      navigate('/');
      dispatch(resetState());
    })
    .catch((error) => { 
      setOpen(false);
      setIsError(true);
    })
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