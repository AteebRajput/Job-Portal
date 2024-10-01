import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/userSlice"
import { jobReducer} from "./features/jobSlice"

export const store = configureStore (
    {
        reducer:{
            auth: authReducer,
            jobFilters: jobReducer
        }
    }
)

