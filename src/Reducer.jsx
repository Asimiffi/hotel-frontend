import React, {useState, useReducer} from 'react';

const initialState = [
    {
        id:Date.now(), username:'Asim', email: 'asim@gmail.com'
    }
]
function reducer(state, action){
    switch (action.type){
        case "add":
            return [...state, action.payload]
        case "delete":
            return state.filter(contact=>{
                return contact.id !==action.payload.id
            })    
    }
}

const CheckReducer = () => {
const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [state, dispatch] = useReducer(reducer, initialState)
const addContact = ()=>{
    const contact = {
        id:Date.now(),
        username,
        email
    }
    dispatch({type:'add', payload:contact})
    setUsername('')
    setEmail('')
}
    return(
   <div>
       <input type="text" placeholder='username' onChange={(e)=>setUsername(e.target.value)} style={{marginLeft:'10%', marginTop:'10%',marginRight:'2%',marginBottom:'3%',height:'40px'}} />
       <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}  style={{height:'40px'}}  />
       <br/>
       <button style={{marginLeft:'10%', marginRight:'10%', height:'40px'}} onClick={addContact}>Add Contact</button>
       <button style={{marginLeft:'2%', height:'40px'}}>Delete Contact</button>
        <div style={{background:'gray', border:'1px solid black', textAlign:'center', paddingTop:'5%', paddingBottom:'5%', marginTop:'2%'}}>
        {state.map((states)=>(<>
        <li>UserName: {states.username}</li>
        <li>Email: {states.email}</li>
        <button onClick={()=>dispatch({type:'delete', payload:{id:states.id}})}>delete</button>
        </>))}
        </div>
   </div>
    )
};

export default CheckReducer;
