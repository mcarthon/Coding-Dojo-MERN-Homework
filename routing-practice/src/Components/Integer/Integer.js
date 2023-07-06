import React, { useParams } from 'react-router';

const Integer = () => {

    const { integer } = useParams();

    return (

        <div>

            <p> 

                The number is: { integer }

            </p>

        </div>

    );

}

export default Integer;