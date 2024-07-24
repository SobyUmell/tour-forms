import { TextField, InputAdornment } from "@mui/material";
import BorderOuterIcon from '@mui/icons-material/BorderOuter';
import BorderTopIcon from '@mui/icons-material/BorderTop';
import BorderRightIcon from '@mui/icons-material/BorderRight';
import BorderBottomIcon from '@mui/icons-material/BorderBottom';
import BorderLeftIcon from '@mui/icons-material/BorderLeft';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import ColorPicker from "../../inputs/ColorPicker";
import setDefaultWhenEmpty from "../../../../scripts/helpers/setDefaultWhenEmpty";

import { changeParam } from "../../../../store/slices/WidgetSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

import './SpaceGroup.scss'

const SpaceGroup = ({current}) => {

  const [tab, setTab] = useState('1');

  const handleTab = (e, value) => {
    setTab(value);
  }

  const dispatch = useDispatch();

  const pushChangedStyles = (styles) => {
    const batch = {
      name: current.name,
      parent: current.parent,
      styles
    }
    dispatch(changeParam(batch))
  };

  if (!current.name) {
    return null;
  }


  return (
    <div className="SpaceGroup">
      <TabContext value={tab}>
        <div className="tabs">
          <TabList onChange={handleTab}>
            <Tab label='margin' value={'1'} />
            <Tab label='padding' value={'2'} />
          </TabList>
        </div>
        <TabPanel value="1">
					<div className="margin">
						<TextField
							id="outlined-number"
							type="number"
							InputProps={{
								startAdornment: <InputAdornment position="start"><BorderOuterIcon /></InputAdornment>,
							}}
							value={current.styles.margin ? current.styles.margin.replace('px', '') : ''}
							onChange={(e) => pushChangedStyles({
								marginLeft: e.target.value + 'px',
								marginRight: e.target.value + 'px',
								marginTop: e.target.value + 'px',
								marginBottom: e.target.value + 'px',
								margin: e.target.value + 'px',
							})}
							onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({
								marginLeft: '0px',
								marginRight: '0px',
								marginTop: '0px',
								marginBottom: '0px',
								margin: '0px',
							}))}
						/>
						<TextField
							id="outlined-number"
							type="number"
							InputProps={{
								startAdornment: <InputAdornment position="start"><BorderTopIcon /></InputAdornment>,
							}}
							value={current.styles.marginTop ? current.styles.marginTop.replace('px', '') : ''}
							onChange={(e) => pushChangedStyles({marginTop: e.target.value + 'px'})}
							onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({
								marginTop: '0px',
							}))}
						/>
						<TextField
							id="outlined-number"
							type="number"
							InputProps={{
								startAdornment: <InputAdornment position="start"><BorderRightIcon /></InputAdornment>,
							}}
							value={current.styles.marginRight ? current.styles.marginRight.replace('px', '') : ''}
							onChange={(e) => pushChangedStyles({marginRight: e.target.value + 'px'})}
							onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({
								marginRight: '0px',
							}))}
						/>
						<TextField
							id="outlined-number"
							type="number"
							InputProps={{
								startAdornment: <InputAdornment position="start"><BorderBottomIcon /></InputAdornment>,
							}}
							value={current.styles.marginBottom ? current.styles.marginBottom.replace('px', '') : ''}
							onChange={(e) => pushChangedStyles({marginBottom: e.target.value + 'px'})}
							onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({
								marginBottom: '0px',
							}))}
						/>
						<TextField
							id="outlined-number"
							type="number"
							InputProps={{
								startAdornment: <InputAdornment position="start"><BorderLeftIcon /></InputAdornment>,
							}}
							value={current.styles.marginLeft ? current.styles.marginLeft.replace('px', '') : ''}
							onChange={(e) => pushChangedStyles({marginLeft: e.target.value + 'px'})}
							onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({
								marginLeft: '0px',
							}))}
						/>
					</div>
        </TabPanel>
				<TabPanel value="2">
					<div className="padding">
						<TextField
							id="outlined-number"
							type="number"
							InputProps={{
								startAdornment: <InputAdornment position="start"><BorderOuterIcon /></InputAdornment>,
							}}
							value={current.styles.padding ? current.styles.padding.replace('px', '') : ''}
							onChange={(e) => pushChangedStyles({
								paddingLeft: e.target.value + 'px',
								paddingRight: e.target.value + 'px',
								paddingTop: e.target.value + 'px',
								paddingBottom: e.target.value + 'px',
								padding: e.target.value + 'px',
							})}
							onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({
								paddingLeft: '0px',
								paddingRight: '0px',
								paddingTop: '0px',
								paddingBottom: '0px',
								padding: '0px',
							}))}
						/>
						<TextField
							id="outlined-number"
							type="number"
							InputProps={{
								startAdornment: <InputAdornment position="start"><BorderTopIcon /></InputAdornment>,
							}}
							value={current.styles.paddingTop ? current.styles.paddingTop.replace('px', '') : ''}
							onChange={(e) => pushChangedStyles({paddingTop: e.target.value + 'px'})}
							onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({
								paddingTop: '0px',
							}))}
						/>
						<TextField
							id="outlined-number"
							type="number"
							InputProps={{
								startAdornment: <InputAdornment position="start"><BorderRightIcon /></InputAdornment>,
							}}
							value={current.styles.paddingRight ? current.styles.paddingRight.replace('px', '') : ''}
							onChange={(e) => pushChangedStyles({paddingRight: e.target.value + 'px'})}
							onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({
								paddingRight: '0px',
							}))}
						/>
						<TextField
							id="outlined-number"
							type="number"
							InputProps={{
								startAdornment: <InputAdornment position="start"><BorderBottomIcon /></InputAdornment>,
							}}
							value={current.styles.paddingBottom ? current.styles.paddingBottom.replace('px', '') : ''}
							onChange={(e) => pushChangedStyles({paddingBottom: e.target.value + 'px'})}
							onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({
								paddingBottom: '0px',
							}))}
						/>
						<TextField
							id="outlined-number"
							type="number"
							InputProps={{
								startAdornment: <InputAdornment position="start"><BorderLeftIcon /></InputAdornment>,
							}}
							value={current.styles.paddingLeft ? current.styles.paddingLeft.replace('px', '') : ''}
							onChange={(e) => pushChangedStyles({paddingLeft: e.target.value + 'px'})}
							onBlur={(e) => setDefaultWhenEmpty(e, () => pushChangedStyles({
								paddingLeft: '0px',
							}))}
						/>
					</div>
				</TabPanel>
      </TabContext>
      
      
    </div>
  );
}
 
export default SpaceGroup;