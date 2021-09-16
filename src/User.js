import CuteCritter from "./CuteCritter"


function User(props){
    console.log(props)
        // <User key={eachUser.id} userProp={eachUser} allCritters={cuteCrtitters}
        //     inAppJsDeleteUser={inAppJsDeleteUser} 
        //   />

        
    //// js


    console.log("allCritters:  ", props.allCritters)
    //X//  WE DON'T HAVE ACCESS TO OUR BACKEND METHODS OR ASSOCIATIONS -- DIRECTLY -- ON THE FRONTEND  :(
    // console.log(props.userProp.cute_critters)


        const whoIsThis =()=>{ console.log(props.userProp.name) }


        const deleteUser =(sythEvent)=>{  
            // console.log("whatIsThisGettingBack????:    ", whatIsThisGettingBack)  // 
            console.log("DELETE in User.js") 

            // The Method in the Parent
            props.inAppJsDeleteUser(props.userProp)
    
        }

        //  #TEAMFrontend
        const renderCuteCrittersIfAny =()=>{


            if(props.allCritters != undefined){


                return(
                    props.allCritters.map( (eachCritter)=>{ 
                    
                        if(eachCritter.user_id === props.userProp.id){

                            return( <CuteCritter key={eachCritter.id} cuteCritterProp={eachCritter} /> )

                        }
                        else{  console.log("THAT'S NOT YOUR CRITTER!!  >:[ ") }
                    
                    
                    })
                )

            } 
            else{

                return(<></>)

            }


        }

        // #TEAMBackend
        const renderYourCuteCrittersFromBackendSerialization =()=>{
            console.log("In renderYourCuteCrittersFromBackendSerialization")
            console.log("WORKING TO USE SERIALIZATION:  ", props.userProp.cute_critters)

            return( 
                props.userProp.cute_critters.map(eachCritter =>  <CuteCritter key={eachCritter.id} cuteCritterProp={eachCritter} /> )
            )


        }


    //// js


    return(<>
    
        <br></br>
        ================================


        <h2>{props.userProp.name}</h2>
        <img src={props.userProp.profile_pic} alt={props.userProp.name} 
            onClick={whoIsThis}
        />
        <button onClick={deleteUser}>X DELETE X</button>

        <br></br>

        ======== My Critters🥰 ========
        { renderYourCuteCrittersFromBackendSerialization() }
        {/* { renderCuteCrittersIfAny() } */}

        <br></br>

        ================================
    
    </>)


}
export default User