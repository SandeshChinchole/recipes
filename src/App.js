import './App.css';
import axios from "axios"
import {useEffect, useState} from "react";
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import Footer from "./components/Footer/Footer";

const App = () => {
  const [newsArray, setNewsArray] = useState([]);

  const newsFeed = async () => {
    try{
      const feed = await axios.get(`https://assets.studio71.io/test/news_feed.json`);
      setNewsArray(feed.data.items);
    } catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    newsFeed();
  });

  return (
    <div className="App">
      <Header />
      <Feed newsArray={newsArray} />
      <Footer />
    </div>
  );
}

export default App;
