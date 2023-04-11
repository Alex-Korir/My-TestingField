import React from 'react'
import data from "./data.js"
import "./searchfunctionality.css"


function SearchFunctionality() {
    const[search, setSearch] = React.useState('')
    const [comment, setComment]= React.useState('')
    const [comments, setComments]= React.useState([])
    function handleChange(e){
        setComment(e.target.value)
    }
    function handleOnClick(){
        setComments((prevComments)=>[...prevComments,comment])
        setComment('')
    }
    const [addComment, setAddComment] = React.useState(false)
    function handleAddComment(){
        setAddComment((prevAddComment)=>!prevAddComment)
    }
    
  return (
    <div className='Main-info-container'>
        <input type="text" placeholder='Search...' onChange={(e)=> setSearch(e.target.value)} style={{padding:'20px', width:'40px'}}/>
        {data.filter((filteredPerson)=>{
            if(search === ''){
                return filteredPerson
            }else if( 
                filteredPerson.name.toLowerCase().includes(search.toLowerCase())||
                filteredPerson.title.toLowerCase().includes(search.toLowerCase())
            ){
                return filteredPerson
            }
        }).map((person)=>{
            const {name, title, image, details} = person
            return(
                <div>
                    <div className='info-container'>
                        <h1>{name}</h1>
                        <img src={image} alt={name}/>
                        <h2>{title}</h2>
                        <p>{details}</p>
                        {addComment && 
                            <div>
                                <div>
                                <h5>Comments</h5>
                                {comments.map((text, index) => (
                                    <div key={index}>
                                        {text}
                                    </div>))
                                } 
                                </div> 
                            
                                <div className='comment-area'>
                                    <textarea 
                                    name="comment" 
                                    id="comment" 
                                    cols="2" 
                                    rows="2"
                                    onChange={handleChange}
                                    value={comment}
                                    >
                                    </textarea>
                                    <button onClick={handleOnClick}> Comment</button>
                                </div>
                            </div>
                        }
                        <button onClick={handleAddComment}>{addComment? 'Close Comments': 'Add Comments'}</button>                 
                    </div>
                    
                </div>
                

            )
        })}
    </div>
  )
}

export default SearchFunctionality