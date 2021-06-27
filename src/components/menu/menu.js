import React from 'react'
import styles from './menu.module.css'
export function Menu(){
    return (
    <div className={styles.menu}>
        <ul className={styles.menuLinks}>
            <li className='link'>Home</li>
            <li className='link'>about</li>
            <li className='link'>Dupa</li>
            <li className='link'>Dupa</li>
        </ul>
    </div>
    )
}