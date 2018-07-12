import React from 'react';
class FriendsList extends React.Component {
  constructor(props){
    super(props)
  }
  render() { 
    return ( 
        this.props.friends.map( friend => <p key={Math.random()}>{friend.name}, {friend.age}, {friend.email}</p>)
     );
  }
}
 
export default FriendsList;