import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link
        href="/"
        className={clsx('link', router.pathname === '/' ? 'active' : '')}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={clsx('link', router.pathname === '/about' ? 'active' : '')}
      >
        About
      </Link>
    </nav>
  );
}
