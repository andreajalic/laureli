import "./App.css";
import Naslovna from "./Naslovna/Naslovna";
import Usluge from "./Usluge/Usluge";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Nav/Navbar";
import VizualnaStrategija from "./Usluge/VizualnaStrategija";
import BrandStrategija from "./Usluge/BrandStrategija";
import SocialMediaMarketing from "./Usluge/SocialMediaMarketing";
import Konzultacije from "./Usluge/Konzultacije";
import Edukacija from "./Edukacije/Edukacija";
import About from "./O nama/About";
import Kontakt from "./Kontakt/Kontakt";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {" "}
        <Navbar />
        <Switch>
          <Route exact path="/" component={Naslovna} />
          <Route path="/usluge" component={Usluge} />
          <Route path="/vizualna-strategija" component={VizualnaStrategija} />
          <Route path="/brand-strategija" component={BrandStrategija} />
          <Route
            path="/social-media-marketing"
            component={SocialMediaMarketing}
          />
          <Route path="/konzultacije" component={Konzultacije} />
          <Route path="/edukacije" component={Edukacija} />
          <Route path="/o-nama" component={About} />
          <Route path="/kontakt" component={Kontakt} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
