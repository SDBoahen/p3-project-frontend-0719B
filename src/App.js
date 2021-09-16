import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

import User from './User';
import CuteCritter from './CuteCritter';




function App() {
  console.log("Yurrrr! Back like we neva left!")


  const[users, setUsers] = useState( [] )
  console.log("State of Our Users: ", users)

    const[loggedInUser, setLoggedInUser] = useState( {} )
    console.log("State of Our LoggedInUser: ", loggedInUser)

  const[cuteCrtitters, setCuteCrtitters] = useState( [] )
  console.log("State of Our CuteCrtitters: ", cuteCrtitters)





  useEffect( ()=>{


    // GET Fetch()  for Users
    fetch("http://localhost:9292/users")
    .then(r => r.json())
    .then(fetchedUsers =>{ console.log("fetchedUsers >  ", fetchedUsers)
    
      setUsers(fetchedUsers)

    })


    // GET Fetch()  for CuteCritters
    fetch("http://localhost:9292/cute_critters")
    .then(r => r.json())
    .then(fetchedCuteCrtitters =>{ console.log("fetchedCuteCrtitters >  ", fetchedCuteCrtitters)
    
      setCuteCrtitters(fetchedCuteCrtitters)

    })


  } , [] )








  const fetchAhloggedInUser =()=>{
    console.log("❗️❗️👋👀 REMEMBER - WE SHOULD BE HITTING A PRY 👋👀❗️❗️")   //

    fetch(`http://localhost:9292/users/3`)
    .then(r => r.json())
    .then(fetchedUserInstanceFromTheBackendDB => {console.log(fetchedUserInstanceFromTheBackendDB) 
    
      setLoggedInUser(fetchedUserInstanceFromTheBackendDB)

    })

  }
  const showloggedInUserIfOneActive =()=>{
    console.log("IS THERE A RANDOM USER: ", loggedInUser)

    // Object.keys(obj).length === 0 
    if(Object.keys(loggedInUser).length === 0){

      console.log("No One 👀")
      return(<></>)

    }
    else{

      return(<><h2>⚛✨✨✨✨✨✨✨✨⚛</h2>
          <User key={loggedInUser.id} userProp={loggedInUser} 
                inAppJsDeleteUser={inAppJsDeleteUser}
          />
      <h2>⚛✨✨✨✨✨✨✨✨⚛</h2></>)

    }


  } 
  //X// if(loggedInUser === {}){ 








  const inAppJsDeleteUser =(userToDelete)=>{
    console.log("DELETE In App.Js")  //
    console.log("User to DELETE  :(  :  ", userToDelete)  //
    console.log("❗️❗️👋👀 REMEMBER - WE SHOULD BE HITTING A PRY 👋👀❗️❗️")   //


    const id = userToDelete.id


    // Just For Reference:  fetch(`http://localhost:9292/users/${userToDelete.id}`, { method, headers, body } )
    fetch(`http://localhost:9292/users/${id}`, {

      method: 'DELETE'

    })
    .then(r => r.json())
    .then(theUserThatWasDeleted => { console.log("theUserThatWasDeleted ->  ", theUserThatWasDeleted) 
  

      //// * * * *  FRONTEND Rendering  * * * *  //
      let usersRemaining = users.filter(eachUser => eachUser.id != userToDelete.id)
        console.log("WHO'S STAYING???? ", usersRemaining)  //
      setUsers( [...usersRemaining] )

  
    })
    
    //// 
    //✅// filter - filtering our previous user BEFORE the DELETE
    //✅// users[] - useState 
    //✅// setUsers(  [...usersRemaining]  )
    ////


  }







  const[nameForCritter, setNameForCritter] = useState( "" )
  const[imageForCritter, setImageForCritter] = useState( "" )
  const[userForCritter, setUserForCritter] = useState( "" )

  const addNewCritterFrontendAndBackendProcess =(synthEvent)=>{
    console.log("In addNewCritterFrontendAndBackendProcess")  //
    synthEvent.preventDefault()
    // event.preventDefault()


      let critterObjToPOST ={
        name: nameForCritter,
        image: imageForCritter,
        user_id: userForCritter
      }
      console.log("HEY! WE'RE ABOUT TO POST THIS! ->  ", critterObjToPOST)  //
      console.log("❗️❗️👋👀 REMEMBER - WE SHOULD BE HITTING A PRY 👋👀❗️❗️")   //


    // Just For Reference:  fetch("http://localhost:9292/cute_critters", { method, headers, body } )
    fetch("http://localhost:9292/cute_critters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(critterObjToPOST) 
    })
    .then(r => r.json())
    .then(postedCritter => { console.log("HEY THIS IS WHAT WE POSTED ->  ", postedCritter) 
  
     // 
  
    })

    
  }
  const userTypingName =(sythEvent)=>{
    console.log("typing...")
    console.log(sythEvent.target.value)

      if(sythEvent.target.value === "Sam"){ console.log("Ayeeee! ;)")}

    setNameForCritter(sythEvent.target.value)


  }





  return (
    <div className="App">


      <header className="App-header">
      <>
        <div  onClick={fetchAhloggedInUser} >
          {showloggedInUserIfOneActive()}
          <img src={logo} className="App-logo" alt="logo" />
        </div>

      </>
        
        <>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
        </>
         {/* ❗️❗️ Y'ALL SHOULD BE ACTUALLY USING PADDING + STYLING FOR SPACING ❗️❗️ */}



            ++++++++<br/>

          <form onSubmit={addNewCritterFrontendAndBackendProcess}>


            <label>
              Name: <input onChange={userTypingName} value={nameForCritter} />
            </label><br/>
            <label>
              Image: <input />
            </label><br/>
            <label>
              Pal(User): <input />
            </label><br/>


            {/* This IS The Submit Button */}
            <input type="submit" value="ADD A NEW CRITTER✨" />


          </form>

            ++++++++<br />

            {/* #MORE-WORK 😅🎉 */}
            {/* <input name="in1" />
            <input />
            <input />
            <input />
            <button>SUBMIT</button> */}



        <>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
        </>


        {
          users.map(eachUser =>{ return <User key={eachUser.id} userProp={eachUser} allCritters={cuteCrtitters}
            inAppJsDeleteUser={inAppJsDeleteUser} 
          /> })
        }
        {
          cuteCrtitters.map(eachCuteCritter =>{ return <CuteCritter key={eachCuteCritter.id} cuteCritterProp={eachCuteCritter} /> })
        }



        <>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
        </>
        


        
      </header>
    </div>
  );
}

