import Heading from "./components/Heading";
import SearchMe from "./components/SearchMe";

const App = () => {
  return (
    <div className='container'>
      <Heading title="🔍Search Bar🔎" />
      <SearchMe />
    </div>
  );
};

export default App;
