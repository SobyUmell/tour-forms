import { TextField, FormControlLabel, Checkbox, Typography } from "@mui/material";
import { changeParam } from "../../../../store/slices/WidgetSlice";
import { useDispatch } from "react-redux";
import setDefaultWhenEmpty from "../../../../scripts/helpers/setDefaultWhenEmpty";

import './SizeGroup.scss';
import { useState } from "react";

const SizeGroup = ({current}) => {

  const dispatch = useDispatch();

  const [type, setType] = useState('px');
  const [isW, setIsW] = useState(false);
  const [isH, setIsH] = useState(false);
  

  const changeType = (e) => {
    setType(e.target.value);
  } 
  const pushChangedStyles = (styles) => {
    const batch = {
      name: current.name,
      parent: current.parent,
      styles
    }
    dispatch(changeParam(batch))
  };


  const applyWidthFitContent = (e) => {
    if (e.target.checked) {
      setIsW(true);
      pushChangedStyles({width: 'fit-content'});
      return;
    }
    setIsW(false);
    pushChangedStyles({width: '100%'});
    return;
  }

  const applyHeightFitContent = (e) => {
    if (e.target.checked) {
      setIsH(true);
      pushChangedStyles({height: 'fit-content'});
      return;
    }
    setIsH(false);
    pushChangedStyles({height: '100%'});
    return;
  }

  if (!current.name) {
    return null;
  }

  return (
    <div className="SizeGroup">
      <div className="content">
        <TextField
          type="number"
          label={'max width'}
          value={current.styles.maxWidth ? current.styles.maxWidth.replace('px', '') : ''}
          onChange={(e) => pushChangedStyles({maxWidth: e.target.value + 'px'})}
          onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({maxWidth: '400px'}))}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControlLabel control={<Checkbox checked={isW} onChange={applyWidthFitContent} />} label="fit-content" />
        <TextField
          type="number"
          label={'max height'}
          value={current.styles.maxHeight ? current.styles.maxHeight.replace('px', '') : ''}
          onChange={(e) => pushChangedStyles({maxHeight: e.target.value + 'px'})}
          onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({maxHeight: '200px'}))}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControlLabel control={<Checkbox checked={isH} onChange={applyHeightFitContent} />} label="fit-content" />
      </div>
    </div>
  );
}
 
export default SizeGroup;