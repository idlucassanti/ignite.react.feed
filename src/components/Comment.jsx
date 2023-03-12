import styles from './Comment.module.css'
import { Trash, ThumbsUp } from '@phosphor-icons/react'

export function Comment(props) {

  return(
    <div className={styles.comment}>
      <img src="https://github.com/idlucassanti.png" />

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <header>
            <div className={styles.author}>
              <span>Lucas Santi</span>
              <time>Cerca de 3h atrás</time>
            </div>
            <button>
              <Trash size={20} />
            </button>
          </header>
        
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir
            <span>33</span>
          </button>
        </footer>
      </div>
    </div>
  )
}