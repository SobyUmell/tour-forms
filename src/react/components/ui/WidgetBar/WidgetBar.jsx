import ContCard from "../../cards/ContCard";
import TitleCard from "../../cards/TitleCard";
import ImageCard from "../../cards/ImageCard"
import VideoCard from "../../cards/VideoCard"
import InputCard from "../../cards/InputCard"
import SubmitCard from "../../cards/SubmitCard";
import { Divider } from "@mui/material";

// styles 
import './WidgetBar.scss'

const WidgetBar = () => {

  return (  
    <div className="WidgetBar">
      <div className="list">
        <ContCard />
        <Divider />
        <TitleCard />
        <Divider />
        <ImageCard />
        <Divider />
        <VideoCard />
        <Divider />
        <InputCard />
        <Divider />
        <SubmitCard />
      </div>
    </div>
  );
}
 
export default WidgetBar;