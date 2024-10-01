
import JobSearch from './JobSearch'
import JobList from './JobTitle'
import Navbar from './Navbar'
import Header from './Header'
import { useSelector } from 'react-redux'
import Login from './Login'
// import fetchJobs from '../data/fetchdata'

const Home = () => {
  const { isLoggedIn} = useSelector((state) => state.auth)

  return (
    <div className='flex flex-col'>
      {
        isLoggedIn ? <div>
          <Navbar />
          <Header />
          <JobSearch />
          <JobList />
        </div>
         : <Login />
      }
      {/* <JobList /> */}
    </div>
  )
}

export default Home
