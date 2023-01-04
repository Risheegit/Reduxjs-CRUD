import './App.css'
import { useSelector, useDispatch} from 'react-redux'
//useSelector is used when we want to read one of the states
import { addUser, deleteUser, updateUsername } from './features/Users'
import { useState} from 'react'
import { RootState } from './main'

interface IUser {
  id : number,
  name: string,
  username: string
}

function App() {

  const usersList = useSelector((state: RootState) => state.users.users)
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [newUsername, setNewUsername] = useState("");
  const addedId: number = (usersList.length)? usersList[usersList.length - 1].id + 1 : 0 
  console.log('Added Id is', addedId)

  return (
    <div className="App">
      <div className="addUser">
        <input type='text' placeholder='Name' onChange={(event) => {setName(event.target.value)}}/>
        <input type='text' placeholder='Username' onChange={(event) => {setUsername(event.target.value)}}/>
        <button onClick={ () => {dispatch(addUser({ id : (usersList.length)? usersList[usersList.length - 1].id + 1 : 0 , name: name, username: username }))}}>Add User</button>
      </div>
      <div className="displayUsers">
        {usersList.map((user) => {
        return (
        <div>
          <h1>{user.name}</h1>
          <h1>{user.username}</h1>
          <input
                type="text"
                placeholder="New Username..."
                onChange={(event) => {
                  setNewUsername(event.target.value)
                }}
              />
          <button onClick={() => {dispatch(updateUsername({ id: user.id, name: name, username: newUsername }))}}>
            Update Username
          </button>
          <button
            onClick={() => {
              dispatch(deleteUser({ id: user.id, name, username }));
            }}
            >
            Delete User
          </button>
        </div>
        )})}
      </div>
    </div>
      
  );
}

export default App
