import './App.css';
import requests from './Requests';
import Row from './Row';
import Banner from './Banner';

function App() {
  return (
    <div className="App">

      <Banner />
      <Row title="Movies" fetchUrl={requests.fetchTrending} fetchDesc={requests.fetchDesc}/>
    </div>
  );
}

export default App;
