import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [keyword, setKeyword]=useState("")
  const [tracks, setTracks] = useState([])
  const getTracks =async() => {
    let data = await fetch(
      `https://v1.nocodeapi.com/himanshu12345/spotify/GsHnRuigmtWXLvXU/search?q=${keyword}&type=track`)
    let convertedData =await data.json()
    console.log(convertedData.tracks.items);
    setTracks(convertedData.tracks.items);
  }
  return (
    <> 
<nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top px-3">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Himanshu-musicApp
    </a>
    
    <div className="collapse navbar-collapse d-flex justify-content-centre "   id="navbarSupportedContent">
     
        <input
        value= {keyword}
        onChange={(event) =>setKeyword(event.target.value)}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button onClick ={getTracks}   className="btn btn-outline-success" >
          Search
        </button>
      
    </div>
  </div>
</nav>

     

<div className ="container">
  <div className ="row">
  
    {
      tracks.map((element) => {
        return <div key={element.id} className = "col-lg-3 col-md-6 py-2">
           
          <div className="card" >
  <img src={element.album.images[0].url} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{element.name}</h5>
    <p className="card-text">
      Artist : {element.album.artists[0].name}
    </p>
    <p className ="card-text">
      Release date: {element.album.release_date}
    </p>
    
    <audio src={element.preview_url} controls className= "w-100"></audio>
  </div>
</div>

          </div>
      })
    }
  </div>
</div>
    </>
  )
}

export default App
