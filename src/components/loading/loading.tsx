function Loading() {
  return (
    <div data-testid="test-loading" className="flex justify-center items-center h-96">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-white shadow-md shadow-slate-300"></div>
    </div>
  );
}

export default Loading;
