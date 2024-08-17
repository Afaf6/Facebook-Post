import "./NewPost.css"
import { useState } from "react";
import Pic3 from "../../assets/Images/pic3.png";

function NewPost(props) {
    const [inputvalue, setInputValue] = useState ("");

    function handleSendPost() {
        // console.log(inputvalue);
        props.CallNewPost(inputvalue);
        setInputValue("");
    }

    function handleOnChange(event) {
        // console.log("OnChangeEvent");
        // console.log(event.target.value);
        setInputValue(event.target.value);

    }
     
    return (
        <div id="SendSection">
            <img src={Pic3}/>
        <input id="PostStyle" 
        placeholder="Add a comment......"
        value={inputvalue} onChange={handleOnChange}></input>
        <button id="sendnewpost" onClick={handleSendPost}>Send</button>
      </div>
    );
}
export default NewPost;