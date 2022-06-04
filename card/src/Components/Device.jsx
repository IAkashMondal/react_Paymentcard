import React from "react"
import styles from "../Components/Card.module.css"
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
let Device=({device})=>{
    return(
        <div className={styles.device}>
            <p>{device}  </p>
            <div style={{ width:"60px",height:"60px",marginLeft:"60%",marginTop:"3%"}}  >{`🠖`}</div>
        </div>
    )
}
export default Device

