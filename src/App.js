import List from "./component/Hello";
import { Routes, Route } from "react-router-dom";
import Detail from "./component/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
