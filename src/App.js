import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";

class App extends Component {
  state = {
    monsters: [],
    searchField: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    const loading = monsters.length === 0 ? true : false;

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters..."
          handleChange={this.handleSearchChange}
        />
        <CardList monsters={filteredMonsters} loading={loading} />
      </div>
    );
  }
}

export default App;
