

function User(props){
    console.log(props)
    // <User key={eachUser.id} userProp={eachUser}  
    //         inAppJsDeleteUser={inAppJsDeleteUser} 
    // />

    //// js

        const whoIsThis =()=>{ console.log(props.userProp.name) }


        const deleteUser =(sythEvent)=>{  
            // console.log("whatIsThisGettingBack????:    ", whatIsThisGettingBack)  // 
            console.log("DELETE in User.js") 

            // The Method in the Parent
            props.inAppJsDeleteUser(props.userProp)
    
        }

    //// js


    return(<>
    
        <h2>{props.userProp.name}</h2>
        <img src={props.userProp.profile_pic} alt={props.userProp.name} 
            onClick={whoIsThis}
        />
        <button onClick={deleteUser}>X DELETE X</button>
    
    </>)


}
export default User