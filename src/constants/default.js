
/*
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

*/

const root_space = {
  margin: '0px',
  marginTop: '0px',
  marginRight: '0px',
  marginBottom: '0px',
  marginLeft: '0px',
  padding: '0px',
  paddingTop: '0px',
  paddingRight: '0px',
  paddingBottom: '0px',
  paddingLeft: '0px',
}
const root_border = {
  borderStyle: 'none',
  borderWidth: '0px',
  borderColor: '#fff',
  borderRadius: '0px'
}
const root_flex = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'start',
  alignItems: 'start',
  gap: '0px',
}
const root_bcg = {
  backgroundColor: '#ffffff',
  backgroundSize: 'auto',
  backgroundPosition: 'left',
  backgroundRepeat: 'no-repeat'
}


export const root_default = {
  ...root_space,
  ...root_bcg,
  ...root_border,
  ...root_flex,
}


const cont_size = {
  width: '100%',
  height: '150px',
  maxWidth: 'none',
  maxHeight: 'none',
  minWidth: 'none',
  minHeight: 'none',
}
const cont_space = {
  margin: '0px',
  marginTop: '0px',
  marginRight: '0px',
  marginBottom: '0px',
  marginLeft: '0px',
  padding: '0px',
  paddingTop: '0px',
  paddingRight: '0px',
  paddingBottom: '0px',
  paddingLeft: '0px',
}
const cont_border = {
  borderStyle: 'none',
  borderWidth: '0px',
  borderColor: '#fff',
  borderRadius: '0px'
}
const cont_flex = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'start',
  alignItems: 'start',
  gap: '0px',
}
const cont_bcg = {
  backgroundColor: '#e0e1dd',
  backgroundSize: 'auto',
  backgroundPosition: 'left',
  backgroundRepeat: 'no-repeat'
}

export const cont_default = {
  ...cont_size,
  ...cont_space,
  ...cont_border,
  ...cont_flex,
  ...cont_bcg,
}

export const image_default = {
  maxWidth: '400px',
  width: '100%',
  height: '100%',
}

export const video_default = {
  width: 'fit-content',
  height: 'fit-content'
}

export const title_default = {
  width: 'fit-content',
  fontFamily: 'Roboto',
  fontSize: '40px',
  fontWeight: 400,
  lineHeight: '120%',
  margin: '0px',
  marginTop: '0px',
  marginRight: '0px',
  marginBottom: '0px',
  marginLeft: '0px',
  padding: '5px',
  paddingTop: '5px',
  paddingRight: '5px',
  paddingBottom: '5px',
  paddingLeft: '5px',
  color: '#000',
}

export const input_default = {
  maxWidth: '400px',
  width: '100%',
}
export const submit_default = {
  width: '100px',
  height: '40px',
  backgroundColor: '#fff',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: '5px',
  borderColor: '#000'
}



