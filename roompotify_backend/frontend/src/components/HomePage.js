import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import HomePageUtil from "./HomePageUtil";
import Room from "./Room";
import { Grid, Button, ButtonGroup, Typography } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  renderHomePage() {
    return (
      <Grid container spacing={3}>
          <Grid item xs={12} align="center">
            <Typography variant="h3" compact="h3">
              Roompotify
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <ButtonGroup disableElevation variant="contained" color="primary">
              <Button color="primary" to="/join" component={ Link }>
                Join a Room
              </Button>
              <Button color="secondary" to="/create" component={ Link }>
                Create a Room
              </Button>
            </ButtonGroup>
          </Grid>
      </Grid>
    );
  }

  render() {
    return (
      <Router>
        <Routes>
        <Route exact path="/" element={this.renderHomePage()} />
          <Route exact path="/join" element={<RoomJoinPage />} />
          <Route exact path="/create" element={<CreateRoomPage />} />
          <Route exact path="/room/:roomCode" element={<Room />} />
        </Routes>
      </Router>
    );
  }
}