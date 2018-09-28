import React, { Component } from "react";

// class Table extends Component {
//   render() {
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Job</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Charlie</td>
//             <td>Janitor</td>
//           </tr>
//           <tr>
//             <td>Mac</td>
//             <td>Bouncer</td>
//           </tr>
//           <tr>
//             <td>Dee</td>
//             <td>Aspiring actress</td>
//           </tr>
//           <tr>
//             <td>Dennis</td>
//             <td>Bartender</td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   }
// }
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th> Remove </th>
      </tr>
    </thead>
  );
};
const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
      // <tr key={index}>
      //   <td>{index}</td>
      //   <td>{row.name}</td>
      //   <td>{row.job}</td>
      //   <td>
      //     <button onClick={() => props.removeCharacter(index)}>Delete</button>
      //   </td>
      // </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    console.log(this.props);
    const { characterData, removeCharacter } = this.props;
    console.log(this.__proto__); //Table is the object of this and in table there is a property of props

    return (
      <table class="table">
        <TableHeader />
        <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  }
}

// class Table extends Component {
//   render() {
//     const { characterData, removeCharacterData } = this.props;
//     return (
//       <table class="table">
//         <TableHeader />
//         <TableBody
//           characterData={characterData}
//           removeCharacterData={removeCharacterData}
//         />
//       </table>
//     );
//   }
// }

export default Table;
