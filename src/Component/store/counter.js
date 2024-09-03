import { create } from "zustand";
import Pic1 from "../../assets/Images/pic1.png";
import Pic2 from "../../assets/Images/pic2.png";

// const useStore = create ((set) => ({
//     num: 0 ,
//     inc: () => set ((state) =>({num: state.num+1})),
//     dec: () => set ((state) => ({num:state.num-1})),
// }))

// export default useStore

const useStoreComment = create ((set) => ({
    commentArray:[
        
      { count: 0,
        inc: () => set ((state) => ({count: state.count + 1})),
        dec: () => set ((state) => ({count: state.count - 1})),
        Pic : Pic1 , 
        Name : "amyrobson", 
        OnlineTime : "1 month ago", 
        Paragraph : "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well." ,
        id:1 },
  
        { count: 0,
            inc: () => set ((state) => ({count: state.count + 1})),
            dec: () => set ((state) => ({count: state.count - 1})),
          Pic : Pic2 , 
          Name : "maxblangun", 
          OnlineTime : "2 weeks ago", 
          Paragraph : "Woah your project looks awesome! How long have you been coding for? I'm still new. but think I want to dive into React into React as well soon. Perhaps you can give me an insight on where I can learn React? THanks!", 
          id:2,}
    ],
    addComment: (newObject) => set ((comment) => ({commentArray: [...comment.commentArray,newObject]})) 
}))
export default useStoreComment


// set is a function responsible for changing the values inside the store