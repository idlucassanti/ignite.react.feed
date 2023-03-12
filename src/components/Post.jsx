import styles from './Post.module.css'

export function Post(props) {
  return (
    <div className={styles.post}>
      <header>
        <img src="https://github.com/idlucassanti.png"/>
        
        <div className={styles.authorInfos}>
          <span>Lucas Santi</span>
          <strong>.NET Developer</strong>
        </div>

        <time title='12 de Março às 05:14h' dateTime='2023-03-12 05:14:00' className={styles.publishAt}>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href=''>jane.design/doctorcare</a></p>
        
        <p><a href=''>#novoprojeto</a>{' '}<a href=''>#nlw</a>{' '}<a href=''>#rocketseat</a></p>
      </div>

      <form>
        <strong>Deixe o seu feedback</strong>
        <textarea placeholder='Escreva um comentário...'></textarea>
        <button type='submit'>Publicar</button>
      </form>
    </div>
  );
}