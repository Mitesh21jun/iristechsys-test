import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import Employee_Details from './components/Employee_Details'
import Enroll_Employee from './components/Enroll_Employee'

function App() {
  return (
    <div className="App">
      <>
      <Router>
          <Switch>
            
          <Route path="/" exact component={Employee_Details}></Route>
          <Route exact path="/enroll" component={Enroll_Employee}></Route>
      
    </Switch>
      </Router>
    </>
    </div>
  );
}

export default App;
