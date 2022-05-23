import './App.css';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);

        this.state = {
            colors: [
                "#ffc6cd",
                "#f796b4",
                "#ad83ff",
                "#696ef1",
                "#7df6ff",
                "#eab65a",
                "#ed8144",
                "#e25667",
                "#6556bc",
                '#cbf078',
                '#f8f398',
                '#f1b963',
                '#e46161',
              ],
        };
      }
    onClick() {
        let shuffled = this.state.colors
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
        this.setState({
            colors: shuffled
        });
    }
      
    render() {
      let rows = [];
      for (let i = 1; i <= 9; i++) {
        rows.push(
          <div onClick={this.onClick} className={"box" + i} style={{ background: this.state.colors[i] }}>
            {i}
          </div>
        );
      }
      return <div className="wrapper">{rows}</div>;
    }
  }
  
//   ReactDOM.render(<Component />, document.getElementById("app"));
  

// function App() {
//   let rows = [];
//       for (let i = 1; i <= 9; i++) {
//         rows.push(
//           <div onClick={this.onClick} className={"box" + i} style={{ background: this.state.colors[i] }}>
//             {i}
//           </div>
//         );
//       }
//       return <div className="wrapper">{rows}</div>;
// }

export default App;
