import { connect } from 'react-redux'

import Dashboard from './component'

const DashboardContainer = connect(
  // Map state to props
  (/*state*/) => ({}),
  // Map actions to dispatch and props
  {
  }
)(Dashboard)

export default DashboardContainer
