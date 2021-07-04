import  Header from './components/header/header.js' //to jest z wykorzystaniem export default
import './App.scss';
import {Menu} from './components/menu/menu.js' //to jest z wykorzystaniem exportowaniem poszczegolnej czesci
import Hotels from './components/hotels/hotels'
import {useEffect, useReducer, useState } from 'react';
import LoadingIcon from './components/UI/loadingIcon.js';
import SearchBar from './components/header/searchbar/searchbar.js';
import Layout from './components/layout/layout'
import Footer from './components/footer/footer.js';
import AuthContext from './context/authContext.js';
import ChangeThemContext from './context/changeThemContext.js';


const copyHotels = [
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

const initialState = {
  colorButton: 'warning',
  hotels: [],
  isAuthenticated: false,
  loading: true
}
      
function App() {
        
  const reducer = (state, action) =>{
        
      switch(action.type) {
        case 'change-color-button':
          return{

            ...state, 
            colorButton: state.colorButton === 'warning' ? 'primary' : 'warning'

          }

        case 'set-hotels':
          return {

            ...state, hotels: action.hotels

          }

        case 'set-loading':
          return {

            ...state, loading: action.loading

          }
        
        case 'set-isAuthenticated':
          return{

            ...state, isAuthenticated: action.isAuthenticated

          }



        default:
          throw new Error ('nie ma takiej akcji' + action.type)
      }
        
  }

  // const [hotels, setHotel] = useState('')
  // const [loading, setLoading] = useState(true)
  // const [isAuthenticated, setIsAuthenticated] = useState(false)

  const [state, dispatch] = useReducer(reducer , initialState)

  useEffect(()=>{
    setTimeout(() => {

      dispatch({ type:'set-hotels', hotels: copyHotels })
      dispatch({ type:'set-loading', loading: false })

    },1000)
  },[])

  const searchHandler = (term) => {
          const newHotels =[...copyHotels].filter(x => x.name.toLowerCase().includes(term.toLowerCase()) || x.category.toLowerCase().includes(term.toLowerCase()))

          dispatch({ type: 'set-hotels', hotels: newHotels })
        };
  
  const changeColorButton = () =>{

      dispatch({ type: 'change-color-button' })
      console.log(state.colorButton)

    }

  const header = (
      <Header>
        <SearchBar onSearch = {(term) => searchHandler(term)}/>
      </Header>
    );

    const menu = (<Menu/>);

    const content = (
      state.loading ? <LoadingIcon/> : <Hotels hotels={state.hotels}/> 
    );

    const footer = (<Footer/>);  

  return(
    <AuthContext.Provider value={{ 
              isAuthenticated: state.isAuthenticated,
              login: () => dispatch({ type: 'set-isAuthenticated', isAuthenticated: true }),
              logout: () => dispatch({ type: 'set-isAuthenticated', isAuthenticated: false })
            }}>
              <ChangeThemContext.Provider value={{
                colorButton: state.colorButton,
                onChangeColorButton: changeColorButton
              }}>
              <Layout
                Header={header}
                menu={menu}
                content={content}
                footer={footer}
                />
              </ChangeThemContext.Provider> 
              </AuthContext.Provider>
  )
}




// class App extends Component {

//     hotels = [
//       {
//         id:1,
//         name: 'Pod akacjami',
//         city: 'Warszawa',
//         description: 'lorem ipsum',
//         image:'',
//         category:'hotel'
//       },
//       {
//         id:2, 
//         name: 'Debowy',
//         city: 'bialystok',
//         description: 'lorem ipsum',
//         image:'',
//         category:'hotel'
//       }
//     ]


//     state = {
//       hotels: '',
//       loading:true,
//       isAuthenticated:false,
//       colorButton:'danger'
//     }
//     searchHandler (term){
//       const hotels =[...this.hotels].filter(x => x.name.toLowerCase().includes(term.toLowerCase()) || x.category.toLowerCase().includes(term.toLowerCase()))
//       this.setState({hotels})
//     }

//     componentDidMount(){
//         setTimeout(() => {
//           this.setState({hotels: this.hotels})
//           this.setState({loading: false})
//         },1000)

//     }
    
//     changeColorButton = () =>{
//       const newTheme = this.state.colorButton === 'primary' ? 'danger' : 'primary';
//       this.setState({colorButton: newTheme})
//     }
    
//   render (){
//     //there is logic componenent next step is give components as variable

//     const header = (
//     <Header>
//       <SearchBar onSearch = {(term) => this.searchHandler(term)} them={this.theme}/>
//     </Header>
//     );
//     const menu = (<Menu/>);
//     const content = (
//       this.state.loading ? <LoadingIcon/> : <Hotels hotels={this.state.hotels}/> 
//     );
//     const footer = (<Footer/>);
    
//     return (
//       <AuthContext.Provider value={{ 
//         isAuthenticated: this.state.isAuthenticated,
//         login: () => this.setState({isAuthenticated: true}),
//         logout: () => this.setState({isAuthenticated: false})
//       }}>
//         <ChangeThemContext.Provider value={{
//           colorButton: this.state.colorButton,
//           onChangeColorButton: this.changeColorButton
//         }}>
//         <Layout
//           Header={header}
//           menu={menu}
//           content={content}
//           footer={footer}
//           />
//         </ChangeThemContext.Provider> 
//         </AuthContext.Provider>

//     );
//   }
// }

export default App;

//default robi to ze w momencie importowania go jestesmy nadac nazwe jaka nam sie podoba 
