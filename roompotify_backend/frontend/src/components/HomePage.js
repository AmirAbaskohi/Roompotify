import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import HomePageUtil from "./HomePageUtil";
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

  render() {
    return (
      <Router>
        <Routes>
        <Route exact path="/" element={<HomePageUtil />} />
          <Route exact path="/join" element={<RoomJoinPage />} />
          <Route exact path="/create" element={<CreateRoomPage />} />
        </Routes>
      </Router>
    );
  }
}