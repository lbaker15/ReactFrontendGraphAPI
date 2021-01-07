import React from 'react';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="center">
          <div style={{visibility: "hidden"}} id="fb-root">
            <div className="fb-login-button" data-width="300" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"
            scope='read_insights,instagram_basic,pages_show_list,instagram_manage_comments,instagram_manage_insights,pages_read_engagement' >
            </div>
          </div>
        </div>

        <div className="justifyCenter">
          <div className="hashtags">
          <h1>The hashtags that seem to be getting you the most likes are...</h1>
          <ul className="list">
          </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
