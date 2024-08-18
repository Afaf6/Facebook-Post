import { useState } from "react";
import "./Post.css";
import IconPlus from"../../assets/Images/icon-plus.svg";
import IconMinus from"../../assets/Images/icon-minus.svg";
import IconDel from"../../assets/Images/icon-delete.svg"
import IconReply from"../../assets/Images/icon-reply.svg"
import NewComment from "../NewComment/NewComment";
import Comment from "../Comment/Comment";
function Post(props) {
    const [count, setCount] = useState(props.likes);
    const [AddReply, setAddReply] = useState (false);

    function Add() {
        let newValue = count + 1;
        setCount(newValue);
    }
    function Minus (){
        let newValue = count - 1;
        setCount(newValue);
    }
    function HandleDelete(event) {
        props.deleteItem(event.target.getAttribute("uniqueid"));
    }
    function HandleReplyPost(){
        console.log("clicked");
        let finalresult = !AddReply;
        setAddReply(finalresult);
    }
    function HideReplySection(){
        setAddReply(false)
    }
    

    return (
        <>
        <div id="Poststyle">
            <div id="counter">
               <button onClick={Add}>  <img src={IconPlus} />  </button>
               <span>{count}</span>
               <button onClick={Minus}>  <img src={IconMinus} />  </button>
          </div>

          <div id="Label">

            <div id="header">
                <div id="mainpost">
                <img src={props.Pic} />
                <h4 className="text"> {props.Name} </h4>
                <span className="text"> {props.OnlineTime} </span></div>
                
                <div id="buttons">

                <button 
                onClick= {HandleReplyPost}
                className="btn" id="Relbtn">
                    <img src={IconReply} />
                    <span> Reply </span>
                </button>

                {props.Name == "juliusomo" ? (
                 <button 
                 uniqueid={props.UniqueID} 
                 className="btn"
                 id="Delbtn" 
                 onClick={HandleDelete}>
                 <img src={IconDel}/>
                  Delete</button>
                  ) : null}
                 </div>
              </div>


            <div id="Post">
               <p> {props.Paragraph} </p>
           </div> 
          </div>
          
        </div>

        <Comment 
         likes={props.likes}
        editComment={props.editComment}
        deleteComment={props.deleteCommnt}
        postid={props.UniqueID}
        AllComment ={props.comment}>
        </Comment>
        <div id="countercomment">
            {AddReply == true ? (
        <NewComment 
        likes={props.likes}
        HideReplySection={HideReplySection}
        NewComment={props.NewComment} 
        UniqueID={props.UniqueID}></NewComment> ) : null} </div>
        </>
       
        
        
    );
}
export default Post;