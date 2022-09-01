import {Link} from 'react-router-dom'

const New = () => {
  return (
    <div className="new">
      <Link to='/'>
        <img src="../assets/new.png" alt="new" />
      </Link>
    </div>
  );
};

export default New;
