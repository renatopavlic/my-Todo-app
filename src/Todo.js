import { ListItem, List, ListItemText, Avatar, ListItemAvatar } from '@material-ui/core';
import React from 'react';

import "./todo.css";

function Todo(props) {
  return (
    <div>
      <List className="todo__list">
        <ListItem>
          <ListItemAvatar>
          </ListItemAvatar>
          <ListItemText primary={props.text} secondary="dummy date" />
        </ListItem>
      </List>
    </div>
  )
}

export default Todo;
  