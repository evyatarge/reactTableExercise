import React from 'react';
import Table from './Table';

import { connect } from 'react-redux';
import { fetchData } from '../redux/asyncActions';

class TableWrapper extends React.Component{

    componentDidMount(){
        if(this.props.items.length === 0){
            this.props.dispatch(fetchData());
        }
    }

    render() {
        const { error, loading, items } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }
        return (
            <div className={'table-wrapper'}>
               <Table data={items}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(TableWrapper);
