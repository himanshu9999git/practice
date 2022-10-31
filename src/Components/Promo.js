const Promo = (props) => {
    const styles = {
        color: "red",
        fontSize: "30px"
    }

    let name = "Roman";
    
    return<>
        <div className="promo-section">
            <div>
                <h1 style={styles}>Don't miss this {props.w1}</h1>
            </div>
            <div>
                <h2>{props.w2} to this channel and get additional 50% off</h2>
            </div>
        </div>

        {name==="Roman"?console.log("Hi, Roman"):console.log("Hi, Mittr")}
    </>
}

export default Promo;