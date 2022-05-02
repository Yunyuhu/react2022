import React from "react";

import { NavLink } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@mui/material";

export default function AppMenu() {
  const activeStyle = { backgroundColor: "deepskyblue", color: "black" };
  const inActiveStyle = { backgroundColor: "inherit", color: "inherit" };
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Button
          component={NavLink}
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
        >
          Home
        </Button>
        <Button
          component={NavLink}
          to="/exam"
          style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
        >
          Exam
        </Button>

        <Button
          component={NavLink}
          to="/english"
          style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
        >
          English
        </Button>
        <Button
          component={NavLink}
          to="/signup"
          style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
        >
          SignUp
        </Button>
        <Button
          component={NavLink}
          to="/signin"
          style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
        >
          SignIn
        </Button>
      </Toolbar>
    </AppBar>
  );
}
