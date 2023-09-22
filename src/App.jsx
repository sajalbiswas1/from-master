

import './App.css'
import ReuseableFrom from './ReuseableFrom/ReuseableFrom'
import Grandpa from './component/Grandpa/Grandpa'
// import HookFrom from './component/HookFrom/HookFrom'
// import RefFrom from './component/RefFrom/RefFrom'
// import UsefulFrom from './component/UsefulFrom/UsefulFrom'

function App() {
  

    const handleSignUp = data =>{
      console.log(data)
    }

    const handleUpdate = data =>{
      console.log(data)
    }
  
  

  return (
    <>
      <h1>From Master</h1>
      {/* <UsefulFrom></UsefulFrom> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookFrom></HookFrom> */}
      {/* <ReuseableFrom 
      fromTitle={'log In'} 
      handleFromSubmit={handleSignUp}>
        <div>
          <p>Log in your profile</p>
        </div>
      </ReuseableFrom>
      <ReuseableFrom 
      fromTitle={'Sign Up'} 
      handleFromSubmit={handleUpdate} 
      submitValue={'Update'}>
        <div>
          <p>Update Your Profile</p>
        </div>
      </ReuseableFrom> */}
      <Grandpa></Grandpa>
    </>
  )
}

export default App