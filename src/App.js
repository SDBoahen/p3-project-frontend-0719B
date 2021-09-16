import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

import User from './User';




function App() {
  console.log("Yurrrr! Back like we neva left!")


  const[users, setUsers] = useState( [] )
  console.log("State of Our Users: ", users)

  const[loggedInUser, setLoggedInUser] = useState( {} )
  console.log("State of Our loggedInUser: ", loggedInUser)





  useEffect( ()=>{

    fetch("http://localhost:9292/users")
    .then(r => r.json())
    .then(fetchedUsers =>{ console.log(fetchedUsers)
    
      setUsers(fetchedUsers)

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
    console.log("DELETE In App.Js")
    console.log("User to DELETE  :(  :  ", userToDelete)


    const id = userToDelete.id


    // Just For Reference:  fetch(`http://localhost:9292/users/${userToDelete.id}`, { method, headers, body } )
    fetch(`http://localhost:9292/users/${id}`, {

      method: 'DELETE'

    })
    // .then(r => r.json())
    // .then(theUserThatWasDeleted => { console.log("theUserThatWasDeleted ->  ", theUserThatWasDeleted) 
  

      //// * * * *  FRONTEND Rendering  * * * *  //
      let usersRemaining = users.filter(eachUser => eachUser.id != userToDelete.id)
        console.log("WHO'S STAYING???? ", usersRemaining)  //
      setUsers( [...usersRemaining] )

  
    // })
    
    //// 
    //✅// filter - filtering our previous user BEFORE the DELETE
    //✅// users[] - useState 
    //✅// setUsers(  [...usersRemaining]  )
    ////


  }




  return (
    <div className="App">
      <header className="App-header">
        <div  onClick={fetchAhloggedInUser} >
          {showloggedInUserIfOneActive()}
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        

        <>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
        </>
         {/* ❗️❗️ Y'ALL SHOULD BE ACTUALLY USING PADDING + STYLING FOR SPACING ❗️❗️ */}




        {
          users.map(eachUser =>{ return <User key={eachUser.id} userProp={eachUser}  
            inAppJsDeleteUser={inAppJsDeleteUser} 
          /> })
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
