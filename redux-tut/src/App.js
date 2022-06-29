import logo from './logo.svg';
import './App.css';
import User  from '../src/user'
import HomeContainer from '../src/Containers/HomeContainer'
import HeaderContainer from './Containers/HeaderContainer';

function App() {
  return (
    <div className="App">

      <HomeContainer />
      <HeaderContainer />
        


            {/* <User  data={{name:'md kausar'}}/>  */}

    </div>
  );
}

export default App;
