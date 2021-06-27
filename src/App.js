import  Header from './components/header/header.js' //to jest z wykorzystaniem export default
import './App.scss';
import {Menu} from './components/menu/menu.js' //to jest z wykorzystaniem exportowaniem poszczegolnej czesci
import Hotels from './components/hotels/hotels'
import React, { Component } from 'react';
import LoadingIcon from './components/UI/loadingIcon.js';

class App extends Component {
    hotels = [
      {
        id:1,
        name: 'Pod akacjami',
        city: 'Warszawa',
        description: 'lorem ipsum',
        image:'',
        category:'hotel'
      },
      {
        id:2, 
        name: 'Debowy',
        city: 'bialystok',
        description: 'lorem ipsum',
        image:'',
        category:'hotel'
      }
    ]


    state = {
      hotels: '',
      loading:true
    }
    searchHandler (term){
      const hotels =[...this.hotels].filter(x => x.name.toLowerCase().includes(term.toLowerCase()) || x.category.toLowerCase().includes(term.toLowerCase()))
      this.setState({hotels})
    }

    componentDidMount(){
        setTimeout(() => {
          this.setState({hotels: this.hotels})
          this.setState({loading: false})
        },1000)

    }
  render (){
    return (
      <div className="App">
        <Header onSearch = {(term) => this.searchHandler(term)}></Header>
        <Menu/> 
        {this.state.loading ? <LoadingIcon/> : <Hotels hotels={this.state.hotels}/> }
        {/* <Hotels hotels={this.state.hotels}/> */}
      </div>
    );
  }
}

export default App;

//default robi to ze w momencie importowania go jestesmy nadac nazwe jaka nam sie podoba 
