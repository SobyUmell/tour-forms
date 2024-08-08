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
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './EditFormPage.scss'

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

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleMessageClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="EditFormPage">
      <div className="content">
        <LeftBar />
        <ZoomPage onSave={handleOnSave}/>
        <Snackbar
            open={isPageError}
            autoHideDuration={6000}
            onClose={handleMessageClose}
            message="Oops! Something's gone wrong!"
            action={action}
          />
      </div>
    </div>
  );
}
 
export default EditFormPage; 