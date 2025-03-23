import React from "react";
import { Search, X } from "lucide-react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
	return (
		<div className="  bg-[#1a1a1a] px-4 py-3 md:py-5 rounded-lg mt-10 max-w-3xl mx-4 md:mx-auto">
			<div className="flex items-center gap-4">
				<Search />
				<input
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className=" w-full bg-transparent text-base md:text-lg text-gray-200 placeholder-light-200 outline-hidden"
					type="text"
					placeholder="Search 1000 of Moves "
				/>
			
      <div className="relative group cursor-pointer" onClick={() => setSearchTerm("")}>
  <abbr title="Clear Search">
    <X className="w-6 h-6" />
  </abbr>
  <div className="absolute  left-1/2 -translate-x-1/2 -top-10 flex 
word-break:keep-all px-2 py-1 text-sm text-white bg-gray-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    Clear  
  </div>
</div>

			</div>
		</div>
	);
};

export default SearchBar;
