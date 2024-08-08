import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import store from './store/store'
import { Provider } from "react-redux";

// components
import CreateFormPage from "./react/pages/CreateFormPage";
import EditFormPage from "./react/pages/EditFormPage";
import ViewFormPage from "./react/pages/ViewFormPage";
import FormListPage from "./react/pages/FormListPage";
import AnswersPage from "./react/pages/AnswersPage";

// styles
import './styles/global.scss'

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
    path: "/edit/:formId",
    element: <EditFormPage />
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
