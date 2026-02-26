import type { AppQuery } from "./__generated__/AppQuery.graphql";
import { graphql, useLazyLoadQuery } from "react-relay";
import './App.css';

function App() {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery {
        hello
        }
    `, {}
  );

  return (<h1>{data.hello}</h1>)
}

export default App
