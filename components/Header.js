import Nav from './Nav';
import styled from 'styled-components';

const Banner = styled.div`
  background-color: ${props => props.theme.color_primary};
  height: 50px;
  display: flex;
  align-items: center;
  h2 {
    margin: 0 10px;
    /* color: ${props => props.theme.color_secondary} */
  }
`;

const Header = () => (
  <header>
    <Banner>
      <h2>Cooked</h2>
    </Banner>
    <Nav />
  </header>
)

export default Header;