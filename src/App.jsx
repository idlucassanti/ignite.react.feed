import { Header } from './components/Header';
import { Post } from './components/Post';

export function App() {
  return (
    <div>
      <Header />

      <Post author="Lucas Santi" content="Conteúdo teste 1 LS"/>
      <Post author="Matteo Santi" content="Conteúdo teste 2 MS"/>
      <Post author="Dyovana Santi" content="Conteúdo teste 3 DS"/>
    </div>
  )
}
