import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Header from './components/header/header';
import { Container } from '@radix-ui/themes';
import ErrorBoundary from './components/error-boundary/error-boundary';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ToastContainer position="bottom-right" theme="colored" />
        <Header />
        <Container p={'8'}>
          <AppRoutes />
        </Container>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
