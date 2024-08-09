import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { defineNewState } from "../../../store/slices/WidgetSlice";
import putEditedForm from "../../../scripts/backend/putEditedForm";
import getFormLayout from "../../../scripts/backend/getFormLayout";
import LeftBar from "../../components/ui/LeftBar";
import ZoomPage from "../../components/ui/ZoomPage";
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import './EditFormPage.scss'
import { Alert } from "@mui/material";

const EditFormPage = () => {
  const { formId } = useParams();
  const obj_layout = useSelector(state => state.widgets.all);
  const dispatch = useDispatch();
  const [isPageError, setIsPageError] = useState(false);

  useEffect(() => {
    getFormLayout(formId)
    .then((res) => {
      dispatch(defineNewState(res));
    })
    .catch((error) => {
      setIsPageError(true);
    })
  }, [])

  
  
  const handleOnSave = (setOpen, setIsError, navigate) => {
    setOpen(true);
    putEditedForm(formId, obj_layout)
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

  const handleMessageClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsPageError(false);
  };

  return (
    <div className="EditFormPage">
      <div className="content">
        <LeftBar />
        <ZoomPage onSave={handleOnSave}/>
        <Snackbar
          open={isPageError}
          autoHideDuration={6000}
          onClose={handleMessageClose}
        >
          <Alert
            onClose={handleMessageClose}
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Oops! Something's gone wrong!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
 
export default EditFormPage; 