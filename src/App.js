import React, { Component } from 'react';


// Action creator
import * as actions from './actions';

// Layouts
const Layouts = React.lazy(() => import('./components/Layouts'));

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
      <div className='App'><Layouts></Layouts></div>
    );
  }
}

const mapStateToProps = (state) => {
  const {alertReducer} = state;
  return {alertReducer};
};
// export default connect(mapStateToProps, actions)(App);
export default App;
