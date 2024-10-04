import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import GptReducer from "./gptSlice"

const appStore = configureStore({
    reducer : {
        user: userSlice,
        movies: moviesSlice,
        gpt: GptReducer,
    }
})

export default appStore;