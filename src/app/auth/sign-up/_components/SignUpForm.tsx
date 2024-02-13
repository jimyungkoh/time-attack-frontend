"use client"

import { signUp } from "@/api/auth.api";
import { useAuth } from "@/contexts/auth.context";
import { SignUpDto } from "@/types/signUpDto.type";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function SignUpForm() {
    const router = useRouter();
    const {signIn} = useAuth();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmedPasswordRef = useRef<HTMLInputElement>(null);

    const handleSignUp = () => {
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;
        const confirmedPassword = confirmedPasswordRef.current?.value;

        if (!email) {
            alert("이메일을 입력해주세요");
            return;
        }
        if (!password) {
            alert("비밀번호를 입력해주세요");
            return;
        }
        if (!confirmedPassword) {
            alert("비밀번호 확인을 입력해주세요");
            return;
        }
        
        if (password != confirmedPassword) {
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        const signUpForm: SignUpDto = {
            email, password
        }

        signUp(signUpForm).then(() =>{
            alert("회원가입이 완료되었습니다.");
            signIn();
            router.replace("/");
        }
        ).catch((e) =>
            alert("중복 회원입니다.")
        );
    };



    return (
        <article className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col grow w-full items-stretch">
            <h2 className="font-bold text-3xl text-center my-12">회원가입</h2>
            <section className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full">
                <div className="grid gap-y-1.5 w-full">
                    <label htmlFor="email" className="text-sm font-medium text-gray-800">
                        이메일
                    </label>
                    <input
                        type="email"
                        ref = {emailRef}
                        className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
                    />
                </div>
                <div className="grid gap-y-1.5 w-full">
                    <label htmlFor="" className="text-sm font-medium text-gray-800">
                        비밀번호
                    </label>
                    <input
                        type="password"
                        ref={passwordRef}
                        className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
                        />
                </div>
                <div className="grid gap-y-1.5 w-full">
                    <label htmlFor="" className="text-sm font-medium text-gray-800">
                        비밀번호 확인
                    </label>
                    <input
                        ref = {confirmedPasswordRef}
                        type="password"
                        className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
                    />
                </div>
                <div className="mt-2"></div>
                <button className="border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-black text-white transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full data-[color=black]:bg-black data-[color=black]:text-white"
                onClick={handleSignUp}>
                    회원가입하기
                </button>
            </section>
        </article>);
}
