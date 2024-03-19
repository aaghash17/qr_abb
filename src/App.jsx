import { useSearchParams } from "react-router-dom";

import "./App.css";

function App() {
  //const [searchParams, setSearchParams] = useSearchParams();

  const [searchParams] = useSearchParams();
  const ContName = searchParams.get("ContName");
  const ContID = searchParams.get("ContID");

  return (
    <div>
      <p>Controller Information</p>
      {ContName && <p> Controller Name: {ContName}</p>}
      {ContID && <p>Controller ID: {ContID}</p>}
    </div>
  );
}

export default App;
