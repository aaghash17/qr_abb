import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import ABBlogo from "./assets/abb-logo.svg";

function App() {
  //const [searchParams, setSearchParams] = useSearchParams();

  const [searchParams] = useSearchParams();
  const ContName = searchParams.get("ContName");
  const ContID = searchParams.get("ContID");

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
              {ContName && <p>Controller Name: {ContName}</p>}
              {ContID && <p>Controller ID: {ContID}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
