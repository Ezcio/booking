import React, { useState } from 'react';
import styles from'./header.module.scss'
import SearchBar from './searchbar/searchbar';
import img from '../../assets/images/logo.png'
function Header(){

    const [term, setTerm] = useState();

    const search = () =>{
        console.log('szukaj czegos tam')
    }
    return (
        //There is way add two class in one marker/tag very useful
        // <header className={`${styles.header} container`}> 
        <header className={styles.header}> 
            <div className={styles.logo}>
                {/* <h1 className={styles.nameBrand}>Logos</h1> */}
                <img src={img}></img>
            </div>
            <div className={styles.searchPlace}>
                <SearchBar/>
            </div>
        </header>
    )
}



export default Header  