import { Route, Routes } from "react-router-dom"
import Footer from "./shared/Footer"
import Header from "./shared/Header"
import Home from "./pages/Home"
import Movies from "./pages/Movies"

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
          </Routes>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
