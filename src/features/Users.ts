import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUser {
  id :number,
  name: string,
  username: string
}

interface IUserSliceState {
  users: IUser[]
}

const initialState: IUserSliceState = {
  users: []
}

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            state.users.push(action.payload)
        },
        deleteUser: (state, action: PayloadAction<IUser>) => {
            state.users = state.users.filter((user) => user.id !== action.payload.id);
        },
        updateUsername: (state, action: PayloadAction<IUser>) => {
          state.users.map((user) => {
            if (user.id === action.payload.id) {
              user.username = action.payload.username;
            }
          });
        },    
    }
})

export const {addUser, deleteUser, updateUsername} = userSlice.actions
export default userSlice.reducer