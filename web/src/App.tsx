import Description from "./components/description/description.component";
import SearchComponent from "./components/search/search.component";
import Header from "./components/header/header.component";
import StatusComponent from "./components/status/status.component";
import ServicesComponent from "./components/services/services.component";
import FooterComponent from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <SearchComponent />
      <StatusComponent />
      <ServicesComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
