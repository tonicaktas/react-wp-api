import React, {  Fragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Posts from './components/Posts'
import PostPage from './components/PostPage'


function App() {
  return (
    <Router>
      <Fragment >
        <Route exact path="/" component={Posts} />
        <Route exact path="/post/:id" component={PostPage} />

      </Fragment>
    </Router>
    
  );
}

export default App;



// 12 hämtar komponent Posts -> som gör en api 
//och hämtar alla data...sen loopar den igenom 
//alla data och lägger in den i props i component PostItem.
// PostItem apiar unika bilder och author som tillhör den posten ochsparar de i state. 
// Sen i rendder() lägger han ut all data som han hämtar från state(api) och props(Posts.js)
// den skapar också länk till själva Posten i Link med hjälp av id som hämtas av props från Post.js
 // allt det visas på första sidan alltså component Posts byggs av PostItem 

 // 13 hämtar component PostPage och sätter exakta path med hjälp av id av posten som hämtas via props i PostItem <Link>. 
 // PostPage apiar data från posten som har matchande id som vi hämtar från Router via props
 // Sen sparar den allt i state och visar i render()

 // Länken i router skapas <Link> i PostItem och kan hämtas med match.params.id

