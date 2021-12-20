import Link from "next/link";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/terms">
            <a>Terms</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
