import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Link} from 'react-router-dom'

const Socials = () => {
  return (
    <div className='socials'>
      <Link to='/'>
        <TwitterIcon className='social__link' fontSize='medium' sx={{color: '#FF41E1', fontSize: '1.75rem'}}/>
      </Link>
      <Link to='/'>
        <GitHubIcon className='social__link' fontSize='medium' sx={{color: '#FF41E1', fontSize: '1.75rem'}}/>
      </Link>
      <Link to='/'>
        <LinkedInIcon className='social__link' fontSize='medium' sx={{color: '#FF41E1', fontSize: '1.75rem'}}/>
      </Link>
    </div>
  )
}

export default Socials