import './App.css';
import axios from "axios"
import {useEffect, useState} from "react";
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import Footer from "./components/Footer/Footer";

function App() {
  const [type, setType] = useState("milestone-subs");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();

  const newsFeedApi = async () => {
    try{
      const feed = await axios.get(`https://assets.studio71.io/test/news_feed.json`);
      setNewsArray(feed.data.items);
      setNewsResults(feed.data.total);
    } catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    newsFeedApi();
  }, [newsResults, type]);

  return (
    <div className="App">
      <Header />
      <Feed newsArray={newsArray} newsResults={newsResults} />
      <Footer />
    </div>
  );
}

export default App;
