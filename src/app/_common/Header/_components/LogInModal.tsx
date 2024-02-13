"use client"

import { logIn } from "@/api/auth.api";
import { useAppDispatch } from "@/app/_providers/Providers";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/auth.context";
import { setModal } from "@/redux/reducers/utils.slice";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LogInModal() {
    const dispatch = useAppDispatch();
    const router = useRouter(); 
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const { mutateAsync } = useMutation({ mutationFn: logIn });
    const { signIn } = useAuth();

    const handleClickLogIn = async () => {
        const action = setModal(null);
        dispatch(action);
        await mutateAsync({ email: id, password: pw }).then(() => {
            alert("로그인에 성공하였습니다!");
            signIn();
            router.replace("/");

        }).catch(() => {
            alert("이메일 또는 패스워드가 일치하지 않습니다!");
        });
    };

    return (
        <Modal title="로그인">
            <div className="grid gap-y-1.5 w-full">
                <label className="text-sm font-medium text-gray-800">
                    이메일
                </label>
                <input
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
                />
            </div>
            <div className="grid gap-y-1.5 w-full">
                <label className="text-sm font-medium text-gray-800">
                    패스워드
                </label>
                <input
                    value={pw}
                    type="password"
                    onChange={(e) => setPw(e.target.value)}
                    className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
                />
            </div>
            <button onClick={handleClickLogIn} className="my-4 border border-slate-700  py-4 px-12 text-[15px] font-semibold bg-black text-white transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full data-[color=black]:bg-black data-[color=black]:text-white">로그인하기</button>
        </Modal>
    );
}

export default LogInModal;
