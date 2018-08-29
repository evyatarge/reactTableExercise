import React from 'react';
import Table from './Table';

const URL = 'http://localhost:3000/employees?_sort=id&_order=asc';

class TableWrapper extends React.Component{


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
            <div className={'table-wrapper'}>
                {this.state.tableData.length > 0 ? <Table data={this.state.tableData}/> : null }
            </div>
        );
    }
}
export default TableWrapper;
