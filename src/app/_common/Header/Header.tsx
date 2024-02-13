import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 h-16 border-b flex items-center px-5 lg:px-8 z-10 shrink-0">
      <Link href="/" className="font-bold text-2xl">
        발랑
      </Link>
      <nav className="ml-20">
        <ul>
          <li><Link href="/brands">BRANDS</Link></li>
        </ul>
      </nav>
      <div className="ml-auto flex items-center gap-x-4">
        <Link className="nav-link" href="/auth/log-in">회원가입</Link>
        <Link className="nav-link" href="/auth/sign-up">로그인</Link>
      </div>
    </header>
  );
}

