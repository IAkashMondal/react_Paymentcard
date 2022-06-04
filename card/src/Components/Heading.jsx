import React from "react"
import styles from "../Components/Card.module.css"
let Heading=({heading})=>{
    return(
        <div  className={styles.Heading}>
            <h3>{heading}</h3>
        </div>
    )
}
export default Heading