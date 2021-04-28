import React, { Component } from 'react'

class UserInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      id: ''
    }
    // eslint-disable-next-line react/prop-types
    this.props.keycloak.loadUserInfo().then(userInfo => {
      this.setState({ name: userInfo.name, email: userInfo.email, id: userInfo.sub })
    })

    // console.log(this.props.keycloak.token);
  }

  render() {
    return (
      <div>{this.state.email}</div>
    )
  }

}
export default UserInfo
