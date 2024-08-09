import { TextField, Button, Alert } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import FormCanvas from '../../ui/FormCanvas';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Rnd } from 'react-rnd';
import './ZoomPage.scss'
import { deleteMedia, resetState } from '../../../../store/slices/WidgetSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../../../../store/slices/WidgetSlice';
import setDefaultWhenEmpty from '../../../../scripts/helpers/setDefaultWhenEmpty';
import uuid from 'react-uuid';

const ZoomPage = ({ onSave }) => {
  const [zoom, setZoom] = useState(100);
  const [rndSize, setRndSize] = useState({width: 1000, height: 1200});
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const formName = useSelector(state => state.widgets.name);
  
  const successOnDelete = () => {
    setOpen(false);
    navigate('/');
  }
  const errorOnDelete = () => {
    setOpen(false);
    setIsError(true);
  }
  const handleOnCancel = () => {
    setOpen(true);
    dispatch(deleteMedia({success: successOnDelete, error: errorOnDelete}));
    dispatch(resetState());
  }
  const handleMessageClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsError(false);
  };
  const handleOnNameChange = (event) => {
    dispatch(changeName(event.target.value))
  } 
  const handleEmptyName = () => {
    dispatch(changeName(`form_${uuid()}`));
  }

  const handleResize = (e, direction, ref, delta, position) => {
    setRndSize({
      width: ref.offsetWidth,
      height: ref.offsetHeight,
    });
  };


  return (
    <div className="ZoomPage">
      <div className="topbar">
        <div className="actions">
          <div className="set_name">
            <TextField
              type="text"
              label='form name'
              size='small'
              variant="standard"
              value={formName}
              onChange={handleOnNameChange}
              onBlur={(e) => setDefaultWhenEmpty(e, handleEmptyName)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="buttons">
            <Button variant="contained" color='error' onClick={handleOnCancel} >Cancel</Button>
            <Button variant="contained" color='success' onClick={() => onSave(setOpen, setIsError, navigate)} >Save</Button>
          </div>
          
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <Snackbar
            open={isError}
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
        <div className="size">
          <TextField
            type="number"
            label='width'
            size='small'
            variant="filled"
            value={rndSize.width}
            onChange={(e) => setRndSize({...rndSize, width: e.target.value})}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            type="number"
            label='height'
            size='small'
            variant="filled"
            value={rndSize.height}
            onChange={(e) => setRndSize({...rndSize, height: e.target.value})}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

      </div>
      <div className="content">
        <TransformWrapper
          initialScale={1}
          minScale={.1}
          maxScale={8}
          centerContent={false}
          limitToBounds={false}
        >
          <TransformComponent>
            <div className="rnd">
              <Rnd 
                bounds={'parent'}
                size={{width: rndSize.width, height: rndSize.height}}
                onResize={handleResize}
              >
                <FormCanvas zm={zoom} />
              </Rnd>
            </div>
          </TransformComponent>
        </TransformWrapper>
        
      </div>
    </div>
  );
}
 
export default ZoomPage;