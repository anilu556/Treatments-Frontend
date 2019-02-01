import React, {Component} from 'react';
import request from 'superagent'
// import AddCircle from '@material-ui/core/AddCircle';
import FloatingActionButtonZoom from './Button'
import {Link} from 'react-router-dom';

class Users extends Component{
  constructor(){
  super();

    this.state = {
    users: []
    };
  }

  componentDidMount() {
  request.get('https://radiant-sea-68380.herokuapp.com/api/v1/users')
    .then((response) => {
    this.setState({
    users: response.body.data
    })
  })
}
  render(){
  const { classes } = this.props;
  return(
    <div>
      <table>
        <tr>
          <th> Id </th>
          <th> Name </th>
          <th> Email </th>
        </tr>
      {this.state.users.map(user => {
            return (
          <tr>
            <th> {user._id} </th>
            <th> {user.name} </th>
            <th> {user.email} </th>
          </tr>
            )
          })
      }
    </table>
    <Link to='/LogIn'>
    <FloatingActionButtonZoom />
    </Link>
    </div>

    );
  }
}

export default Users
