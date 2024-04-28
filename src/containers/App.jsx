import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users/',
        );
        const users = await response.json();
        setRobots(users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className='main-container'>
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange}></SearchBox>
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots}></CardList>
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
