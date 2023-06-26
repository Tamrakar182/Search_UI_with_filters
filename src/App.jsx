import Heading from "./components/Heading";
import Search from "./components/Search";
import Products from "./components/Products";

const App = () => {
  return (
    <div className='container'>
      <Heading title="🔍Search Bar🔎" />
      <Search />
      <Products />
    </div>
  );
};

export default App;
