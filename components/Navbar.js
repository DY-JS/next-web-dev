import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.scss';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' },
];

export default function Navbar() {
  const { pathname } = useRouter(); //путь текущей страницы
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/vercel.svg" width={60} height={60} alt="Logo" />
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a className={pathname === path ? styles.active : null}>{title}</a>
          </Link>
        ))}
        {/* <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
        <Link href="/contacts">
          <a>Contacts</a>
        </Link> */}
      </div>
    </nav>
  );
}
