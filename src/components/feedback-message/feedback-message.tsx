function FeedbackMessage({ message, image }: { message: string; image: string }) {
  return (
    <div data-testid="test-feedback-message" className="py-8 h-full flex flex-col justify-center items-center">
      <p data-testid="test-feedback-message-message">{message}</p>
      <img data-testid="test-feedback-message-image" src={image} className="sm:h-[30rem]" alt="" />
    </div>
  );
}

export default FeedbackMessage;
