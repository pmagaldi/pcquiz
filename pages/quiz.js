import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';

export default function QuizPage() {
  const router = useRouter();
  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>{router.query.nome}</h1>
            </Widget.Header>
            <img src={db.questions[0].image} alt="Imagem da Questão" />
            <Widget.Content>
              <Button type="button">{db.questions[0].alternatives[0]}</Button>
            </Widget.Content>
          </Widget>
        </QuizContainer>
      </QuizBackground>
    </>
  );
}
