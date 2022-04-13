import React, {useState, useDispatch, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import trending from './trending';
import search from './search';

const API_KEY = 'jwk3vm89s4NSzG4KlIKLieCMoBL3uO4s';
const URL = "https://api.giphy.com/v1/gifs/trending";

function App() {
  
  const [authToken, setAuthToken] = useState("");
  const [musicData, setMusicData] = useState([]);
  
  const state={
    searchKey : "",
    gifData: []
  }

  const [searchKey, setSearchKey] = useState('');
  const [gifData, setGifData] = useState([]);
  
//  const onChange = (e) => {
//    this.setSearchKey({
//      searchKey: e.target.value
//    })
//  }

 useEffect (() => {
    fetch (`${URL}?api_key=${API_KEY}&limit=12`)
    .then(response => response.json())
    .then(gif => setGifData(gif.data));
 }, []);

//  const handleSearch = async (e) => {
//   e.preventDefault();
//   const url = "https://api.spotify.com/v1/search";
//   const keywords = searchKey;
//   const type = "track";
//   try {
//     const response = await fetch(`${url}?q=${keywords}&type=${type}&limit=10`, {
//       headers: {
//         'Authorization' : 'Bearer ' + authToken
//       }
//     });
    
//     if (!response.ok) {
//       switch (response.status) {
//         case 401:
//           throw new Error(`Unauthorized access, please login first`);
//         case 403:
//           throw new Error(`Forbidden access`);
//         default:
//           throw new Error(`HTTP error! status: ${response.status}`);
//       }
//     } else {
//       const musicData = await response.json()
//       setMusicData(musicData.tracks.items);
//     }
//   } catch (error) {
//     alert(`There has been a problem with your fetch operation: ${error.message}`);
//   }
// };

 

  // const handleSearch = async () => {
  //   const apikey = '&api_key=jwk3vm89s4NSzG4KlIKLieCMoBL3uO4s';
  //   const q = '&q' + this.state.searchKey;
  //   const limit = '&limit=12';
  //   try {
  //     const response = await axios.get(`api.giphy.com/v1/gifs/search?${apikey}${q}${limit}`)
  //     console.log(response);
  //     if(response && this.setState({gifData})) return;
      
  //   } catch (error) {
  //     return error;
  //   }

    

  // }

  // const handleSearch = async () => {
  //     const url = "api.giphy.com/v1/gifs/search";
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data);
  
  

  return (  
      <Router>
        <Switch>
          <Route path="">
            <div classname ='item'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSF75A5ILtOCNtp1YZiu2S5qR04Z9oSDL9qg&usqp=CAU'/>
              <h1>Goosebumps</h1>
              <p>Travis Scott</p>
            </div>

            <div style={item}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSF75A5ILtOCNtp1YZiu2S5qR04Z9oSDL9qg&usqp=CAU'/>
              <h1>Goosebumps</h1>
              <p>Travis Scott</p>
            </div>
            
          </Route>

          <Route path = "/search">
            <h1>we search here</h1>
          </Route>
        </Switch>
      </Router>
    // <div className="App">
    //   <div className="container">
    //     <h1>Create Playlist</h1>
    //     <div className="search-bar-container">
    //       <div className='title'>
    //         <h3> Title </h3> 
    //         <input type="text" /*onChange={onChange}*//>
    //         </div>

    //       <div className='description'>
    //         <h3>description</h3>
    //         <input type="text" /*onChange={onChange}*//>
    //       </div>
    //         <input type="submit" value="Search"/>
    //     </div>
    //     <div>
    //       {
    //         //this.state.gifData.map((gif) => <div key={gif.id} title={gif.title} url={gif.images.fixed_width.url}/>)
    //       }
    //     </div>
    //   </div>
    // </div>
  );

}

export default App;
