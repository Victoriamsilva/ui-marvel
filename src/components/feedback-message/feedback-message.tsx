function FeedbackMessage({ message, image }: { message: string; image: string }) {
  return (
    <div className="py-8 h-full flex flex-col justify-center items-center">
      <h2 className="text-white text-xl">{message}</h2>
      <img src={image} className="sm:h-[30rem]" alt="" />
    </div>
  );
}

export default FeedbackMessage;
