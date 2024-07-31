import React from "react";
import styles from './styles.module.css'

const TodoElemnt = (props) =>{
    return(
        <div className={styles.Todo}>

            <div className={styles.info}>

                <div className={styles.date}>
                    <p>{props.time}</p>
                    <p>{props.date}</p> 
                </div>

                <div className={styles.text}>
                    <p>{props.text}</p>
                </div>

            </div>

            <div className={styles.buttonBox}>
                <div className={styles.button} onClick={()=>{ props.deleteTasck(props.id)}}>
                    <p>do</p>
                </div>
            </div>    
        </div>
    );
}

export default TodoElemnt;