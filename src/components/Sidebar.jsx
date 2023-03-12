import styles from './Sidebar.module.css'
import { PencilSimpleLine } from '@phosphor-icons/react'
import { Avatar } from './Avatar';

export function Sidebar(props) {

  return(
    <aside className={styles.sidebar}>
      <img className={styles.backgroundImage} src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" />
      
      <div className={styles.profileInfo}>
        <Avatar src="https://avatars.githubusercontent.com/u/46196863?s=400&u=33715344194a8e048f219990279b0bbcde31f6c8&v=4" />

        <span>Lucas Santi</span>
        <strong>.NET Developer</strong>
      </div>

      <footer>
        <a href=''>
          <PencilSimpleLine size={20} />Editar seu perfil</a>
      </footer>
    </aside>
  )
}