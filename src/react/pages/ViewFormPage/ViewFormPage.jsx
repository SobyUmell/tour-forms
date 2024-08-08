import convertToJSX from "../../../scripts/helpers/convertToJSX";
import { Alert } from "@mui/material";
import './ViewFormPage.scss';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getFormLayout from "../../../scripts/backend/getFormLayout";

const ViewFormPage = () => {

  const { formId } = useParams();
  const [layout, setLayout] = useState(null)
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    getFormLayout(formId)
    .then((res) => {
      setLayout(res);
    })
    .catch((error) => {
      setIsError(true);
    })
  })
  if (!isError) {
    return (
      <div className="ViewFormPage">
        <div className="content">
          { (layout !== null) && convertToJSX(layout['root']) }
        </div>
      </div>
    );
  } else {
    return (
      <div className="ViewFormPage">
        <div className="content">
          <Alert severity="error">Error when trying to load the form!</Alert>
        </div>
      </div>
    );
  }
  
}
 
export default ViewFormPage;