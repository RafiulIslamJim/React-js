import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
     <div className='bg-blue-400'>
     <h1 className='text-black'>React with Chai and share is important</h1>
      <Login />
      <Profile />
     </div>
    </UserContextProvider>
  )
}

export default App