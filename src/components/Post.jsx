import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

export function Post({ author, content, publishAt }) {

  const publishDateFormatted = format(publishAt, "d 'de' LLLL 'de' yyyy 'às' HH':'mm'h'", {
    locale: ptBr,
  });

  const publishDate = formatDistanceToNow(publishAt, {
    locale: ptBr,
    addSuffix: true
  });

  return (
    <div className={styles.post}>
      <header>
        <Avatar src={author.avatar} />
        
        <div className={styles.authorInfos}>
          <span>{author.name}</span>
          <strong>{author.role}</strong>
        </div>
        <time title={publishDateFormatted} dateTime={publishAt.toISOString()} className={styles.publishAt}>{publishDate}</time>
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