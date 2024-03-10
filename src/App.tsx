import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Header from './components/header/header';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-right" theme="colored" />
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
