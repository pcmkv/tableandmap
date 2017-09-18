import React, { Component } from 'react';
import './App.css';
import TableUser from './TableUser';
import {connect} from 'react-redux';
import * as getApiDataUserInfo from './actions/getApiUsersInfo';

class App extends Component {
    constructor(props){
        super(props);
        console.log("APP PROPS",this,props);
    }

    componentWillMount(){
        getApiDataUserInfo.getApiUserInfo();
    }

  render() {
    return (
      <div className="container">
       <div className="row">
           <div className="col-sm-12">
               <h4 className="text-center">Edit table</h4>
           </div>
       </div>
          <TableUser data={this.props.testStore} />
      </div>
    );
  }
}
export default connect(
    state =>({
        testStore:state
    })
)(App);
