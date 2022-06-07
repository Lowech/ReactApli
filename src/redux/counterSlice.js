import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: "none",
    name: "",
    buttonText: "Войти"
  },
  reducers: {
    displayHiden: state => {
      state.value = "none"
    },
    dispalyVisibli: state => {
      state.value = "flex"
    },
    stateName: (state, action) => {
      state.name = action.payload
    },
    buttonTextChange: (state, action) => {
      state.buttonText = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { displayHiden, dispalyVisibli, stateName, buttonTextChange } = counterSlice.actions

export default counterSlice.reducer