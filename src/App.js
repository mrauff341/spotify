import React, {useState, useDispatch, useEffect} from 'react';
import './App.css';
import axios from 'axios'

const App = () => {
  const state={
    searchKey : "",
    gifData: []
  }

  const [searchKey, setSearchKey] = useState('');
  const [gifData, setGifData] = useState([]);
  
 const onChange = (e) => {
   this.setState({
     searchKey: e.target.value
   })
 }

  const handleSearch = async () => {
    const apikey = '&api_key=jwk3vm89s4NSzG4KlIKLieCMoBL3uO4s';
    const q = '&q' + this.state.searchKey;
    const limit = '&limit=12';
    try {
      const response = await axios.get(`api.giphy.com/v1/gifs/search?${apikey}${q}${limit}`)
      if(response && this.setState({gifData})) return;
    } catch (error) {
      return error;
    }

  }
  

  return (  
    <div className="App">
      <div className="container">
        <h1>Hello Exercise Module 3 Session 1</h1>
        <div className="search-bar-container">
          <input type="text" onChange={onChange}/>
          <input type="submit" value="Search" onClick={handleSearch}/>
        </div>
        <div>
          {
            this.state.gifData.map((gif) => <div key={gif.id} title={gif.title} url={gif.images.fixed_width.url}/>)
          }
        </div>
      </div>
    </div>
  )
};

export default App;
