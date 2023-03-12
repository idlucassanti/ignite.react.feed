import './global.css';
import styles from './App.module.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      name: 'Lucas Santi',
      avatar: 'https://github.com/idlucassanti.png',
      role: 'CEO @conjugebrasil'
    },
    publishAt: new Date('2023-03-10 16:30:00'),
    content: [
      { type: 'paragraphy', content: 'Fala galeraa 👋'},
      { type: 'paragraphy', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ]
  },
  {
    id: 2,
    author: {
      name: 'Matteo Santi',
      avatar: 'https://media.licdn.com/dms/image/C4D03AQHHGogTssoMgA/profile-displayphoto-shrink_800_800/0/1653535919452?e=1684368000&v=beta&t=C1bIbdwBJx_lICc0E2JiJepZv96pE_58ZoXm389xQ7Q',
      role: '.NET Developer'
    },
    publishAt: new Date('2023-03-12 08:00:00'),
    content: [
      { type: 'paragraphy', content: 'Fala galeraa 👋'},
      { type: 'paragraphy', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ]
  },
  {
    id: 3,
    author: {
      name: 'Dyovana Kerly Moura Alves',
      avatar: 'https://media.licdn.com/dms/image/C4E03AQHn7wXSxPaXzQ/profile-displayphoto-shrink_800_800/0/1654555932617?e=1684368000&v=beta&t=zp-dVFWfXYDDYKYrqJYfjbDcQRvShzxhOKXYCRdok3k',
      role: 'Customer Success'
    },
    publishAt: new Date('2023-03-12 08:00:00'),
    content: [
      { type: 'paragraphy', content: 'Fala galeraa 👋'},
      { type: 'paragraphy', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ]
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <div>
          {posts.map((post, i) => (
            <Post 
              key={post.id} 
              author={post.author} 
              content={post.content}
              publishAt={post.publishAt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
