import { useQuery } from "react-query";

const fetchJobs = async () => {
  const url = "https://jobicy.p.rapidapi.com/api/v2/remote-jobs";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "8c0ec0146cmsh45ab8811f7e275ap190b91jsnaddc5fa7dccf",
      "x-rapidapi-host": "jobicy.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.jobs);
    return result.jobs
  } catch (error) {
    console.error(error);
  }
  
};

const useJobs = () =>{
    return useQuery('jobs', fetchJobs,{
        refetchInterval: 100000, 
        staleTime: 1800000,
        
        refetchOnWindowFocus:true,
    })
}

export default useJobs