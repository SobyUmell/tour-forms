import ContCard from "../../cards/ContCard";
import TitleCard from "../../cards/TitleCard";
import TextCard from "../../cards/TextCard";
import ImageCard from "../../cards/ImageCard"
import VideoCard from "../../cards/VideoCard"
import InputCard from "../../cards/InputCard"
import { Divider } from "@mui/material";

// styles 
import './WidgetBar.scss'

const WidgetBar = () => {

  return (  
    <div className="WidgetBar">
      <h2>Form components</h2>
      <div className="list">
        <ContCard />
        <Divider />
        <TitleCard />
        <Divider />
        <TextCard />
        <Divider />
        <ImageCard />
        <Divider />
        <VideoCard />
        <Divider />
        <InputCard />
      </div>
    </div>
  );
}
 
export default WidgetBar;