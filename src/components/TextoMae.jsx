import TextoFilho from "./TextoFilho";

function TextoMae(props){
    return(
        <>
        <TextoFilho texto = {props.mae}></TextoFilho>
        </>
    )

}

export default TextoMae;