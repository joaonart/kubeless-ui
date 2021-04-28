import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'

class Logout extends Component {

  logout() {
    // eslint-disable-next-line react/prop-types
    this.props.history.push('/')
    // eslint-disable-next-line react/prop-types
    this.props.keycloak.logout()
  }

  render() {
    return (
      <IconButton tooltip='Logout' onTouchTap={() => this.logout()}>
        <FontIcon className='fa fa-sign-out' color='white' />
      </IconButton>
    )
  }

}
export default withRouter(Logout)
