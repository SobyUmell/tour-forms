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
        input: false,
      };
    case 'TEXT': 
      return {
        bcg: false,
        border: false,
        flex: false,
        font: true,
        size: false,
        space: true,
        value: true,
        input: false,
      };
    case 'INPUT': 
      return {
        bcg: false,
        border: true,
        flex: false,
        font: true,
        size: true,
        space: true,
        value: false,
        input: true,
      };
    case 'SUBMIT': 
    return {
      bcg: true,
      border: true,
      flex: false,
      font: true,
      size: true,
      space: true,
      value: true,
      input: false,
    };
    case 'CONT':
      return {
        bcg: true,
        border: true,
        flex: true,
        font: false,
        size: true,
        space: true,
        value: false,
        input: false,
      };
    case 'IMAGE':
      return {
        bcg: false,
        border: true,
        flex: false,
        font: false,
        size: true,
        space: true,
        value: false,
        input: false,
      };
    case 'VIDEO':
      return {
        bcg: false,
        border: true,
        flex: false,
        font: false,
        size: true,
        space: true,
        value: false,
        input: false,
      };
    default:
      return {};
  }
}

export default chooseGroups;