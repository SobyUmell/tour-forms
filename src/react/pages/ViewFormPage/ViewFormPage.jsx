import convertToJSX from "../../../scripts/helpers/convertToJSX";
import obj from "../../../constants/boilerplate";
import './ViewFormPage.scss';

const ViewFormPage = () => {
  return (
    <div className="ViewFormPage">
      <div className="content">
        {
          convertToJSX(obj['root'])
        }
      </div>
    </div>
  );
}
 
export default ViewFormPage;