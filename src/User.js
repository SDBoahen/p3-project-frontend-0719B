

function User(props){
    console.log(props)

    //// js

    //// js


    return(<>
    
        <h2>{props.userProp.name}</h2>
        <img src={props.userProp.profile_pic} alt={props.userProp.name} />
    
    </>)


}
export default User