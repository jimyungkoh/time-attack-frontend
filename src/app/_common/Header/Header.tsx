import { logOut } from "@/api/auth.api";
import { useAppDispatch } from "@/app/_providers/Providers";
import { useAuth } from "@/contexts/auth.context";
import { setModal } from "@/redux/reducers/utils.slice";
import Link from "next/link";
import LogInModal from "./_components/LogInModal";

export default function Header() {
  const dispatch = useAppDispatch();
  const { signedIn, signOut } = useAuth();
  
  const handleClickLogIn = () => {
    const action = setModal(<LogInModal />);
    dispatch(action);
  };

  const handleClickLogOut = () => {
    signOut();
    logOut();
  }

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
        {!signedIn ? <>
          <Link className="nav-link" href="/auth/sign-up">회원가입</Link>
          <button className="nav-link" onClick={handleClickLogIn}>로그인</button>
        </> : <>
          <Link className="nav-link" href="/cart">장바구니</Link>
          <button className="nav-link" onClick={handleClickLogOut}>로그아웃</button>
        </>}
      </div>
    </header>
  );
}

