import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contacto() {
  return (
    <div className='contact'>
    <Form>
        <h1>¿Como te gustan las Burgers?</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo:</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu correo" />
        <Form.Text className="text-muted">
          Tu correo sera visto solo por nosotros!
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Como quieres tu Burger</Form.Label>
        <textarea class="form-control bg-light" id="exampleFormControlTextarea1" rows="3" placeholder="Ingresa los ingredientes de tu Burger"></textarea>

      </Form.Group>
      <Button className='bg-danger' variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </div>
  );
}
