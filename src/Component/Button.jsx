import React from "react";
import  styles from "./Button.module.css"

const getStyleForType = (type) => {
    switch(type) {
        case "Success":
            return {
                color : "black"
            }
            case "Warning":
            return {
                color : "green"
            }
            case "error":
            return {
                color : "pink"
            }
            default: 
            return{}
    }
}
function Button(props){
    const {title , type} = props;
  const style = getStyleForType(type);
    return (
     <button className={styles.button} style={style}> {title}</button>
    )
    }

export default Button;