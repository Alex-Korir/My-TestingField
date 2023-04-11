import React from 'react'

function Comments() {
    const [comment, setComment] = React.useState('')
    const [comments, setComments]= React.useState([])

    function handleChange(e){
        setComment(e.target.value)
    }
    function handleClick(){
        setComments((textComment)=>[...textComment, comment])
        console.log(comments)
    }
    const headstyle ={
        width:'200px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'

    }
    
  return (
    <div style={headstyle}>
        
        {comments.map((text, index) => (
            <div key={index}>
                {text}
            </div>))
        }
        <div>
            <textarea 
            name="comment" 
            id="comment" 
            cols="2" 
            rows="2"
            onChange={handleChange}
            value={comment}
            >
            </textarea>
            <button onClick={handleClick}> handleChange</button>
        </div>
    </div>
  )
}

export default Comments