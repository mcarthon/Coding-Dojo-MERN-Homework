import { useParams } from "react-router-dom";

const Hello = () => {

    const { fontColor, backgroundColor } = useParams();

    const style = {

        color: fontColor,

        background: backgroundColor

    };

    return (

        <>
        
            <h1 style={ style }>

                The word is hello

            </h1>

        </>

    )

}

export default Hello;