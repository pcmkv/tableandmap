import React, { Component } from 'react';
import * as editUser from './actions/editUserInfo';

class TableUser extends Component {
    constructor(props){
        super(props);
        console.log("CHILDREN PROPS",this.props);
    }



  render() {
      console.log(this.props.data);
    return (
      <div className="container">
       <div className="row">
           <div className="col-sm-12">
               <table className="table table-responsive table-bordered  table-hover">
                   <thead>
                   <tr>
                       <th>#</th>
                       <th>Name</th>
                       <th>Location</th>
                       <th>Position</th>
                       <th>Edit</th>
                   </tr>
                   </thead>
                   <tbody>
                   {
                       (this.props.data.length !== 0) ?  this.props.data.map((elem, i)=> {
                               return (
                                   <tr key={elem.id} className={i}>
                                       <td>{elem.id} </td>
                                       <td>{elem.email} </td>
                                       <td>{elem.name} </td>
                                       <td>{elem.address.city}</td>
                                       <td>
                                           <button onClick={editUser.editUserInfo.bind(this,i)} className="btn btn-default">Edit user</button>
                                       </td>
                                   </tr>
                               )
                           }
                       ): <tr>Test2</tr>
                   }
                   
                   </tbody>
               </table>
           </div>
       </div>
      </div>
    );
  }
}

export default TableUser;
