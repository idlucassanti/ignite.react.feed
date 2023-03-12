import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post({ author, content, publishAt }) {

  return (
    <div className={styles.post}>
      <header>
        <Avatar src={author.avatar} />
        
        <div className={styles.authorInfos}>
          <span>{author.name}</span>
          <strong>{author.role}</strong>
        </div>
        <time title='12 de Março às 05:14h' dateTime='2023-03-12 05:14:00' className={styles.publishAt}>{publishAt.toString()}</time>
      </header>

      <div className={styles.content}>
        {content.map((item, i) => {
          switch (item.type) {
            case 'paragraphy':
              return <p>{item.content}</p>            
            case 'link':
              return <p><a href=''>{item.content}</a></p>
            default:
              break;
          }
        })}
      </div>

      <form>
        <strong>Deixe o seu feedback</strong>
        <textarea placeholder='Escreva um comentário...'></textarea>
        <button type='submit'>Publicar</button>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </div>
  );
}