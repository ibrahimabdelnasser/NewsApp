
import { useState } from 'react';
import './App.css';

import Navbar from './componants/Navbar';
import NewsBoard from './componants/NewsBoard';
import NewsItem from './componants/NewsItem';

function App() {
  const [category, setcategory] = useState("general");


  return (
    <div className="App">
      <Navbar setcategory={setcategory} />
      <NewsBoard category={category} />
      <NewsItem />

    </div>
  );
}

export default App;
