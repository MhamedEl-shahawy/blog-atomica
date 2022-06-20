import Navbar from 'components/ui/atom/Navbar';
import Home from 'components/ui/molecules/Home';
import {Routes, Route } from 'react-router-dom';
import Create from 'components/ui/molecules/Create';
import BlogDetails from 'components/ui/molecules/BlogDetails';
import NotFound from 'components/ui/molecules/NotFound';

function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="content">
        <Routes>
    
           <Route exact path="/"  element={<Home/>}/>
            <Route  path="/create"  element={<Create/>}/>
            <Route  path="/blogs/:id"  element={<BlogDetails/>}/>
            <Route  path="*"  element={<NotFound/>}/>
  
        </Routes>
        </div>
      </div>
   
  );
}

export default App;
