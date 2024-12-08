import { Container, LinksContainer, Image, StyledLink as Link } from './styled';
import { links } from '@constants/links';
import diagram from '@images/svg/diagram.svg';
import ToogleThemeButton from '@components/toggleThemeButton';
import { useLocation } from 'react-router';

export const Navbar = () => {
  const location = useLocation();

  const navLinks = links.map(({ href, id, name }) => (
    <Link to={href} key={id} className={location.pathname === href ? 'active' : ''}>
      {name}
    </Link>
  ));

  return (
    <nav>
      <Container>
        <Image src={diagram} />
        <LinksContainer>{navLinks}</LinksContainer>
        <ToogleThemeButton />
      </Container>
    </nav>
  );
};

export default Navbar;
