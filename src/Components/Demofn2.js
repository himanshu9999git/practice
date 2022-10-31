const bl = false;
const Ex = (props) => {
    return <>
        <h2>
            I am heading and i am {props.blval.toString()}
        </h2>
        <h1>
            I am bigger and my value is {props.sum}
        </h1>
    </>
}

const Demofn2 = () => {
    return<>
        <Ex blval = {!bl} sum = {90}/>
    </>
}

export default Demofn2;