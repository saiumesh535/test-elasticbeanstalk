import Description from "./components/description/description.component";
import SearchComponent from "./components/search/search.component";
import Header from "./components/header/header.component";
import StatusComponent from "./components/status/status.component";
import ServicesComponent from "./components/services/services.component";
import FooterComponent from "./components/footer/footer.component";
import { useServicesState } from "./state/services.state";
import { demoServices } from "./types/common-types";
import { useEffect } from "react";

function App() {

  const { addServices } = useServicesState();

  useEffect(() => {
    // TODO remove this later
    addServices(demoServices);
  }, [demoServices]);

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
