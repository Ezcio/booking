import React, { Component } from 'react'
import Hotel from './hotel/hotel';
import styles from './hotels.module.css'
import PropTypes from 'prop-types'

const propTypes = {
    hotels: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })).isRequired
}


class Hotels extends Component {

    render() {
        return (
             <div className={styles.hotels}>
                {this.props.hotels.map(hotel => <Hotel key={hotel.id}{...hotel}/>)}
             </div>
        );
    }
}
Hotels.propTypes = propTypes;



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