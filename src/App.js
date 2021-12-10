import './App.css';
import OrderUpdate from './Components/OrderUpdate';
import OrderList from './Components/OrderList';
import OrderEntry from './Components/OrderEntry';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, { Component } from 'react';



export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <React.Fragment>
            <Route path="/orderlist" element={<OrderList/>} />
            <Route exact path="/orderentry" element={<OrderEntry/>} />
            <Route path="/orderupdate/:id" element={<OrderUpdate/>} />
          </React.Fragment>
        </Routes>
      </Router>
    );
  }
}

