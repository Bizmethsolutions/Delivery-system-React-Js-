//import { fetch } from '../../utils'
const HOSTNAME = process.env.REACT_APP_API_HOSTNAME

export const loginUser = data => {
  console.log("innnnn")
  return fetch(`${HOSTNAME}/api/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
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
