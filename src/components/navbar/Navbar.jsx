import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({ data, callback }) {

  const handleHomeClick = () => {
    callback('home');
  }

  const handleListClick = () => {
    callback('home');
  }

  const handleRefClick = (value) => {
    callback(value);
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand onClick={handleHomeClick}>Checklist</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {
              data[0] 
              && 
              <Nav.Link onClick={handleListClick}>{ data[0] }</Nav.Link>
            }
            {
              data[1] 
              && 
              <Nav.Link onClick={()=>handleRefClick(data[1])}>{ data[1] }</Nav.Link>
            }
            {
              data[2] 
              && 
              <Nav.Link>{ data[2] }</Nav.Link>
            }
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;