
import React, {useState} from 'react'
function SearchBar(){
    const [term, setTerm] = useState('');

    const search = () =>{
        console.log(term)
    }
    const onKeyHandler = (e) =>{
        if (e.key == 'Enter'){
            search()
        }
    }

    return (

    <div>
        <input 
            style={{
                width: '150px',
                backgroundColor:'transparent',
                marginRight: '2rem',
                border:'none',
                borderBottom:'1px solid black'
            }}
            type='text'
            placeholder='Search...'
            className='form-control'
            value = {term}
            onChange={e => setTerm(e.target.value)}
            onKeyDown={onKeyHandler}
            />
            <button className='btn btn-primary material-icons-outlined' onClick={search}>
                    search
            </button>
    </div>    
    )
}

export default SearchBar