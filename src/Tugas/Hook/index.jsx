import { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import CardNews from './Component/CardHook';
import NavbarNews from './Component/NavbarHook';
import SearchNews from './Component/SearchHook';

const Hook = () => {
  let [keyword, setKeyword] = useState('Apple');
  let [news, setNews] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('get API');
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&from=2022-11-12&sortBy=popularity&apiKey=${process.env.REACT_APP_API}`);
        const news = await response.json();
        console.log(news.ar);
        setNews(news.articles);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, [keyword]);

  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div>
      <NavbarNews />
      <SearchNews seacrhText={(text) => setKeyword(text)} />
      {isLoading ? (
        <div style={style}>
          <RotatingLines />
        </div>
      ) : (
        <CardNews cardNews={news} />
      )}
    </div>
  );
};

export default Hook;
