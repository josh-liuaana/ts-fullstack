import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/add">Add Movie</Link>
      </button>
    </nav>

  );
}

export default Nav;