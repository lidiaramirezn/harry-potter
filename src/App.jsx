import { AppContainer } from './AppContainer.style';
import { Character, Navbar } from './components';
import { useFetchApi } from './Hooks';

function App() {
  const { characters, isLoading } = useFetchApi();

  return (
    <AppContainer>
      <Navbar />
      {
        characters.map((character, index) => (
          <Character key={index} {...character} />
        ))
      }
      
    </AppContainer>
  )
}

export default App
