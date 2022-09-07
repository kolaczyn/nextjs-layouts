import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <span>Logo</span>
      <ul>
        <li>
          <Link href="/">
            <a>Home Page</a>
          </Link>
        </li>
        <li>
          <Link href="/another-page">
            <a>Another Page</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
