import React, { useState, useEffect } from 'react';
// import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

function TodoItem(props) {
  const [editing, setEditing] = useState(false);

  useEffect(
    () => () => {
      console.log('Cleaning up...');
    },
    [],
  );

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { completed, id, title } = props.todo;

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={this.props.todo.completed}
        onChange={() => this.props.handleChangeProps(this.props.todo.id)}
      />
      <button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>
        Delete
      </button>
      {this.props.todo.title}
    </li>
  );
}

export default TodoItem;
