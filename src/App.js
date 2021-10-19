import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import LoadDoctors from "./Pages/LoadDoctors/LoadDoctors"
import LoadGallery from "./Pages/LoadGallery/LoadGallery"
import About from "./Pages/About/About"
import NotFound from "./Pages/NotFound/NotFound"
import SingleService from "./Pages/SingleService/SingleService";
import Login from "./Pages/Login/Login/Login"
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";



function App() {
  return (
    <div className="App">

   
    <AuthProvider>
    <Router>
          <Switch>
            
            <Route exact path ="/">
              <Home></Home>
            </Route>

            <Route path ="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/doctors">
              <LoadDoctors></LoadDoctors>
            </Route>

          <Route path="/gallery">
            <LoadGallery></LoadGallery>
          </Route>

          <PrivateRoute path="/single_service/:serviceId">
             <SingleService></SingleService>
          </PrivateRoute>

            <Route path="/login">
            <Login></Login>
          </Route>

          

          <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
    </AuthProvider>
   


    </div>
  );
}

export default App;
