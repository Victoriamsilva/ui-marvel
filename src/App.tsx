import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Header from './components/header/header';
import { Container } from '@radix-ui/themes';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-right" theme="colored" />
      <Header />
      <Container p={'8'}>
        <AppRoutes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
