import { useEffect, useState } from "react";
import Button from "../Buttons/NavButton";
import BtnClose from "./BtnClose";

interface PropsModal {
    open: number
    close: (v: number) => void
    className?: string
    children?: any
}

export default function Modal(props: PropsModal) {

    const [showModal, setShowModal] = useState(true);
    useEffect(() => {
        setShowModal(true)
    }, [props.open])
    return (
        <>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className={`relative mx-auto bg-black rounded-lg border border-[#113C57] bg-cover ${props.className}`}>
                            <div className="p-6">
                                {props.children}
                            </div>
                            <div className="flex justify-center">
                                <div className="-mb-9">
                                    <BtnClose click={() => (setShowModal(false), props.close(0))} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}