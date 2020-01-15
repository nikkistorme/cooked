import Link from 'next/link';
import styled from 'styled-components';

const TopNav = styled.nav`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    display: flex;
    li {
      margin: 5px;
    }
  }
`;

const Nav = () => (
  <TopNav>
    <ul>
      <li><Link href="/"><a>Inventory</a></Link></li>
      <li><Link href="/recipes"><a>Recipes</a></Link></li>
      <li><Link href="/profile"><a>Profile</a></Link></li>
    </ul>
  </TopNav>
)

export default Nav;