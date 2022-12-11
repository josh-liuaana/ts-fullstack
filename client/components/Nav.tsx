import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/add">Add Movie</Link>
      </p>
    </nav>

  );
}

export default Nav;