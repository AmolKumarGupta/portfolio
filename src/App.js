import Front from "./components/Front";
import useUserProvider from "./utils/hooks/Provider";
import Test from "./Test";

function App() {
  const user = useUserProvider('amolkumargupta');

  const arr = Object.entries(user).map(([key, value]) => {
    return <li key={key}>{key}: {value}</li>;
  })

  return (
    <>
    <div className="mx-auto">
      <Front/>
    </div>
    <ul>
      {arr}
    </ul>
    </>
  );
}

export default App;
