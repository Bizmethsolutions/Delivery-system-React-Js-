import { connect } from 'react-redux'

import Home from './component'

const HomeContainer = connect(
  // Map state to props
  (/*state*/) => ({}),
  // Map actions to dispatch and props
  {
  }
)(Home)

export default HomeContainer
