import React from "react"
import styles from "../Components/Card.module.css"
import Logo from "./Logo"
import Case from "./Case"
import Part2 from "./Heading"
import Pay from "./Pay"
import Devices from "./Device"
let Maincard=({date,heading,Payment,device,color,logo })=>{
    return(
        <div style={{backgroundColor:color}} className={styles.divstyle}>
            <Logo date={date} logo={logo}/>
            <Case/>
            <Part2 heading={heading}/>
            <Pay Payment={Payment}/>
            <Devices device={device}/>
        </div>
    )
       
    
}
export default Maincard