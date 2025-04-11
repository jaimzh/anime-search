import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import AnimeCard from "./components/AnimeCard";


function App() {
  const [searchTerm, setSearchTerm] = useState("Naruto");
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
 

  const fetchAnime = async function (searchTerm) {
    try {
      setIsLoading(true);
      const res = await fetch(`https://api.jikan.moe/v4/anime?q=${searchTerm}`);
      const data = await res.json();
      console.log(data.data);
      setAnimeList(data.data || []);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching anime:", error);
    }
  };

  useEffect(() => {
    fetchAnime(searchTerm);
  }, [searchTerm]);

  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <div className="header">
          <img
            className="md:w-[749px] w-120 bounce-in2 rounded-[2rem] object-fit"
            src="animepic.jpg"
            alt="hero-png"
            loading="lazy"
          />
          <img
            className="w-70 md:w-100  bounce-in"
            src="Title.svg"
            alt="title"
          />
          <h1>Find your favorite anime and discover new shows to watch.</h1>
          <Search searchTerm={searchTerm} setTheSearchTerm={setSearchTerm} />
        </div>

        <section className="anime-list">
          <h1 className="mt-[40px] text-left bounce-in">All animes</h1>
        </section>
        {isLoading ? (
          <div className="flex justify-center items-center my-7 ">
            <Spinner />
          </div>
        ) : (
          <ul className="anime-list">
            {animeList.map((anime) => (
              <AnimeCard
                key={anime.mal_id}
                title={
                  anime.title.length > 15
                    ? anime.title.slice(0, 15) + "..."
                    : anime.title
                }
                image_url={anime.images.jpg.image_url}
                score={anime.score}
                year={anime.aired.prop.from.year}
              />
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

export default App;
