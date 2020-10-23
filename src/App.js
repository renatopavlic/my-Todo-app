import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, {useEffect, useState} from 'react';

import Todo from "./Todo";

import firebase from "firebase";
import db from "./firebase";

import './App.css';


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  
  console.log("ovo je input " + input);

  useEffect(() => {
    db.collection("todos").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); // don't refresh the page

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    //setTodos([...todos, input]);
    setInput(""); // clear up input after submit
  }

  console.log(todos)

  return (
    <div className="App">

      <h1>hello world</h1>
      <form>
        <FormControl>
          <InputLabel>Todo app</InputLabel>
          <Input  value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
        <ul >
          {todos.map( todo => (
            <Todo todo={todo} />
          ) )}
        </ul>
      </form>
      
    </div>
  );
}

export default App;
