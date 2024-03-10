import { toast } from 'react-toastify';

function notifyError(error: Error) {
  if (!navigator.onLine) {
    toast.error('Erro de conexão com a internet');
    return;
  }

  switch (error.message) {
    case 'Network Error':
      toast.error('Erro de conexão com o servidor');
      break;
    default:
      toast.error('Erro inesperado ao carregar dados');
      break;
  }
}

export default notifyError;
