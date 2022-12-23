import React from 'react'
import {Route, Link, Routes, useLocation, useNavigate} from 'react-router-dom';
import _ from 'lodash'
import Login from '../views/Login/container'
import Dashboard from '../views/Dashboard/container'
import Home from '../views/Home/container'
import AllTender from '../views/AllTender/container'
//import * as Sentry from '@sentry/react';
//import { Integrations } from "@sentry/apm";

import { withCookies } from 'react-cookie'


import { isEmpty } from 'lodash'

import '../App.css'
// if(process.env.REACT_APP_SENTRY && process.env.REACT_APP_SENTRY !== '') {
//   Sentry.init({dsn: process.env.REACT_APP_SENTRY,
//     release: 'curbwaste@0.1.0',
//     integrations: [
//       new Integrations.Tracing(),
//     ],
//     tracesSampleRate: 1.0,
//     beforeSend(event) {
//       return event;
//      }
//     });
//     // Sentry.configureScope(function(scope) {
//     //   scope.setUser({"email": "jane.doe@example.com"});
//     // });
// }
// const PrivateRoute = ({ component, user, ...rest }) => {
//   const isUser = window.localStorage.getItem('Authorization')
//   const isAuthed = isUser ? true : false
//   if (!isAuthed) {
//     window.localStorage.setItem('direcetUrl', window.location.pathname)
//   }
//   return (
//     <Route {...rest} exact
//       render = {props => (
//         isAuthed ? (<div>
//           {
//             React.createElement(component, props)
//           }
//         </div>)
//         :
//         (
//           <Navigate
//             to={{
//               pathname: '/',
//               state: { from: props.location }
//             }}
//           />
//         )
//       )}
//     />
//   )
// }
function withRouter( Child ) {
  return ( props ) => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log('locaaaaaaaaaaaaaaaa', Child, navigate)
    return <Child { ...props } navigate={ navigate } location={ location } />;
  }
}

class  AppComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount= async() => {
    
  }


  // static getDerivedStateFromProps = (props, state) => {
  //   if(isEmpty(props.user) !== isEmpty(state.user)){
  //     return { isLoading: false, user: props.user }
  //   }

  //   // Return null to indicate no change to state.
  //   return null;
  // }
  componentDidCatch(error, errorInfo) {
    
  }
 
  render() {
    
    return (
      <>
        {/* <Loader isLoading={isLoading} /> */}
        <div className="application-container">
          <Routes>
            <Route path="/" element={<Login />} {...this.props}/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tenders" element={<AllTender />} />
          </Routes>
        </div>
      </>
    )
  }
}

export default withRouter(withCookies(AppComponent))
