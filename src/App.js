import { ThemeProvider, createTheme } from '@mui/material/styles';
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import logo from "./logo.svg";
import CreateAccountPage from "./pages/CreateAccountPage";
import AccessAccountPage from "./pages/AccessAccountPage";
import DashboardPage from "./pages/DashboardPage";
import MajorPanel from "./components/MajorPanel";
import AddPlaceForm from "./components/AddPlaceForm";
import styles from "./App.css";

const router = createBrowserRouter(createRoutesFromElements(
<Route path='/' element={ <DashboardPage/> }>
  <Route index element={ <MajorPanel/> }/>
  <Route path='form' element={ <AddPlaceForm/> }/>
</Route>
));

function App() {
 return (
<RouterProvider router={router}/>
);
}

export default App;
