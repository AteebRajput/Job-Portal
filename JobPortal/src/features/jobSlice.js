import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  jobType: "",
  location: "",
  experience: "",
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setJobType(state, action) {
      state.jobType = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
    setExperience(state, action) {
      state.experience = action.payload;
    },
  },
});

export const {setExperience,setSearchValue,setJobType,setLocation} = jobSlice.actions
export const jobReducer = jobSlice.reducer;