import Heading from "./components/Heading";
import Search from "./components/Search";

const App = () => {
  return (
    <div className='container'>
      <Heading title="🔍Search Bar🔎" />
      <Search />
    </div>
  );
};

export default App;
