import React from 'react'
import "./Sidebaroption.css"


function Sidebaroption({active, Icon, optionlabel}){
    return(
        <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <h2 class='sidebar__icon'><Icon /> {optionlabel}</h2>
        </div>
    )
}

export default Sidebaroption;