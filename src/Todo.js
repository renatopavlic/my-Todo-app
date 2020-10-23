import React, { useState } from 'react';

import { ListItem, List, ListItemText, ListItemAvatar, Button, Modal } from '@material-ui/core';

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { makeStyles } from '@material-ui/core/styles';

import db from "./firebase"; // local firebase file

import "./todo.css";

// official styling for material ui Modal

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {

  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleOpen = (e) => {
    e.preventDefault(); //prevent refresh
    setOpen(true);
  };

 const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const updateTodo = () => {
    // update the todo with the new input text
    db.collection("todos").doc(props.todo.id).set({
      todo: input
    }, {merge: true})
    setOpen(false);
  }

  return (
    <> 
      
      <Modal
        open={open}
        onClose={handleClose}
        >
         <div className={classes.paper}>
           <h1>I'm am a modal</h1>
           <input placeholder={props.todo.todo} input={input} onChange={event => setInput(event.target.value)}/>
           <Button onClick={updateTodo}>update</Button>
        </div> 
        </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemText primary={props.todo.todo} secondary="dummy date" />
        </ListItem>
        <Button variant="contained" color="primary" onClick={handleOpen}>EDIT</Button>
        <DeleteForeverIcon style={{margin: "5px"}} color="secondary" onClick={event => {db.collection("todos").doc(props.todo.id).delete();
        }} />
      </List>
    </>
  )
}

export default Todo;
  