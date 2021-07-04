import PropTypes from 'prop-types'
import React, {createRef, useContext, useEffect, useRef, useState} from 'react'
import ChangeThemContext from '../../../context/changeThemContext';

const propTypes = {
    onSearch: PropTypes.func.isRequired
}

function SearchBar(props){
    
    const changeColorButton = useContext(ChangeThemContext)

    const inputRef = createRef(null)

    const [term, setTerm] = useState('');

    const search = () =>{

        props.onSearch(term)
    }
    const onKeyHandler = (e) =>{
        if (e.key == 'Enter'){
            search()
            props.onSearch(term)
        }
    }

    useEffect(()=>{
        inputRef.current.focus()
    },[])

    return (

    <div style={{display:'flex'}}>
        <input 
            ref={inputRef}
            style={{
                width: '10rem',
                marginRight: '2rem',
                border:'none',
                borderBottom:'1px solid black'
            }}
            type='text'
            placeholder='Search...'
            className='form-control search'
            value = {term}
            onChange={e => setTerm(e.target.value)}
            onKeyDown={onKeyHandler}
            />
            <button className={`btn btn-${changeColorButton.colorButton}`} onClick={search}>
                    search
            </button>
    </div>    
    )
}
SearchBar.propTypes = propTypes
export default SearchBar