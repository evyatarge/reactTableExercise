import React, { Component } from 'react';
import './App.css';
import Table from './table/Table.js';


// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

//         // Set default middlewares (logger, static, cors and no-cache)
//         server.use(middlewares);
//
// // Add custom routes before JSON Server router
//         server.get('/employees?_sort=id', (req, res) => {
//             res.jsonp(req.query);
//         });


class App extends Component {

    constructor(props){
        super();
        this.state = {
            tableData: ''
        };
    }

    componentDidMount(){
        this.getData();
    }

    getData(sort){

        var order = sort ? sort : '_order=asc';
        const URL = 'http://localhost:3000/employees?_sort=id&'+order;

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
        this.getData();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My App</h1>
        </header>
        <p className="App-intro">
        </p>

          {this.state.tableData.length > 0 ? <Table data={this.state.tableData}/> : null }

      </div>
    );
  }
}

export default App;


