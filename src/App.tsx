import { useState } from "react";
import Layout from "./layout/layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout></Layout>
    </>
  );
}

export default App;
