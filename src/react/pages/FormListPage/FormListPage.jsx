import * as React from 'react';

// mui-components
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';

// mui-icons
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

// scss
import './FormListPage.scss'

// hooks
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getAllForms from '../../../scripts/backend/getAllForms';

const FormListPage = () => {
  const state = useSelector(state => state.widgets.all);
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([1, 1, 1]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  

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
              return <ListItem className='list_item' disablePadding>
                <div className="content">
                  <h2>Content</h2>
                  <div className="btn_group">
                    <IconButton
                      color="inherit"
                    >
                      <RemoveRedEyeIcon />
                    </IconButton>
                    <IconButton
                      color="inherit"
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="inherit"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </div>
              </ListItem>
            }) 
            :  
            "No forms yet" 
          }
        </List>
        <Button startIcon={<AddIcon />} variant={'contained'}>
          Create
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Can't load forms!"
          action={action}
        />

      </div>
    </div>
  );
}
 
export default FormListPage;