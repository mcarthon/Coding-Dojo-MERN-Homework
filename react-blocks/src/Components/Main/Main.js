import React, { Component } from "react";
import styles from './Main.module.css';

const Main = (props) => {

    return (

        <div className={ styles.div }> { props.children } </div>

    );

}

export default Main;