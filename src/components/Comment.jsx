import { formatDistanceToNow, format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Comment.module.css'
import { Trash, ThumbsUp } from '@phosphor-icons/react'
import { Avatar } from './Avatar'

export function Comment({comment}) {

  const { authorComment, publishAt, content, like} = comment;

  const publishDateFormatted = format(publishAt, "d 'de' LLLL 'de' yyyy 'às' HH':'mm'h'", {
    locale: ptBR,
  });

  const publishDate = formatDistanceToNow(publishAt, {
    locale: ptBR,
    addSuffix: true
  });

  return(
    <div className={styles.comment}>
      <Avatar src={authorComment.avatar} hasBorder={false}/>

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <header>
            <div className={styles.author}>
              <span>{authorComment.name}</span>
              <time title={publishDateFormatted} dateTime={publishAt.toISOString()}>{publishDate}</time>
            </div>
            <button>
              <Trash size={20} />
            </button>
          </header>
        
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir
            <span>{like}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}