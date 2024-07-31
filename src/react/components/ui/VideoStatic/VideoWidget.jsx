import ReactPlayer from "react-player";

const VideoStatic = ({widget}) => {

  return (
    <ReactPlayer url={widget.attributes.value} controls style={widget.styles} />
  );
}

export default VideoStatic;