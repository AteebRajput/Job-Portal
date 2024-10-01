import React from "react";
import { useSelector } from "react-redux";
import useJobs from "../data/fetchdata";

const JobList = () => {
  const { data: jobs = [], isLoading, error } = useJobs();

  const searchValue = useSelector((state) => state.jobFilters.searchValue);
  const location = useSelector((state) => state.jobFilters.location);
  const jobType = useSelector((state) => state.jobFilters.jobType);

  const filteredJobs = jobs
    .filter(
      (job) =>
        job.jobTitle.toLowerCase().includes(searchValue.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter(
      (job) =>
        location === "" || job.jobGeo.toLowerCase() === location.toLowerCase()
    )
    .filter(
      (job) =>
        jobType === "" ||
        (Array.isArray(job.jobType)
          ? job.jobType[0].toLowerCase() === jobType.toLowerCase()
          : job.jobType.toLowerCase() === jobType.toLowerCase())
    );

  // Loading state
  if (isLoading)
    return (
      <div className="animate-pulse flex flex-col justify-center items-center gap-4 w-full max-w-sm mx-auto">
        <div className="w-48 h-6 bg-slate-400 rounded-md"></div>
        <div className="w-28 h-4 bg-slate-400 mt-3 rounded-md"></div>
        <div className="h-7 bg-slate-400 w-full rounded-md"></div>
        <div className="h-7 bg-slate-400 w-full rounded-md"></div>
        <div className="h-7 bg-slate-400 w-1/2 rounded-md"></div>
      </div>
    );

  // Error state
  if (error) return <p>Error loading jobs</p>;

  // No results state
  if (filteredJobs.length === 0)
    return (
      <div className="flex items-center justify-center mt-10">
        <div className="flex flex-col items-center justify-center gap-2 w-full max-w-sm">
          <div className="error-alert flex items-center justify-between w-full h-14 rounded-lg bg-[#232531] px-4">
            <div className="flex gap-2">
              <div className="text-[#d65563] bg-white/5 backdrop-blur-xl p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-white">Error Not Found!</p>
                <p className="text-gray-500">No result found matching your criteria</p>
              </div>
            </div>
            <button className="text-gray-600 hover:bg-white/10 p-1 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );

  return (
    <ul className="w-full max-w-4xl mx-auto px-4 md:px-0">
      {filteredJobs.map((job) => (
        <li key={job.id} className="mb-4">
          <div
            className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-zinc-200 rounded-md border border-black shadow-2xl hover:bg-sky-100 hover:translate-y-2 hover:scale-104 transition-transform duration-200"
          >
            <div className="flex flex-col gap-1 items-start">
              <h1 className="text-xl md:text-2xl font-semibold">{job.jobTitle}</h1>
              <p className="text-md md:text-lg text-gray-500">
                Company: <span className="font-bold">{job.companyName}</span>
              </p>
              <p className="text-md md:text-lg text-gray-500">
                Location: <span className="font-bold">{job.jobGeo}</span>
              </p>
              {job.annualSalaryMin && job.annualSalaryMax ? (
                <p className="text-md md:text-lg text-gray-500">
                  Salary Range:{" "}
                  <span className="font-bold">$ {job.annualSalaryMin}</span> -{" "}
                  <span className="font-bold">$ {job.annualSalaryMax}</span>
                </p>
              ) : (
                <p className="text-md md:text-lg text-gray-500">Salary information not available</p>
              )}
            </div>
            <div className="flex flex-col gap-2 items-start mt-4 md:mt-0">
              <p className="text-md md:text-lg text-gray-500">
                Published Date: <span className="font-bold">{job.pubDate.split(" ")[0]}</span>
              </p>
              <button
                className="font-sans flex justify-center gap-2 items-center shadow-xl text-lg text-gray-50 bg-[#0A0D2D] px-4 py-2 rounded-full group hover:bg-white hover:text-black transition-all duration-500"
              >
                <a href={job.url} target="_blank" rel="noopener noreferrer">
                  Apply Now
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 19"
                  className="w-8 h-8 bg-gray-50 group-hover:rotate-90 text-gray-50 transition-transform duration-300 p-2 rounded-full"
                >
                  <path
                    className="fill-gray-800 group-hover:fill-gray-800"
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default JobList;
