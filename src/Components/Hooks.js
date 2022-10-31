import { useState } from "react";

const Hooks = () => {
    const [text, setText] = useState('Hello')
    // const [inputtext, setInputtext] = useState('')

    const handleClick = () => {
        setText(text === 'Hello'?"clicked" : 'Hello')
    }

    // const InputComponent = (e) => {
    //   let txt = e.target.value;
    //   setInputtext(txt);
    // }
  return (
    <>
      <div class="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          // value={inputtext}
          // onChange={InputComponent}
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div>
          
        </div>
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div onClick={handleClick}>
        {text === 'Hello'?'Hello':'I am Clicked'}
      </div>
    </>
  );
};

export default Hooks;
