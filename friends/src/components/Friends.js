import React from "react";

import { connect } from "react-redux";
import { getData } from "../actions/index";

class Friends extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div>
        <h2>Friends</h2>
        {this.props.friends.map(friend => {
          return (
            <div key={friend.id}>
              <p>{friend.name}</p>
              <p>{friend.age}</p>
              <p>{friend.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

export default connect(mapStateToProps, { getData })(Friends);
