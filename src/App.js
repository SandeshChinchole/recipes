import axios from "axios"
import {useEffect, useState} from "react";
import Header from './components/Header';
import Beverages from './components/Beverages';
import Introduction from './components/Introduction';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const beverages = async () => {
    try{
      const list = await axios.get(`https://assets.24g.com/public/2022-frontend-test-project/drinks.json`);
      setRecipes(list.data.drinks);
    } catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    beverages();
  });

  return (
    <div>
      <Header />
      <Introduction />
      <Beverages recipes={recipes} />
    </div>
  );
}

export default App;
