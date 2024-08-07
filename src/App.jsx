import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";

import store from './store/store'
import { Provider } from "react-redux";

// components
import CreateFormPage from "./react/pages/CreateFormPage";
import ViewFormPage from "./react/pages/ViewFormPage";
import FormListPage from "./react/pages/FormListPage";
import AnswersPage from "./react/pages/AnswersPage";

// styles
import './styles/global.scss'
import FormCanvas from "./react/components/ui/FormCanvas/FormCanvas";


const router = createBrowserRouter([
  {
    path: "/",
    element: <FormListPage />
  },
  {
    path: "/create",
    element: <CreateFormPage />
  },
  {
    path: "/view/:formId",
    element: <ViewFormPage />
  },
  {
    path: "/answers/:formId",
    element: <AnswersPage />
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
