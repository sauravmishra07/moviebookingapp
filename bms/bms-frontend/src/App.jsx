import { Route, Routes } from "react-router-dom"
import Footer from "./shared/Footer"
import Header from "./shared/Header"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import MovieDetails from "./pages/MovieDetails"
import Profile from "./pages/Profile"

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Header/>
          <Routes>
            <Route path="/" element={<Home/> } />
            <Route path="/profile/:id" element={<h1>profile</h1> } />
            <Route path="/movies" element={<Movies/> } />
             <Route path="/movie/detail" element={<MovieDetails/> } />
             <Route path="/profile" element={<Profile/>}/>
             <Route path="/about" element={<h1>about testing page</h1>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
