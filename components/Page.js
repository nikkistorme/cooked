import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Header from './Header';
import Meta from './Meta';

const theme = {
  black: '#000',
  white: '#fff'
};

const StyledPage = styled.div`
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Lato', sans-serif;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
    }
  }
  h1, h2, h3, h4 {
    font-family: 'Abril Fatface', cursive;
    margin: 0;
  }
  h1 {font-size: 2.25rem;}
  h2 {font-size: 2rem;}
  h3 {font-size: 1.75rem;}
`;

export default class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <StyledPage>
            <Meta />
            <Header />
            <Inner>{this.props.children}</Inner>
          </StyledPage>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}