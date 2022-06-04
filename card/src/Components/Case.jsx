import React from "react"
import styles from "../Components/Card.module.css"

let Case=({date})=>{
    return(
        <div  className={styles.Case}>
           <button style={{ fontSize:"20px",width:"20%",color:"white",backgroundColor: "black",paddingTop: "10px",paddingBottom:"10px"}}>Case Study</button>
        </div>
    )
}
export default Case