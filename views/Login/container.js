import { connect } from 'react-redux'

import LoginComponent from './component'
import { loginUser } from '../../store/user/duck'

const LoginContainer = connect(
  // Map state to props
  (/*state*/) => ({}),
  // Map actions to dispatch and props
  {
    loginUser
  }
)(LoginComponent)

export default LoginContainer
