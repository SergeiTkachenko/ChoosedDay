import { ChoosedDay } from './ChoosedDay/ChoosedDay';
import { Container } from './Styles/Container';
import { GlobalStyle } from './Styles/GlobalStyle';

export const App = () => {
  return (
    <Container>
      <ChoosedDay />
      <GlobalStyle />
    </Container>
  );
};
