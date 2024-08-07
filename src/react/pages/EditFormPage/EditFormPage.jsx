import LeftBar from "../../components/ui/LeftBar";
import ZoomPage from "../../components/ui/ZoomPage";
import './EditFormPage.scss'
const EditFormPage = ({id}) => {
  

  return (
    <div className="EditFormPage">
      <div className="content">
        <LeftBar />
        <ZoomPage />
      </div>
    </div>
  );
}
 
export default EditFormPage; 