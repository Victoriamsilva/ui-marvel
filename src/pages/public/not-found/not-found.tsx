import NotFoundImage from '@/assets/404.svg';
import FeedbackMessage from '@/components/feedback-message/feedback-message';

function NotFound() {
  return <FeedbackMessage message="Página não encontrada" image={NotFoundImage}></FeedbackMessage>;
}

export default NotFound;
