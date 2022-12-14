import { Route, Routes } from "react-router-dom";
import Front from "./components/Front";
import Home from "./components/home/Home";
import Project from "./components/Project";
import Quote from "./components/Quote";
import Footer from "./layouts/Footer";
import Test from "./Test";
import useUserProvider from "./utils/hooks/Provider";

function App() {
  const repos = useUserProvider();

  return (
    <>
    <div className="mx-auto">
      <Front/>
    </div>

    <Routes>
      <Route index element={<Home/>} />
      <Route path="/projects" element={
        <div className="container mx-auto">
        <Quote/>
        <Project repos={repos}/>
        </div>
      }/>
      <Route path="/test" element={<Test/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;