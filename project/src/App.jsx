import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AppRouter from "./routes/AppRouter";
import React, {useEffect, useState} from "react";
import api from "./shared/service/axios/axiosClient";
import {publicRoutes, userRoutes} from "./routes/routes";

function App() {
  return (
      <Router>
          <AppRouter/>
      </Router>
  );
}

export default App;
