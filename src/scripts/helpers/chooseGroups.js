const chooseGroups = (name) => {
  const type = name.split('_')[0];
  switch (type) {
    case 'TITLE':
      return {
        bcg: false,
        border: false,
        flex: false,
        font: true,
        size: false,
        space: true,
        value: true,
      };
      break;
    case 'TEXT': 
      return {
        bcg: false,
        border: false,
        flex: false,
        font: true,
        size: false,
        space: true,
        value: true,
      };
      break;
    case 'CONT':
      return {
        bcg: true,
        border: true,
        flex: true,
        font: false,
        size: true,
        space: true,
        value: false,
      };
      break;
    case 'IMAGE':
      return {
        bcg: false,
        border: true,
        flex: false,
        font: false,
        size: true,
        space: true,
        value: false,
      };
      break; 
    case 'VIDEO':
      return {
        bcg: false,
        border: false,
        flex: false,
        font: false,
        size: false,
        space: true,
        value: false,
      };
      break;
    default:
      return {};
      break;
  }
}

export default chooseGroups;