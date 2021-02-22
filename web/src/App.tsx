import Description from "./components/description/description.component";
import SearchComponent from "./components/search/search.component";
import Header from "./components/header/header.component";
import StatusComponent from "./components/status/status.component";
import ServicesComponent from "./components/services/services.component";
import FooterComponent from "./components/footer/footer.component";
import { useServicesState } from "./state/services.state";
import { useEffect } from "react";
import { fetchServices } from "./helpers/common";

function App() {

  const { addServices } = useServicesState();
  
  async function getServices() {
    const servs = await fetchServices();
    addServices(servs);
  };

  useEffect(() => {
    getServices();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
