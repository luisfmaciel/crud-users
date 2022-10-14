import { ThemeProvider } from 'styled-components'; 
import GlobalStyle from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import AppRoutes from '../../routes';
import Header from '../Header';
import { Container } from './style';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Container>
        <Header />
        <AppRoutes />
      </Container>
    </ThemeProvider>
  );
}

export default App;
