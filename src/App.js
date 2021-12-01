import React, { Conponent} from 'react' ;
import './App.css';
import profilephoto from './conponent/profile/profilephoto'
import fullname from './conponent/profile/fullname'
import adress from './conponent/profile/adress'


Class app extends Conponent {
  render (){
  return (
    <div className="App">
      <profile/>
      <fullname = "Yasser Draouil"/>
      <adress = "3 rue 7111 manar 3 tunis"/>
     
     
    </div>
  )
  }
}

export default App;
