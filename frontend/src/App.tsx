import {GlobalStyle} from "./styles/GlobalStyles";
import {RoutesProvider} from "./routes/RoutesProvider";

function App() {
  return (
    <div >
      <GlobalStyle/>
      <RoutesProvider />
    </div>
  );
}

export default App;
