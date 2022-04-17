import * as S from './styles';

const Main = ({
  description = 'React SSR boilerplate made on top of NextJS with the power of Typescript, Styled Components, Jest, Testing Library and infinite possibilities.'
}) => (
  <S.Wrapper>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
);

export default Main;
