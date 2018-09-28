import React, { Component } from "react";

class App extends Component {
  state = {
    data: []
  };

  randomText() {
    const url = "https://api.chucknorris.io/jokes/random";
    fetch(url)
      .then(result => result.json())
      .then(result => {
        console.log(result.value);
        this.setState({
          data: result.value
        });
      });
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    setInterval(() => this.randomText(), 4000);
  }
  // class method
  render() {
    const { data } = this.state;
    // const result = data.map((entry, index) => {
    //   return <li key={index}>{entry}</li>;
    // });
    return <ul>{data}</ul>;
  }
}
export default App;
