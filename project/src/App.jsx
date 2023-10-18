<<<<<<< HEAD
import React from 'react';
import BasicCard from "./components/TaskCard"

function App() {
  return (
    <BasicCard title="Задание1" info="Бла бла бла"/>
=======
import {BrowserRouter as Router} from 'react-router-dom'
import AppRouter from "./routes/AppRouter";

function App() {
  return (
      <Router>
        <AppRouter/>
      </Router>
>>>>>>> main
  );
}

export default App;
