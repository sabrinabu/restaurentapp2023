import { FallbackProps } from "react-error-boundary";
import "./errorboundarycomponent.scss";

export function ProductsFetchingError(props: FallbackProps) {
  const { error, resetErrorBoundary } = props;

  return (
    <div className="errorboundarycomponent">
      <div className="centerText">
        <h1 className="header">Error !!! 🌍</h1>
        <p className="message">{error.message}</p>
        <button className="button" onClick={resetErrorBoundary}>
          Reload Page
        </button>
      </div>
    </div>
  );
}
