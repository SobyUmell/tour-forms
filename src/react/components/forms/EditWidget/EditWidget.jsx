import { TextField, Typography, Button } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';

import SizeGroup from "../SizeGroup";
import SpaceGroup from "../SpaceGroup";
import FontGroup from "../FontGroup";
import BorderGroup from "../BorderGroup";
import FlexGroup from "../FlexGroup";
import BcgGroup from "../BcgGroup";
import ValueGroup from "../ValueGroup";
import InputGroup from "../InputGroup";

import { delWidget } from "../../../../store/slices/WidgetSlice";

import { useSelector, useDispatch } from "react-redux";
import './EditWidget.scss'



const EditWidget = () => {
  
  const w_state = useSelector(state => state.widgets);
  const dispatch = useDispatch();

  const handleOnDelete = () => {
    dispatch(delWidget({
      name: w_state.current,
      parent: w_state.all[w_state.current].parent
    }));
  }

  if (w_state.current) {
    return (
      <div className="EditWidget">
        <div className="content">
          { w_state.all[w_state.current].attributes.groups.size &&
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography >
                  Size
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <SizeGroup current={w_state.all[w_state.current]} />
              </AccordionDetails>
            </Accordion>
          }
          {
            w_state.all[w_state.current].attributes.groups.space &&
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography >
                  Spacing
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <SpaceGroup current={w_state.all[w_state.current]} />
              </AccordionDetails>
            </Accordion>
          }
          {
            w_state.all[w_state.current].attributes.groups.font &&
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography >
                  Font
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FontGroup current={w_state.all[w_state.current]} />
              </AccordionDetails>
            </Accordion>
          }
          {
            w_state.all[w_state.current].attributes.groups.border &&
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography >
                  Border
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <BorderGroup current={w_state.all[w_state.current]} />
              </AccordionDetails>
            </Accordion>
          }
          {
            w_state.all[w_state.current].attributes.groups.flex &&
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography >
                  Flex
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FlexGroup current={w_state.all[w_state.current]} />
              </AccordionDetails>
            </Accordion>
          }
          {
            w_state.all[w_state.current].attributes.groups.bcg &&
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography >
                  Background
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <BcgGroup current={w_state.all[w_state.current]} />
              </AccordionDetails>
            </Accordion>
          }
          {
            w_state.all[w_state.current].attributes.groups.value &&
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography >
                  Value
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ValueGroup current={w_state.all[w_state.current]} />
              </AccordionDetails>
            </Accordion>
          }
          {
            w_state.all[w_state.current].attributes.groups.input &&
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography >
                  Input
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <InputGroup current={w_state.all[w_state.current]} />
              </AccordionDetails>
            </Accordion>
          }
          { 
            w_state.current !== 'root' 
            &&
            <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={handleOnDelete}>
              Delete
            </Button>          
          }

        </div>
      </div>
    );
  }
  
}
 
export default EditWidget;