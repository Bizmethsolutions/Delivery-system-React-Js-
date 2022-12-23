import {Route, Link, Routes, useLocation, useNavigate} from 'react-router-dom';

export function withRouter( Child ) {
    return ( props ) => {
      const location = useLocation();
      const navigate = useNavigate();
      console.log('locaaaaaaaaaaaaaaaa', Child, navigate)
      return <Child { ...props } navigate={ navigate } location={ location } />;
    }
  }