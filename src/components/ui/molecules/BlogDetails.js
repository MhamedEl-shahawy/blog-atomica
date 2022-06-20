import {useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "hooks/useFetch";
import useFetchComment from "hooks/useFetchComment";
import Dialog from "components/ui/atom/Dialog";
const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(`${process.env.REACT_APP_API_ROOT}blogs/` + id);
  const { data: comments} = useFetchComment(`${process.env.REACT_APP_API_ROOT}comments?commentid=` + id);
  const [show, setShow] = useState(false);
  const [commentData, setCommentData] = useState({});
  const [authorComment,setAuthorComment] = useState('');
  const [descriptionComment, setDescriptionComment] = useState('');
  const navigate = useNavigate();

  const handleClick = (val) => {
    fetch(`${process.env.REACT_APP_API_ROOT}${val.updatePath}/` + val.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    }) 
  }
  const handleDialog = (val) => {
    setShow(true);
    setCommentData(val);
  };
  const handleComment = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_ROOT}comments/`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "body": descriptionComment,
        "author": authorComment,
        "id":Date.now() ,
        "commentid": id
      })
    }).then(() => {
      navigate('/');
    })
  }
  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <>
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={()=>handleClick({...blog,updatePath: 'blogs'})}>delete</button>
          <button onClick={()=>handleDialog({...blog,updatePath: 'blogs'})}>edit</button>
        </article>
        <form onSubmit={(e)=> handleComment(e)}>
           <div>
              <input type="text"   value={authorComment} placeholder="author name" onChange={(e)=>setAuthorComment(e.target.value)} />
            </div>  
            <div>
              <textarea type="text"   value={descriptionComment} placeholder="comment description" onChange={(e)=>setDescriptionComment(e.target.value)} />
            </div>  
            <button type='submit'>Add Comment</button>
        </form>
        </>
      )}
      { comments &&(comments.map(comment => (
        <div className='comment' key={comment.id}>
          <div>{ comment.body }</div>
          <p>Written by { comment.author }</p>
          <button onClick={()=>handleClick({...comment,updatePath: 'comments'})}>delete</button>
          <button onClick={()=>handleDialog({...comment,updatePath: 'comments'})}>edit</button>
        </div>
        )))}
       {show &&<Dialog   data={commentData}/>}
    </div>
  );
}
 
export default BlogDetails;