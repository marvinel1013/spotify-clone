import { BeatLoader } from "react-spinners";

function LoadingPage({ center }) {
  return (
    <div
      className={`w-full h-full flex justify-center ${
        center ? "items-center" : ""
      }`}
    >
      <BeatLoader color="#22c55e" />
    </div>
  );
}

export default LoadingPage;
