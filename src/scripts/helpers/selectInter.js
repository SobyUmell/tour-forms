const selectInter = (select) => {
  console.log(select);
  switch(select) {
    case '100%':
      return 'full';
    case 'auto':
    case 'none':
    case 'fit-content':
      return select;
    default:
      return 'custom';
  }
}

export default selectInter;