
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
import Form from './pages/Form';
import Thanks from './pages/Thanks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form /> ,
  },
  {
    path: "/thx",
    element: <Thanks /> ,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