export default App;












// import logo from './logo.svg';
// import './App.css';

// import { useEffect, useState } from 'react';

// import User from './User';




// function App() {
//   console.log("Yurrrr! Back like we neva left!")


//     const[users, setUsers] = useState( [] )
//     console.log("State of Our Users: ", users)

//     const[loggedInUser, setLoggedInUser] = useState( {} )
//     console.log("State of Our loggedInUser: ", loggedInUser)


//   useEffect( ()=>{

//     fetch("http://localhost:9292/users")
//     .then(r => r.json())
//     .then(fetchedUsers =>{ console.log(fetchedUsers)
    
//       setUsers(fetchedUsers)

//     })

//   } , [] )



//   const handleDateSubmit =(e)=>{ e.preventDefault(); 
//     // console.log(e.target.date.value)
//     // let dateToFormat = e.target.date.value
//     ////  body: JSON.stringify(dateToFormat)

//     console.log(e.target.username.value)
//     let nameOfNewUser = e.target.username.value

//     // fetch("http://localhost:9292/tests",
//     fetch("http://localhost:9292/users",
//     { method: "POST",
//       headers: { 
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//         // "Access-Control-Allow-Origin": http://localhost:8080/
//       },
//       body: JSON.stringify(dateToFormat)
//     })
//     .then(r => r.json())
//     .then(console.log)

  
//   }


//   const fetchAhloggedInUser=()=>{

//     console.log("fetch AH RAHNDAHM User!")  //
//       console.log("❗️❗️👋👀 REMEMBER - WE SHOULD BE HITTING A PRY 👋👀❗️❗️")  //

//     fetch(`http://localhost:9292/users/1`)
//     .then(r => r.json())
//     .then(fetchedUserInstance =>{ console.log(fetchedUserInstance)
    
//       setLoggedInUser(fetchedUserInstance)

//     })

//   }
//   const showloggedInUserIfOneActive =()=>{
//     console.log(loggedInUser)
//       // Object.keys({})
//       // L>  

//     if(Object.keys(loggedInUser).length == 0)
//     { 
//       console.log("No One 👀")
//       return(<></>)
//     } //-x-//if(loggedInUser == {})
//     else{
//       return(<><h2>⚛✨✨✨✨✨✨✨✨⚛</h2>
//         <User key={loggedInUser.id} userProp={loggedInUser} />
//         <h2>⚛✨✨✨✨✨✨✨✨⚛</h2></>)
//     }

//   }



//   return (
//     <div className="App">
//       <header className="App-header">

//         <div onClick={fetchAhloggedInUser} >
//           <span>
//             {showloggedInUserIfOneActive()}
//             <img src={logo} className="App-logo" alt="logo" />
//           </span>
//         </div>


//         <>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         </>
//         {/* ❗️❗️ Y'ALL SHOULD BE ACTUALLY USING PADDING + STYLING FOR SPACING */}


//         {
//           users.map(eachUser =>{ return <User key={eachUser.id} userProp={eachUser} /> })
//         }

//         <>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         </>

//         <form onSubmit={handleDateSubmit}>
//           <input type="text" name="username" />
//           <input type="submit"/>
//         </form> 

//         {/* <form onSubmit={handleDateSubmit}>
//           <input type="date" name="date" />
//           <input type="submit"/>
//         </form> */}
//           {/* <form onSubmit={ (e)=>{ e.preventDefault(); console.log(e.target.date.value)} }>
//             <input type="date" name="date" />
//             <input type="submit"/>
//           </form> */}
        

        
//       </header>
//     </div>
//   );
// }

// export default App;
