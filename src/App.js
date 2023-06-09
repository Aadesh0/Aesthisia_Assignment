
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import { Col, Container,Row } from 'react-bootstrap';
import Signup from './components/Signup';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Container style={{width:"400px"}}>
      <Row>
        <Col> 
          <UserAuthContextProvider>
          <Routes>
            <Route path='/home' element={<ProtectedRoute> <Home /></ProtectedRoute>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
