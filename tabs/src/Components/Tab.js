import React, { useState } from 'react';

const Tab = ({items}) => {

    const [ activeIndex, setActiveIndex ] = useState(0);

    const eventHandler = ( e, index ) => {

        e.preventDefault();

        setActiveIndex(index);

    }        

    return (

        <div>

            <ul>

                { items.map( ( item, index ) =>
                
                    <li key={ index }>

                        <button onClick={ (e) => eventHandler(  e, index ) } > item.label </button>

                    </li>    

                ) }

            </ul>

            <p>{ items[ activeIndex ].content }</p>

        </div>

    );

}

export default Tab;