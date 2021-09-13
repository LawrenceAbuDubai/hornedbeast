import React from 'react'; 
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import HornedBeast from './components/HornedBeast';

class App extends React.Component {
  render(){
    return(
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
    )
  }
}

export default App;