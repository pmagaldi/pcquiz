import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'

export const QuizContainer = styled.div`
  width:100%;
  max-width:350px;
  padding-top:45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <>
    <div>
      <Head>
        <title>{db.title}</title>
        <meta charSet="utf-8"/>
        <meta property='title' content={db.title}/>
        <meta property='description' content={db.description}/>
        <meta property='og:type' content={db.og.type}/>
        <meta property='og:url' content={db.og.url}/>
        <meta property='og:image' content={db.bg}/>
        <meta property='og:title' content={db.title}/>
        <meta property='og:description' content={db.description}/>
      </Head>
    </div>
    <div>
      <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>Outros Quizes</Widget.Header>
          <Widget.Content>            
            <a href='https://aluraquiz-css.omariosouto.vercel.app/'>
              <p>Quiz CSS - Mario Souto</p>
            </a>
            <a href='https://css-quiz.higorpo.vercel.app/'>
              <p>Quiz CSS - Higor Oliveira</p>
            </a>
          </Widget.Content>          
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl='https://github.com/pmagaldi' />
    </QuizBackground>
    </div>
    </>
  )
}
