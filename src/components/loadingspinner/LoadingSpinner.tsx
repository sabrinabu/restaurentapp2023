import { RotatingLines } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div>
      <RotatingLines
        strokeColor="rgb(248, 91, 52)"
        strokeWidth="5"
        animationDuration="0.75"
        width="25"
        visible={true}
      />
    </div>
  );
};

export default LoadingSpinner;
