import './App.css';

const App = () => {
  const itinerary = [
    { location: 'Italy', visited: true },
    { location: 'Antarctica', visited: false },
    { location: 'North Korea', visited: false },
  ];

  return (
    <>
      <h1>Travel Itinerary</h1>
      <ul>
        {itinerary.map((destination, index) => (
          <li key={index} className={destination.visited ? 'visited' : 'not-visited'}>
            {destination.location}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;