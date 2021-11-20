import axios from "axios"
import {useEffect, useState} from "react";
import Header from './components/Header';
import Feed from './components/Feed';
import Footer from "./components/Footer";

const App = () => {
  const [news, setNews] = useState([]);

  const newsFeed = async () => {
    try{
      const feed = await axios.get(`https://assets.studio71.io/test/news_feed.json`);
      setNews(feed.data.items);
    } catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    newsFeed();
  });

  return (
    <div>
      <Header />
      <Feed news={news} />
      <Footer />
    </div>
  );
}

export default App;
