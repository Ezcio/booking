import react from 'react'
import styles from './hotel.module.css'
import image1 from '../../../assets/images/image1.jpg'
function Hotel(props){
    return(
        <div className={styles.hotel}>
            <div className={styles.imageSection}>
                <img
                src={image1}
                className={styles.imageHotel}
                />                
            </div>  

            <div className={styles.informationSection}>
                <h1>Name Hotel</h1>
                <p>Miasto</p>
                <p>Opis</p>
            </div> 

            <div className={styles.clickToKnowMoreAboutTheHotel}>
                <div className={styles.sectionNotesAndOpinions}>

                </div>
                <div className={styles.buttonInformation}>
                    <button>Click to Know More</button>
                </div>
            </div>
        </div>
    )
}

export default Hotel