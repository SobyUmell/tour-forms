import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import FormCanvas from '../../ui/FormCanvas';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Rnd } from 'react-rnd';
import './ZoomPage.scss'

const ZoomPage = () => {
  const [zoom, setZoom] = useState(100);
  const [rndSize, setRndSize] = useState({width: 1000, height: 1200});

  const handleResize = (e, direction, ref, delta, position) => {
    setRndSize({
      width: ref.offsetWidth,
      height: ref.offsetHeight,
    });
  };

  return (
    <div className="ZoomPage">
      <div className="topbar">
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
        <div className="actions">
          <Button variant="contained" color='error' >Cancel</Button>
          <Button variant="contained" color='success' >Save</Button>
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