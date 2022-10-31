const Btn = () => {
    const clkbtn = () => {
        console.log("Button Clicked");
    }

    const msovr = () => {
        console.log("Mouse Over");
    }

  return (
    <>
      <button onMouseOver={msovr} onClick={clkbtn}>
        <div className="btntxt">
        <h2>I am button</h2>
        </div>
      </button>
    </>
  );
};

export default Btn;
