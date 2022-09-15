import Front from "./components/Front";
import Project from "./components/Project";
import Quote from "./components/Quote";
import useUserProvider from "./utils/hooks/Provider";

function App() {
  const repos = useUserProvider();

  return (
    <>
    <div className="mx-auto">
      <Front/>
    </div>
    <div className="container mx-auto">
      <Quote/>
      <Project repos={repos}/>
    </div>
    </>
  );
}

export default App;