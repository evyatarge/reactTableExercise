import React, { Component } from 'react';
import './App.css';
import Table from './table/Table.js';


const URL = 'http://localhost:3000/employees?_sort=id&_order=asc';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            tableData: ''
        };
    }

    componentDidMount(){
        this.getData();
    }

    getData(){
        fetch(URL)
            .then(response => {
                if(response.ok){
                    return response.json();
                }
                else{
                    throw new Error('Error fetching data');
                }
            })
            .then(data =>{
                this.setState({tableData: data});
                }
            );
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Employees App</h1>
        </header>
        <p className="App-intro">
        </p>

          {this.state.tableData.length > 0 ? <Table data={this.state.tableData}/> : null }

      </div>
    );
  }
}

export default App;


