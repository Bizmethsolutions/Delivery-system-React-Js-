//import { fetch } from '../../utils'
const HOSTNAME = process.env.REACT_APP_API_HOSTNAME
const jwtToken = 'Bearer ' + localStorage.getItem('user_token')
export const getAllTender = data => {
  console.log("innnnn")
  return fetch(`${HOSTNAME}/api/tender/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': jwtToken
    }
  })
  .then(res => {
    return res.json()
  })
  .then(payload => {
    return payload
  })
  .catch(error => {
    throw error
  })
}
