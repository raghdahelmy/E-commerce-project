// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'



function Fotter() {
  return (
    <>
      <Card className='text-center bg-secondary-subtle '>
        <Card.Body >
          <Card.Title>Mobizeen</Card.Title>
          <Card.Text>
Committed to providing high-quality products and exceptional customer service </Card.Text>
          <div className='href' >
          <a href='#'>Home</a>
          <Link to="/Refund"> Refund Policy </Link>
          <a href='#ShopByDepartment'>Categories</a>
          </div>
        </Card.Body>
        <Card.Footer >
          <div>
            © 2024, Wanddo Powered by Mobizeen
          </div>

          <div></div>


        </Card.Footer>

      </Card>
    </>
  );
}

export default Fotter;

