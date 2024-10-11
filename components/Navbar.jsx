import Link from 'next/link';
import styles from './Navbar.module.css'
import { useRouter } from 'next/router';

export default function Navbar(){
    const router = useRouter();
    return(
        <>
        <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link href='/' className='navbar-brand'>Next-App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul className='navbar-nav'>
        <li  className={`nav-item ${router.pathname === "/about" ? "active" : ""} ${styles.maNavListItem}`}> <Link href='/about' className="nav-link">About </Link></li>
        <li  className={`nav-item ${router.pathname === "/contact" ? "active" : ""} ${styles.maNavListItem}`}> <Link href='/contact' className="nav-link">Contacts </Link> </li>
        <li  className={`nav-item ${router.pathname === "/blog" ? "active" : ""} ${styles.maNavListItem}`}> <Link href='/blog' className="nav-link">Blogs</Link></li>
      </ul>
    </div>
  </div>
</nav>
        </div>
        </>
    )
}