import * as React from 'react';

// mui-components
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

// mui-icons
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

// scss
import './FormListPage.scss'

// hooks
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getAllForms from '../../../scripts/backend/getAllForms';
import { Link } from 'react-router-dom';

// api
import deleteForm from '../../../scripts/backend/deleteForm';

const FormListPage = () => {
  const state = useSelector(state => state.widgets.all);
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleOnDelete = (formId) => {
    deleteForm(formId)
    .then(console.log) 
    .catch(console.log)
  }
  
  useEffect(() => {
    getAllForms()
    .then(res => {
      if (res && res.length) {
        setList(res);
      }
    })
    .catch(error => {
      setOpen(true);
    })
    console.log(state)
  }, [])

  return (
    <div className="FormListPage">
      <div className="content">
        <List>
          { 
            list.length ?
            list.map(form => {
              return <ListItem key={form.formId} className='list_item' disablePadding>
                <div className="content">
                  <h2>{form.name}</h2>
                  <div className="btn_group">
                    <Link to={`/view/${form.formId}`}>
                      <IconButton
                        color="inherit"
                      >
                        <RemoveRedEyeIcon />
                      </IconButton>
                    </Link>
                    <Link to={`/edit/${form.formId}`}>
                      <IconButton
                        color="inherit"
                      >
                        <EditIcon />
                      </IconButton>
                    </Link>
                    <IconButton 
                      color="inherit"
                      onClick={handleOnDelete}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <Link to={`/answers/${form.formId}`}>
                      <IconButton
                        color="inherit"
                      >
                        <ModeCommentIcon />
                      </IconButton>
                    </Link>
                  </div>
                </div>
              </ListItem>
            }) 
            :  
            "No forms yet" 
          }
        </List>
        <Link to={'/create'}>  
          <Button startIcon={<AddIcon />} variant={'contained'}>
            Create
          </Button>
        </Link>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Error! Failed to load forms!
          </Alert>
        </Snackbar>

      </div>
    </div>
  );
}
 
export default FormListPage;