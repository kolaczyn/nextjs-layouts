import Link from "next/link";

const navItems = [
  { label: "Home Page", href: "/" },
  { label: "Another Page", href: "/another-page" },
];

export const Navbar = () => (
  <div className="navbar bg-slate-100 shadow-sm">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">nextjs layouts</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0">
        {navItems.map(({ label, href }) => (
          <li key={href}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
