import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { persistor } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.tsx";
import LoadingSpinner from "./components/loadingspinner/LoadingSpinner.tsx";
import { ErrorBoundary } from "react-error-boundary";
import { ProductsFetchingError } from "./components/errors/ErrorBoundaryComponent.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
      <Auth0Provider
        domain="dev-anjhdt3eqq4esrg8.us.auth0.com"
        clientId="kouTp4gb0DS3qrNYFo7LBq15CwNeMWZf"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <ErrorBoundary
          FallbackComponent={ProductsFetchingError}
          onError={
            // make callback service or api call for logging here
            () => console.log("Some error happened")
          }
        >
          <App />
        </ErrorBoundary>
      </Auth0Provider>
    </PersistGate>
  </Provider>
);
