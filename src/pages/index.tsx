import React from 'react';
import NavigationBar from 'components/NavigationBar';
import WordAnimations from 'components/WordAnimations';
import SearchBar from 'components/SearchBar';
import ImagePosters from 'components/ImagePosters';
import SearchResults from 'components/SearchResults'
const Home: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };
    return (
    <div>
    <NavigationBar />
    <SearchBar onSearch={handleSearch} />
    <SearchResults />
    </div>
    )
  };
  
  export default Home;
  