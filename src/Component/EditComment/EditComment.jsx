import "./EditComment.css"
import IconDel from "../../assets/Images/icon-delete.svg";
import EditIcon from "../../assets/Images/icon-edit.svg";
import IconPlus from"../../assets/Images/icon-plus.svg";
import IconMinus from"../../assets/Images/icon-minus.svg";
import Pic3 from "../../assets/Images/pic3.png";
import { useState } from "react";

function EditComment ({comment, postid, deleteComment, editComment, likes}) {
    const [ShowEditComment, setShowEditComment] = useState (false);
    const [inputvalue, setiputvalue] = useState (comment.commenttext)
    const [postId] = useState(postid);
    const  [commentId] = useState(comment.commentid);
    const [count, setCount] = useState(comment.likes);

    function Add() {
      let newValue = count + 1;
      setCount(newValue);
  }
  function Minus (){
      let newValue = count - 1;
      setCount(newValue);
  }

    function HandleEditComment(){
        console.log("clicked")
        const newCommentafterEdit = ! ShowEditComment;
        setShowEditComment(newCommentafterEdit);
    }

    function HandleOnChange (event){
      setiputvalue(event.target.value)
    }

    function HandleDeleteComment(){
      //  const postId = event.target.getAttribute("postid");
      //   const commentId = event.target.getAttribute("commentid");
        deleteComment(postId, commentId)
    }

    function Hnadleupdate (){
      setShowEditComment (false);
      editComment(inputvalue, postId, commentId);
    }


    return (
        <div className="commentlable">
          <div id="counter">
               <button onClick={Add}>  <img src={IconPlus} />  </button>
               <span>{count}</span>
               <button onClick={Minus}>  <img src={IconMinus} />  </button>
          </div>

                   <img className="pic"
                   src={comment.Pic}/>
                   <h4 className="text"> {comment.Name} </h4>
                 <span className="text"> {comment.OnlineTime} </span>

                    {ShowEditComment == true ? (
                        <div id="textcomment">
                        <input value={inputvalue} onChange={HandleOnChange}></input>
                        <button onClick={Hnadleupdate}> Update </button>

                        </div>
                        ) : (<p>{comment.commenttext}</p> )}
                      
                      
                      <div id="buttons">


                        {comment.Name == "juliusomo" ? (
                          <button 
                        id="delbtn"
                        className="btn"
                        onClick={HandleDeleteComment}
                        commentid = {comment.commentid}
                        postid={comment.postid}>
                       <img 
                       src={IconDel} />
                        Delete
                        </button> ) : null}
                        
                        {comment.Name == "juliusomo" ?
                        (<button 
                          uniqId={comment.commentid}
                         id="Edirbtn"
                        className="btn"
                        onClick={HandleEditComment} >
                        <img 
                        src={EditIcon} />
                        Edit
                     </button>) : null }
                      
                      </div>
                    
                    
                

        </div>
    );
}
export default EditComment;