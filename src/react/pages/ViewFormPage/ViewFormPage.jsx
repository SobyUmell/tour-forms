import convertToJSX from "../../../scripts/helpers/convertToJSX";
import { Alert } from "@mui/material";
import './ViewFormPage.scss';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import getFormLayout from "../../../scripts/backend/getFormLayout";
import store from "../../../store/store";
import postAnswers from "../../../scripts/backend/postAnswers";
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';


const ViewFormPage = () => {
  const {
    handleSubmit,
  } = useForm()
  const { formId } = useParams();
  const [layout, setLayout] = useState(null)
  const [isError, setIsError] = useState(false);
  const [fail, setFail] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getFormLayout(formId)
    .then((res) => {
      setLayout(res);
    })
    .catch((error) => {
      setIsError(true);
    })
  })

  const onSubmit = (data) => {
    const widgets = store.getState().widgets.all;
    let list = Object.entries(data).map(([w_name, text]) => {
      return {
        number: widgets[w_name].attributes.number,
        text
      }
    })

    postAnswers({formId, list})
    .then(() => {
      setSuccess(true);
    })
    .catch((error) => {
      setFail(true);
    })
  }

  const handleMessageClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccess(false);
    setFail(false);
  };

  if (!isError) {
    return (
      <form className="ViewFormPage" onSubmit={handleSubmit(onSubmit)}>
        <div className="content">
          { (layout !== null) && convertToJSX(layout['root']) }
        </div>
        <Snackbar
          open={fail}
          autoHideDuration={6000}
          onClose={handleMessageClose}
        >
          <Alert
            onClose={handleMessageClose}
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Error! Failed to submit the form!
          </Alert>
        </Snackbar>
        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={handleMessageClose}
        >
          <Alert
            onClose={handleMessageClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            The form is successfully submitted!
          </Alert>
        </Snackbar>
      </form>
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