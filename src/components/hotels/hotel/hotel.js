import react, { useContext } from 'react'
import styles from './hotel.module.css'
import image1 from '../../../assets/images/image1.jpg'
import PropTypes from 'prop-types';
import ChangeThemContext from '../../../context/changeThemContext';
import React from 'react';

const propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired

}


function Hotel(props){
    
    const changeThemContext = useContext(ChangeThemContext)

    return(
        <div className={styles.hotel}>
            <div className={styles.imageSection}>
                <img
                src={image1}
                className={styles.imageHotel}
                />                
            </div>  

            <div className={styles.informationSection}>
                <h1>{props.name}</h1>
                <p>{props.city}</p>
                <p>{props.description}</p>
            </div> 

            <div className={styles.clickToKnowMoreAboutTheHotel}>
                <div className={styles.sectionNotesAndOpinions}>

                </div>
                <div className={styles.buttonInformation}>
                    <button className={`btn btn-${changeThemContext.colorButton}`}>Click to Know More</button>
                </div>
            </div>
        </div>
    )
}

Hotel.propTypes = propTypes

export default Hotel