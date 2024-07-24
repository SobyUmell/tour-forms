import uuid from 'react-uuid';

const handleOnDrag = (e, label) => {
  const key = label.concat('_', uuid());

  e.dataTransfer.setData('child_key', key);
  e.dataTransfer.effectAllowed = 'move';
}

export const handleDragOver = (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.dataTransfer.dropEffect = 'move';
}

export default handleOnDrag;