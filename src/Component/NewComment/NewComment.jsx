import { useState } from "react";
import "./NewComment.css";
import Pic3 from "../../assets/Images/pic3.png";
import useStoreComment from "../store/counter";

function NewComment () {
    const {addComment} = useStoreComment ();
    const [value, setValue] = useState ("");

    function HandleOnchange () {
        const newObject = {id:3, Name:value};
        setValue(newObject);
    }

    function HandleSendReply (event) {
        // props.HideReplySection();
        // const id = event.target.getAttribute("uniqueid");
        // // console.log(inputreply);
        // props.NewComment(value,id);
        setValue(event.target.value);
    }
    
    return (
        <div className="commentstyle">
           
                <>
                <img src={Pic3}/>
                <input
              className="label"
               value={value}
             placeholder="Add Reply...."
             onChange={HandleOnchange}>
            </input>
            <button id="sendnewcomment"
            onClick={HandleSendReply} > send Reply
            </button>
                </>
        
            
            
        </div>
    )
}
export default NewComment;

// event.target.value, uniqueid={props.UniqueID}  