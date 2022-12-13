import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

function Nav() {
  return (
    <nav>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/add">
        <Button>Add Movie</Button>
      </Link>
    </nav>

  );
}

export default Nav;