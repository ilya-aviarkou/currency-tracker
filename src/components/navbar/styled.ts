import { theme } from '@theme/index';
import { Link } from 'react-router';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: ${theme.spaces.medium}px ${theme.spaces.xLarge}px;
  justify-content: space-between;
  align-items: center;
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: ${theme.spaces.large}px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &.active {
    color: green;
  }
  &:hover {
    color: green;
  }
`;

export const Image = styled.img`
  width: ${theme.fontSizes.xLarge}px;
  height: ${theme.fontSizes.xLarge}px;
`;
