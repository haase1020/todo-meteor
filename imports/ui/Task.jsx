import React from 'react';
import classnames from 'classnames';

export const Task = ({ task, onCheckboxClick }) => {
  const classes = classnames('task', {
    checked: Boolean(task.isChecked),
  });

  return (
    <li className={classes}>
      <button onClick={() => onDeleteClick(task)}>&times;</button>
      <span>{task.text}</span>
      <input
        type='checkbox'
        checked={Boolean(task.isChecked)}
        onClick={() => onCheckboxClick(task)}
        readOnly
      />
      <span>{task.text}</span>
    </li>
  );
};
