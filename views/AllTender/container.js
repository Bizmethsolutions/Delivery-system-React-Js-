import { connect } from 'react-redux'

import AllTender from './component'
import { getAllTender } from '../../store/tender/duck'

const AllTenderContainer = connect(
  // Map state to props
  (/*state*/) => ({}),
  // Map actions to dispatch and props
  {
    getAllTender
  }
)(AllTender)

export default AllTenderContainer
