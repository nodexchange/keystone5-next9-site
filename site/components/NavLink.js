
import Link from 'next/link';
import { NavAnchor } from './NavAnchor';

export const NavLink = ({ href, as, ...props }) => (
  <Link href={href} as={as} passHref>
    <NavAnchor {...props} />
  </Link>
);