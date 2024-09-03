
import './App.css';
import Post from './Component/Post/Post';
import Pic1 from "../src/assets/Images/pic1.png";
import Pic2 from "../src/assets/Images/pic2.png";
import Pic3 from "../src/assets/Images/pic3.png";
import Pic4 from "../src/assets/Images/pic4.png";
import NewPost from './Component/NewPost/NewPost';
import {useState} from "react";
// import { useEffect, useState } from 'react';

function App() {
  const [ArrayOfObject, setArrayOfObject] = useState([

      { likes: 0,
      Pic : Pic1 , 
      Name : "amyrobson", 
      OnlineTime : "1 month ago", 
      Paragraph : "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well." ,
      id:1,
      comment:[ ],},

      { likes: 0,
        Pic : Pic2 , 
        Name : "maxblangun", 
        OnlineTime : "2 weeks ago", 
        Paragraph : "Woah your project looks awesome! How long have you been coding for? I'm still new. but think I want to dive into React into React as well soon. Perhaps you can give me an insight on where I can learn React? THanks!", 
        id:2,
        comment:[
          {likes:0,
            id : 1,
            Pic : Pic4,
            Name:"ramsesmiron",
            commenttext:"Woah your project looks awesome! How long have you been coding for?",
          },
          {likes:0,
            id : 1,
            Pic : Pic3,
            Name:"juliusomo",
            commenttext:"Woah your project looks awesome! How long have you been coding for?",
          }
        ], },
  ]);

    // useEffect (() => {
    //   function CallApi (){
    //     fetch("http://localhost:3000/users")
    //     .then ((response) => {return response.json(); })

    //     //  .catch((error) => console.error('Error fetching data:', error))
          
    //     .then((finalResult) =>{
    //       setArrayOfObject(finalResult);
    //     });
    //      } CallApi();; [] });

  
  
  function CallNewPost(Postcontent) {
    let newPostobject = 
    { likes: 0,
      Pic : Pic3 , 
      Name : "juliusomo", 
      OnlineTime : "2 weeks ago", 
      Paragraph : Postcontent,
      id: ArrayOfObject.length +1 ,
      comment:[] ,};

    // console.log(Postcontent);
    // console.log(newPostobject);

    let newArrayOfObject = [...ArrayOfObject, newPostobject];
    setArrayOfObject(newArrayOfObject);
  }

 

  // Delete Post
  function deleteItem(PostId){
    const newArrayAfterDelete = ArrayOfObject.filter((post) => {
      return post.id !=PostId
    });
    setArrayOfObject(newArrayAfterDelete);
    // console.log(PostId)
  }

 // Add New Comment
 function NewComment (commenttext, id) {
   console.log(commenttext, id);
   let myOldPost = ArrayOfObject.filter((post) => post.id == id)[0];
   let oldCommentContent = myOldPost.comment.length;
   let newCommentObject = 
   {likes:0,
    Pic : Pic3,
    Name: "juliusomo",
    OnlineTime: "2 days ago",
    commenttext: commenttext, 
    commentid: oldCommentContent + 1,
  };
 let newArrayafterUpdatet = ArrayOfObject.map((currentPost) => {
  if (currentPost.id == id){
    currentPost.comment.push(newCommentObject)
  }
  return currentPost;
 });
  setArrayOfObject(newArrayafterUpdatet);
 }
  // Delet Comment
 function deleteCommnt (postid, commentid){
  let newArrayafterdeletecomment = ArrayOfObject.map((post) =>{
    if (post.id == postid){
      let newArrayOfComment = post.comment.filter((comment) => {
        return comment.commentid != commentid;
      });
      return {...post, comment: newArrayOfComment};
    }
    return post;
  })

  setArrayOfObject (newArrayafterdeletecomment)
 }
 // Edit Comment
 function editComment (editcomment, postid, commentid){
  console.log(editcomment, postid, commentid)

  let newArrayaftereditcomment = ArrayOfObject.map((post) =>{
    if (post.id == postid){
      let newArrayOfupdatComment = post.comment.map((comment) => {
        if (comment.commentid == commentid) {
           return { ...comment, commenttext:editcomment} ;
        }
       return comment;
      });
      post = {...post, comment : newArrayOfupdatComment };
    }
    return post;
  });
  setArrayOfObject (newArrayaftereditcomment);
 }

  return (
    <>
    <div id="postwrapper">
        {ArrayOfObject.map((post) => {
          return (
            <Post 
            UniqueID={post.id}
            key={post.id} 
            likes={post.likes} 
            Pic={post.Pic} 
            Name={post.Name} 
            OnlineTime={post.OnlineTime} 
            Paragraph={post.Paragraph}
            comment={post.comment}
            NewComment={NewComment}
            deleteItem={deleteItem}
            deleteCommnt={deleteCommnt}
            editComment={editComment}
            ></Post>
          );
        })}
        
        <NewPost CallNewPost={CallNewPost}> </NewPost>
        
      </div>
    </>
      
  );
}

export default App;
