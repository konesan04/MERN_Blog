import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import PostList from './pages/PostList'
import PostDetails from './pages/PostDetails'
import CategoryPosts from './pages/CategoryPosts'

function App() {


  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/posts/category/:id" element={<CategoryPosts/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
