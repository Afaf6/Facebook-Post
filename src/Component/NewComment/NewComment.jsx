import { useState } from "react";
import "./NewComment.css";
import Pic3 from "../../assets/Images/pic3.png";

function NewComment (props) {
    const [inputreply, setinputperply] = useState ("");

    function HandleOnchange (event) {
        setinputperply(event.target.value);
    }

    function HandleSendReply (event) {
        props.HideReplySection();
        const id = event.target.getAttribute("uniqueid");
        // console.log(inputreply);
        props.NewComment(inputreply,id);
        setinputperply("");
    }
    
    return (
        <div className="commentstyle">
            <img src={Pic3}/>
            <input
             className="label"
             value={inputreply}
             placeholder="Add Reply...."
             onChange={HandleOnchange}>
            </input>
            <button id="sendnewcomment"
            onClick={HandleSendReply} uniqueid={props.UniqueID}  > send Reply
            </button>
            
        </div>
    )
};
export default NewComment;