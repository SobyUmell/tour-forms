import { title_default, cont_default, image_default, video_default, input_default } from "../../constants/default"
const chooseStyles = (name) => {
  const type = name.split('_')[0];
  switch (type) {
    case 'TITLE':
      return title_default;
      break;
    case 'CONT':
      return cont_default;
      break;
    case 'IMAGE':
      return image_default;
      break; 
    case 'INPUT':
      return input_default;
      break; 
    case 'VIDEO':
      return video_default;
      break;
    default:
      return {};
      break;
  }
}

export default chooseStyles;