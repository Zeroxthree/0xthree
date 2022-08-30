import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Link} from 'react-router-dom'

const Socials = () => {
  return (
    <div className='socials'>
      <Link to='/'>
        <TwitterIcon fontSize='medium' sx={{color: '#FF41E1'}}/>
      </Link>
      <Link to='/'>
        <GitHubIcon fontSize='medium' sx={{color: '#FF41E1'}}/>
      </Link>
      <Link to='/'>
        <LinkedInIcon fontSize='medium' sx={{color: '#FF41E1'}}/>
      </Link>
    </div>
  )
}

export default Socials