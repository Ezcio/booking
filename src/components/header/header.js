import React, { useState } from 'react';
import styles from'./header.module.scss'
import withMousePosition from '../../Hoc/withMousePosition';
import headerImage from '../../assets/images/headerImage.jpg'

function Header(props){

    const paralaxStyles = {
        transform: `translate(${props.mouseX / 500}px, ${props.mouseY / 500}px)`
    }
    return (
        //There is way add two class in one marker/tag very useful
        // <header className={`${styles.header} container`}> 
        <header className={styles.header} style={{color:'white'}}> 
            <div className={styles.headerBackground} style={paralaxStyles}></div>
            <div className={styles.searchPlace}>
                {props.children}
            </div>
        </header>
    )
}



export default withMousePosition(Header)  