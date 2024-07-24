import { TextField, Typography } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import SizeGroup from "../SizeGroup";
import SpaceGroup from "../SpaceGroup";
import FontGroup from "../FontGroup";
import BorderGroup from "../BorderGroup";
import FlexGroup from "../FlexGroup";
import BcgGroup from "../BcgGroup";
import ValueGroup from "../ValueGroup";

import { useSelector, useDispatch } from "react-redux";
import './EditWidget.scss'



const EditWidget = () => {
  
  const widget = useSelector(state => state.widgets.current);
  
  return (
    <div className="EditWidget">
      <div className="content">
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography >
              Size
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SizeGroup current={widget} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography >
              Spacing
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SpaceGroup current={widget} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography >
              Font
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FontGroup current={widget} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography >
              Border
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <BorderGroup current={widget} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography >
              Flex
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FlexGroup current={widget} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography >
              Background
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <BcgGroup current={widget} />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography >
              Value
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ValueGroup current={widget} />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
 
export default EditWidget;