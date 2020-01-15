import Nav from './Nav';
import styled from 'styled-components';

const Banner = styled.div`
  background-color: lightgrey;
  height: 50px;
  display: flex;
  align-items: center;
  h2 {
    margin: 0 10px;
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