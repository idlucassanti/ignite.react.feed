import { useState } from 'react'
import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

export function Post({ author, content, publishAt }) {
  const [comments, setComments]= useState([
    {
      id: 1,
      authorComment: {
        avatar: 'https://media.licdn.com/dms/image/D4D03AQGaV6jiu99HvQ/profile-displayphoto-shrink_800_800/0/1675686976170?e=1684368000&v=beta&t=AMq57t7fNYP5Jgkh5bw2NXV0vHtuwJKC6L4O5k8KwtI',
        name: 'Valdir Santi Junior'
      },
      publishAt: new Date('2023-03-11 17:55:00'),
      content: 'Muito bom Devon, parabéns!! 👏👏',
      like: 33
    },
    {
      id: 2,
      authorComment: {
        avatar: 'https://media.licdn.com/dms/image/C5603AQEtPkE0cL0i-g/profile-displayphoto-shrink_200_200/0/1624466019172?e=1684368000&v=beta&t=gBVDo4KtV8jzIwjjTdkh-UEUnWmyFult8Xq5zmgEdYs',
        name: 'Gregório Pontim'
      },
      publishAt: new Date('2023-03-11 18:10:00'),
      content: 'Top, parabéns!!',
      like: 5
    },
  ]);

  const publishDateFormatted = format(publishAt, "d 'de' LLLL 'de' yyyy 'às' HH':'mm'h'", {
    locale: ptBr,
  });

  const publishDate = formatDistanceToNow(publishAt, {
    locale: ptBr,
    addSuffix: true
  });

  function handleCreateNewComment(e) {
    e.preventDefault();

    var newContent = e.target.comment.value;

    var comment = {
      id: comments.length + 1,
      authorComment: {
        avatar: author.avatar,
        name: author.name,
      },
      publishAt: new Date(),
      content: newContent,
      like: 0
    }

    setComments([...comments, comment]);

    e.target.comment.value = '';
  }

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
              return <p key={item.content}>{item.content}</p>            
            case 'link':
              return <p key={item.content}><a href=''>{item.content}</a></p>
            default:
              break;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment}>
        <strong>Deixe o seu feedback</strong>
        <textarea name="comment" placeholder='Escreva um comentário...'></textarea>
        <button type='submit'>Publicar</button>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, i) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>

    </div>
  );
}