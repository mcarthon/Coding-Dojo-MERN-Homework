import React, { useState } from 'react';
import styles from './BoxGen.module.css';

const BoxGen = (props) => {

    const [ color, setColor ] = useState("");

    const [ dimension, setDimension ] = useState(100);

    const [ boxColors, setBoxColors ] = useState([]);

    const pickColor = (e) => {

        e.preventDefault();        

        const updatedColors = [...boxColors, color];

        console.log(updatedColors);

        setBoxColors(updatedColors);

        setColor("");

    }

    const handleColorChange = (e) => {

        setColor(e.target.value);

    }

    return (

        <div>

        <form onSubmit={ pickColor } style={ styles.form }>

            <label>Color: </label>
            <input type="text" value={ color } onChange={ handleColorChange }/>

            <label>Dimension: </label>
            <input type="number" value={ dimension } onChange={ (e) => setDimension(e.target.value) }/>

            <input type="submit" value="Add Color"  />

        </form>
        
        <div className={ styles.container }>

        { boxColors.map( (choice, index) =>
            <div className={ styles.div } style={{ backgroundColor: choice, width: `${dimension}px`, height: `${dimension}px` }} key={ index }></div>
        ) }  
        
        </div>

            </div>

    );

}

export default BoxGen;