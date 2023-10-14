import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { AppCnotextProvider } from "./Context/ContextFile";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppCnotextProvider>
      <App />
    </AppCnotextProvider>
  </StrictMode>
);
