
import EditComment from "../EditComment/EditComment";
import "./Comment.css"
function Comment(props){


    return(
      <>
      <div id="comment">
        {props.AllComment.map((comment) => {
          return(
            <EditComment
            uniqId={comment.commentid}
            key={comment.commentid}
            comment={comment}
            deleteComment={props.deleteComment}
            postid={props.postid}
            editComment={props.editComment}
            likes={props.likes}
            ></EditComment>
          );
        })}
      </div>
      
      </>
    );
}
export default Comment;