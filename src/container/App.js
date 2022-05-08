import React, { Component } from "react";
import CardList from "../components/CardList";
import Navbar from "../components/Navbar";
import Scroll from "../components/Scroll";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchfiled: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        this.setState({ users: users });
      });
  }

  onSearch = (event) => {
    this.setState({ searchfiled: event.target.value });
  };

  render() {
    const { users, searchfiled } = this.state;

    const filterUser = users.filter((user) => {
      return user.name.toLowerCase().includes(searchfiled.toLowerCase());
    });
    return (
      <div>
        <Navbar onSearch={this.onSearch} />
        <Scroll>
          <CardList users={filterUser} />
        </Scroll>
      </div>
    );
  }
}

export default App;
