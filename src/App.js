import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
// with props
// class App extends Component {
//   render() {
//     const characters = [
//       {
//         name: "Charlie",
//         job: "Janitor"
//       },
//       {
//         name: "Mac",
//         job: "Bouncer"
//       },
//       {
//         name: "Dee",
//         job: "Aspring actress"
//       },
//       {
//         name: "Dennis",
//         job: "Bartender"
//       }
//     ];
//     return (
//       <div className="container">
//         <Table characterData={characters} />
//       </div>
//     );
//   }
// }
// ##########################################
// with state : delete data
// class App extends Component {
//   render() {
//     const state = {
//       characters: [
//         {
//           name: "Charlie",
//           job: "Janitor"
//         },
//         {
//           name: "Mac",
//           job: "Bouncer"
//         },
//         {
//           name: "Dee",
//           job: "Aspring actress"
//         },
//         {
//           name: "Dennis",
//           job: "Bartender"
//         }
//       ]
//     };
//     const removeCharacter = index => {
//       const characters = state.characters;
//
//       this.setState({
//         characters: characters.filter((character, i) => {
//           return i !== index;
//         })
//       });
//     };
//     return (
//       <div className="container">
//         <Table
//           characterData={state.characters}
//           removeCharacter={removeCharacter}
//         />
//       </div>
//     );
//   }
// }
// #################################
// add data
class App extends Component {
  state = {
    characters: []
  };
  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };
  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };
  render() {
    return (
      <div className="container">
        <p> Add a character with name and a job to the table </p>
        <Table
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
