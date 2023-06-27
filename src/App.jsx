import Heading from "./components/Heading";
import Filter from "./components/Filter";

const App = () => {
  return (
    <div className='container'>
      <Heading title="🔍Search Bar🔎" />
      <Filter />
    </div>
  );
};

export default App;
