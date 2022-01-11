import { Outlet, Link } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'



const SharedLayout = () => {
  return <Wrapper>
    <nav>
      <Link to="addjob">Add Job</Link>
      <Link to="alljobs">All Jobs</Link>
    </nav>
    <Outlet />
  </Wrapper>
  
}

export default SharedLayout

