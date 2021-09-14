import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

import User from './User';




function App() {
  console.log("Yurrrr! Back like we neva left!")


  const[users, setUsers] = useState( [] )
  console.log("State of Our Users: ", users)


  useEffect( ()=>{

    fetch("http://localhost:9292/users")
    .then(r => r.json())
    .then(fetchedUsers =>{ console.log(fetchedUsers)
    
      setUsers(fetchedUsers)

    })

  } , [] )




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {
          users.map(eachUser =>{ return <User key={eachUser.id} userProp={eachUser} /> })
        }
        
        
      </header>
    </div>
  );
}

export default App;
