/* src/app/(routes)/[...not_found]/loading.tsx */

function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="border rounded p-3 my-1 mb-3">
        <h1 className="tertiary__font italic text-3xl">Loading...</h1>
      </div>
    </div>
  );
}

export default LoadingPage;
