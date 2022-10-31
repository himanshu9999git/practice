import Child from "./Child";

const Time = () => {
    const date = new Date();
    return<>
        <div>
            <Child message = {date.toLocaleString()}/>
        </div>
    </>
}

export default Time;