import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import ABBlogo from "./assets/abb-logo.svg";

function App() {
  //const [searchParams, setSearchParams] = useSearchParams();

  const [searchParams] = useSearchParams();
  const contname = searchParams.get("contname");
  const rw = searchParams.get("rw");
  const sysid = searchParams.get("sysid");

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="row align-items-center">
            <div className="col-4">
              <img src={ABBlogo} alt="Logo" className="img-fluid" />
            </div>
            <div className="col-8">
              <h3>Controller Insight</h3>
              <p></p>
              {contname && <p>Controller Name: {contname}</p>}
              {rw && <p>RobotWare version: {rw}</p>}
              {sysid && <p>System ID: {sysid}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
