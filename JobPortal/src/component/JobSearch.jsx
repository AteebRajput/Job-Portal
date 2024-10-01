import { useSelector, useDispatch } from "react-redux";
import {
  setExperience,
  setJobType,
  setLocation,
  setSearchValue,
} from "../features/jobSlice";

const JobSearch = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.jobFilters.searchValue);
  const experience = useSelector((state) => state.jobFilters.experience);
  const location = useSelector((state) => state.jobFilters.location);
  const jobType = useSelector((state) => state.jobFilters.jobType);

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 items-center justify-center py-10 space-y-4 md:space-y-0">
      {/* Search Input */}
      <input
        className="w-full md:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        type="text"
        placeholder="Search jobs..."
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
      />

      <select
        className="w-full md:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        onChange={(e) => dispatch(setLocation(e.target.value))}
      >
        <option value="" disabled selected hidden>
          All Locations
        </option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="UK">UK</option>
        <option value="Australia">Australia</option>
        <option value="Germany">Germany</option>
        {/* Add more locations as needed */}
      </select>

      <select
        className="w-full md:w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        onChange={(e) => dispatch(setJobType(e.target.value))}
      >
        <option value="" selected disabled hidden>
          All Types
        </option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Freelance">Freelance</option>
        <option value="Contract">Contract</option>
        {/* Add more job types as needed */}
      </select>
    </div>
  );
};

export default JobSearch;
