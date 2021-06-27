import React, { Component } from 'react'
import Hotel from './hotel/hotel';
import styles from './hotels.module.css'

class Hotels extends Component {
    render() {
        return (
             <div className={styles.hotels}>
                 
                <Hotel/>
                <Hotel/>
             </div>
        );
    }
}



// function Hotel(){
//     return(
//         <div>
//             <p>
//                 Hotel
//             </p>
//         </div>
//     )
// }

export default Hotels