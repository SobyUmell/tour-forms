import WidgetBar from "../WidgetBar";
import EditWidget from "../../forms/EditWidget";

import './LeftBar.scss'

const LeftBar = () => {
  return (
    <div className="LeftBar">
      <div className="content">
        <WidgetBar />
        <EditWidget />
      </div>
    </div>
  );
}
 
export default LeftBar;