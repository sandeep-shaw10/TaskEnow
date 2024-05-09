import {Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./pages/Home";
import Error from "./pages/Error";


function App() {
  return <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="*" element={<Error />} />
    </Routes>
  </>
}


export default App;