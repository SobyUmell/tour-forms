import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";

import store from './store/store'
import { Provider } from "react-redux";

// components
import CreateFormPage from "./react/pages/CreateFormPage";

// styles
import './styles/global.scss'
import FormCanvas from "./react/components/ui/FormCanvas/FormCanvas";


const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateFormPage />
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
