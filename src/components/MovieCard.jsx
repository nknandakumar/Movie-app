import React, { useState } from "react";

const MovieCard = ({ movie: { title, overview, vote_average, poster_path, release_date, original_language } }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative group m-5 w-full max-w-sm mx-auto">
      {/* Default Card */}
      <div className="w-full bg-[#1a1a1a] p-4 rounded-lg shadow-white transition-transform duration-300 transform group-hover:scale-101 overflow-hidden relative z-10">
        <div className="space-y-2">
          <img
            className="h-auto w-full rounded-lg"
            src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "/no-image.png"}
            alt="Movie Poster"
          />
          <h3 className="font-bold text-base md:text-2xl line-clamp-1 text-white">
            {title}
          </h3>
          <div className="space-y-2">
            <p className={`font-semibold text-white ${isExpanded ? "" : "line-clamp-2"}`}>
              {overview}
            </p>
            {overview.length > 100 && (
              <button
                className="text-blue-400 cursor-pointer font-bold mt-1 hover:underline"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
            <div className="flex gap-2 font-bold text-white">
              <span className="flex flex-row items-center gap-0.5">
                <img src="/star.svg" alt="Star Icon" className="h-4 w-4" /> {vote_average}
              </span>
              <span className="text-gray-400">• {original_language}</span>
              <span className="text-gray-400">• {release_date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
