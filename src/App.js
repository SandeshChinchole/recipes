import './App.css';
import axios from "axios"
import {useEffect, useState} from "react";
import NavInShorts from './components/NavInShort';
import NewsContent from './components/NewsContent/NewsContent';
import Footer from "./components/Footer/Footer";

function App() {
  const [type, setType] = useState("milestone-subs");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(5);

  const newsApi = async () => {
    try{
      const news = await axios.get(`https://assets.studio71.io/test/news_feed.json`);
      setNewsArray(news.data.items);
      setNewsResults(news.data.total);
    } catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [newsResults, type, loadMore]);

  return (
    <div className="App">
      <NavInShorts setType={setType} />
      <NewsContent loadMore={loadMore} setLoadMore={setLoadMore} newsArray={newsArray} newsResults={newsResults} />
      <Footer />
    </div>
  );
}

export default App;
