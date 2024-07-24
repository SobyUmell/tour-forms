import { useState, useCallback, useRef } from "react";
import { HexColorPicker } from "react-colorful";

import { TextField, InputAdornment } from "@mui/material";

import useClickOutside from "../../../../scripts/hooks/useClickOutside";

import './ColorPicker.scss'

const ColorPicker = ({value, handler}) => {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);
  const [color, setColor] = useState('#000');

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);
  return (
    <TextField 
        value={value}
        onChange={(e) => handler(e.target.value)}
        label={'color'}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <div className="ColorPicker">
                <div
                  className="input"
                  style={{ backgroundColor: value }}
                  onClick={() => toggle(true)}
                />

                {isOpen && (
                  <div className="popover" ref={popover}>
                    <HexColorPicker color={value} onChange={handler} />
                  </div>
                )}
              </div>
            </InputAdornment>
          ),
        }}
        
      />

  );
}
 
export default ColorPicker;