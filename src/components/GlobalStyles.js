import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

        body::-webkit-scrollbar {
        width: 20px;
    }
    body::-webkit-scrollbar-track {
        background-color: transparent;
        margin-top: ${p => p.theme.space[4]}px;
        margin-bottom: ${p => p.theme.space[4]}px;
        opacity: 0;
		border-radius: ${p => p.theme.radii.normal};
    }
    body::-webkit-scrollbar-thumb {
        background-color: ${p => p.theme.colors.olive};
		border-radius: ${p => p.theme.radii.normal};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 5px;
    //  font-weight: inherit;
	//  font-size: inherit;
    }

    p {
        color: #ffffff;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    body {
	// background-color: #5F9EA0;
    // background-image: url('https://img.freepik.com/free-vector/hand-painted-watercolor-floral-background_52683-66442.jpg?w=1060&t=st=1678544970~exp=1678545570~hmac=0ab78a774557f577a028797f044a6020edf999b7bc920edfd03eeeaeb5656f4e');
    background-image: url('https://img.freepik.com/free-vector/floral-seamless-pattern-blooming-snowdrops-white-background_1182-1676.jpg?w=740&t=st=1678546802~exp=1678547402~hmac=9260b81964f1bf8dff78a059c3d0bc29b1e312fe366faff87acfa9c7f083b166');
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    left: 0;
    top: 0;
    opacity: 0.8;
    position: relative;
    z-index: 2;
}

    button {
    cursor: pointer;
    }
`;

export const PhonebookTitle = styled.h1`
  text-align: center;
  padding: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  //   color: ${p => p.theme.colors.black};
  color: #ffffff;

  box-shadow: ${p => p.theme.shadows.regular};
  border-radius: ${p => p.theme.radii.normal};
`;

export const ContactsTitle = styled.h2`
  text-align: center;
  margin-bottom: ${p => p.theme.space[2]}px;
  //   color: ${p => p.theme.colors.black};
  color: #ffffff;
`;
