import React from "react";
import styles from './styles.module.css'

const TodoElemnt = () =>{
    return(
        <div className={styles.Todo}>
            <div className={styles.text}>
                <p>djfbgjbgjdhbfdgjdbdgssdfh</p>
            </div>
            <div className={styles.buttonBox}>
                <div className={styles.button}>
                    <p>do</p>
                </div>
            </div>    
        </div>
    );
}

export default TodoElemnt;