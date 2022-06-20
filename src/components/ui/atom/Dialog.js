import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";

 const Dialog = ({data}) => {
    const [body, setBody] = useState("");
    const [title,setTitle] = useState("");
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_API_ROOT}${data.updatePath}/${data.id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify({
            body: body.toString().trim() !== ""? body:data.body,
            title:  title.toString().trim() !== ""? title:data.title,
            author: data.author,
            id: data.id,
            commentid: data?.commentid
            })
          }).then(() => {
            navigate('/');
          })
    };
  return (
     <div  className="modal">
        <div className="modal-content">
         <form onSubmit={(e)=> handleUpdate(e)}>
         <div>
            <label htmlFor='description'>Description of {data.updatePath}</label>
            <textarea className='textarea-comment' id="description" type="text" onChange={(e)=> setBody(e.target.value)} defaultValue={data.body} />
         </div>
            <div>
            {data?.title&&
            <>
            <label htmlFor='title'>Description of Title</label>
            <textarea className='textarea-comment' id="title" type="text" onChange={(e)=> setTitle(e.target.value)} defaultValue={data.title} />}
            </>
             }
             </div>
            <button type='submit'>Update</button>
         </form>
        </div>
    </div>
  )
}
export default Dialog;