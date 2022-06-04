import React from "react"
import styles from "../Components/Card.module.css"

let Logo=({date, logo})=>{
    return(
        <div  className={styles.Logo}>
            <p>{date}</p>
            <img style={{height:"100px",width:"100px"}}src={logo} alt=""></img>
        </div>
    )
}
export default Logo