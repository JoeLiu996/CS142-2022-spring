import React from 'react';
import {
  Divider,
  List,
  ListItem,
}
from '@material-ui/core';
import './userList.css';
import { Link } from "react-router-dom";
import fetchModel from '../../lib/fetchModelData';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: "",
    };
    const promise = fetchModel(`http://localhost:3000/user/list`);
    promise.then(
      (res) => {
        this.setState({ users: JSON.parse(res.data) });
      },
      (rej) => {
        console.log(rej);
      });
  }

  render() {
    let list = [];
    if (this.state.users){
      for(let j = 0; j < this.state.users.length; j++){
        let name = this.state.users[j].first_name + " " + this.state.users[j].last_name;
        list.push(
          <div key={this.state.users[j]._id}>
            <ListItem>
              <Link to={"/users/" + this.state.users[j]._id}>{name}</Link>
            </ListItem>
            <Divider />
          </div>
        );
      }
    }

    return (
     <div>
      <List component="nav">
        {list}
      </List>
     </div>
    );
  }
}

export default UserList;
