import { title_default, cont_default, image_default, video_default, input_default, submit_default } from "../../constants/default"
const chooseStyles = (name) => {
  const type = name.split('_')[0];
  switch (type) {
    case 'TITLE':
      return title_default;
    case 'CONT':
      return cont_default;
    case 'IMAGE':
      return image_default;
    case 'INPUT':
      return input_default;
    case 'SUBMIT':
      return submit_default;
    case 'VIDEO':
      return video_default;
    default:
      return {};
  }
}

export default chooseStyles;