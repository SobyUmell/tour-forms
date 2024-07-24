
const validateStyle = (act, def, ext) => {
  if (act) {
    return act.replace(ext, '');
  }
  return def;
}

export default validateStyle;