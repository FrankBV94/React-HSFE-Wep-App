import { Provider } from "react-redux";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import store from "./redux/store";
import { LayoutContainer } from "./styled-components/layout.styled.component";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </Provider>
  );
}

export default App;
