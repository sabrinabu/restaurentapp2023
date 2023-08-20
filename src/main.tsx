import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { persistor } from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.tsx";
import LoadingSpinner from "./components/loadingspinner/LoadingSpinner.tsx";

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
        <App />
      </Auth0Provider>
    </PersistGate>
  </Provider>
);
