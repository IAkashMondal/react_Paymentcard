import React from "react"
import styles from "../Components/Card.module.css"
let Pay=({Payment})=>{
    return(
        <div className={styles.Pay}>
            <h3>{Payment}</h3>
        </div>
    )
}
export default Pay