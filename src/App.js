import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import logo from "./logo.svg";
import "./App.css";
import CreateAccountPage from "./pages/CreateAccountPage";
import AccessAccountPage from "./pages/AccessAccountPage";
import DashboardPage from "./pages/DashboardPage";
import styles from './App.module.css';

const darkTheme = createTheme({
palette: {
mode: 'dark',
},
});

function App() {
  return (
  <div className={styles.container}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <DashboardPage />
    </ThemeProvider>
  </div>
  );
}

/*function App(){
return (
<ThemeProvider theme={darkTheme}>
<CssBaseline />

<header>
  <nav>
    <ul>
      <li>
        Menu
      </li>
    </ul>
  </nav>
</header>


<main className={styles.mainContainer}>
  <section>
    <CreateAccountPage />
  </section>

  <section>
    <AccessAccountPage />
  </section>
</main>

</ThemeProvider>
);


}*/

export default App;
