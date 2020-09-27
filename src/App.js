import React, { Component } from 'react'
import './App.css';
import {Provider} from 'react-redux';
import Post from './component/Post';
import Postform from './component/Postform';
import store from './store';

export class App extends Component {

    render() {
        return (
          <Provider store={store}>
            <div className="App">
              <Postform />
              <Post />
            </div>
            </Provider>
          )
    }
}

export default App