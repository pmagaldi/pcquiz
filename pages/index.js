import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import Input from '../src/components/Input';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <Head>
          <title>PC Quiz Alura</title>
        </Head>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <form onSubmit={function (infoEvent) {
                infoEvent.preventDefault();
                router.push({
                  pathname: '/quiz',
                  query: { nome: name },
                });
              }}
              >
                <Input
                  onChange={function (infoEvent) {
                    setName(infoEvent.target.value);
                  }}
                  placeholder="Digite Seu Nome"
                />
                <button type="submit">
                  Jogar
                  {' '}
                  {name}
                </button>
              </form>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Header>Outros Quizes</Widget.Header>
            <Widget.Content>
              <a href="https://aluraquiz-css.omariosouto.vercel.app/">
                <p>Quiz CSS - Mario Souto</p>
              </a>
              <a href="https://css-quiz.higorpo.vercel.app/">
                <p>Quiz CSS - Higor Oliveira</p>
              </a>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/pmagaldi" />
      </QuizBackground>
    </>
  );
}
