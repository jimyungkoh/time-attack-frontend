"use client";

import { useAppDispatch } from "@/app/_providers/Providers";
import { setModal } from "@/redux/reducers/utils.slice";
import { PropsWithChildren } from "react";

interface ModalProps {
  title: string;
}

function Modal({ title, children }: PropsWithChildren<ModalProps>) {
  const dispatch = useAppDispatch();

  const handleClickBackdrop = () => {
    const action = setModal(null);
    dispatch(action);
  };

    return (
        <div
            className="bg-black/50 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-20"
      
            onClick={handleClickBackdrop}
        >
            <div className="bg-white rounded-md w-full max-w-[400px] px-5 py-8"
                onClick={(e) => e.stopPropagation()}>
                <h2 className="font-bold text-3xl text-center my-12">{title}</h2>
                <div
                    className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full"
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;
