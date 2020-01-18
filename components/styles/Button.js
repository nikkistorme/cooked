import styled from 'styled-components';

const Button = styled.button`
  /* Normalize the Button */
  font-size: 100%;
  border: 0;
  padding: 0;
  /* Custom Styles */
  background-color: ${props => props.theme.white};
  border-radius: 10px;
  border: 2px solid ${props => props.theme.color_primary};
  cursor: pointer;
  margin: 5px;
  padding: 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${props => props.theme.color_primary};
  }
`;

export default Button;