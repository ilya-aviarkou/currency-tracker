import styled from 'styled-components';

interface ButtonProps {
  theme: 'light' | 'dark';
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  position: relative;
  width: 40px;
  height: 20px;
  background-color: inherit;
  border: 2px solid white;
  border-radius: 15px;
  cursor: pointer;
  outline: none;
  align-items: center;
  justify-content: ${({ theme }) => (theme === 'light' ? 'flex-start' : 'flex-end')};
  transition:
    background-color 0.3s,
    justify-content 0.3s;
`;

export const Circle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid white;
  transition: transform 0.3s;
`;
