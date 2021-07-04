import React, { useContext } from 'react'
import styles from './menu.module.css'
import AuthContext from '../../context/authContext'
import ChangeThemContext from '../../context/changeThemContext'
export function Menu(){

    const auth = useContext(AuthContext)
    const changeThemContext = useContext(ChangeThemContext)

    return (

        <div className={styles.menu}>
            <ul className={styles.menuLinks}>
                <li className='link'>Home</li>
                <li className='link'>about</li>
                {auth.isAuthenticated ? <li className='link' onClick={auth.logout}>wyloguj</li> : <li className='link' onClick={auth.login}>zaloguj</li> }
                <li className='link' onClick={changeThemContext.onChangeColorButton}>Change</li>
            </ul>
    </div>

    )
}