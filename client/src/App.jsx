import Home from "./Routes/Home"
import Navbar from "./Components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Routes/Login";
import { Grid } from "@mui/material";
import SideBar from "./Components/SideBar";
import CreateTask from "./Routes/CreateTask";



const App = () => {
  return (
    <BrowserRouter>


      <Grid container spacing={3}>
        <Grid item xs={12} md={12} l={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12} md={2} l={2}>
          <SideBar/>
        </Grid>
        <Grid item xs={12} md={10} l={10}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createTask" element={<CreateTask />} />
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter>
  )
}

export default App

