import  Header from './components/header/header.js' //to jest z wykorzystaniem export default
import './App.scss';
import {Menu} from './components/menu/menu.js' //to jest z wykorzystaniem exportowaniem poszczegolnej czesci
import Hotels from './components/hotels/hotels'
import React, { Component } from 'react';

class App extends Component {

    state = {
      hotels: [
        {
          id:1,
          name: 'Pod akacjami',
          city: 'Warszawa',
          description: 'lorem ipsum',
          image:''
        },
        {
          id:2, 
          name: 'Debowy',
          city: 'bialystok',
          description: 'lorem ipsum',
          image:''
        }
      ]
    }

  render (){
    return (
      <div className="App">
        <Header/>
        <Menu/>
        <Hotels hotels={this.state.hotels}/>
      </div>
    );
  }
}

export default App;

//default robi to ze w momencie importowania go jestesmy nadac nazwe jaka nam sie podoba 
