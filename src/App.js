import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './assets/main.css';

// Redux setup
import { connect } from 'react-redux';
import * as actions from './actions';

const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse'></div>
  </div>
);

// Containers
// const MainLayout = React.lazy(() => import('./components/MainLayout'));

// Pages;
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
class App extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.alertReducer.message !== this.props.alertReducer.message) {
      setTimeout(() => {
        this.props.clear();
      }, 3000);
    }
  }
  render() {
    return (
      <div className='App'>
        <Router>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path='/'>
                <Redirect to='/login' />
              </Route>
              <Route
                exact
                path='/login'
                name='Login Page'
                render={(props) => <Login {...props} />}
              />
              <Route
                exact
                path='/register'
                name='Register Page'
                render={(props) => <Register {...props} />}
              />

              {/* <Route
                path='/'
                name='Home'
                render={(props) => <TheLayout {...props} />}
              /> */}
            </Switch>
          </React.Suspense>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { alertReducer } = state;
  return { alertReducer };
};
export default connect(mapStateToProps, actions)(App);
