"use client"
import logo from '/public/image/cable/cable_logo.png';
import Image from "next/image";
import {useRouter} from 'next/navigation';

export default function Header() {
    const router = useRouter();
    const buttonClick = () => {
        router.push("/cart");
    }
    const buttonClickHome = () => {
        router.push("/");
    }

    return (

        <div className="container d-flex justify-content-between align-items-center pt-5 pb-5">
            <div className="header__left align-items-center d-flex gap-4">
                <button onClick={buttonClickHome} className="">
                    <div className="header__logo">
                        <Image width="38" src={logo}  alt="logo pizza"/>
                    </div>
                </button>
                <button onClick={buttonClickHome} className="">
                    <div className="header__title">
                        <div className="header__title-text">
                            REACT CABLE
                        </div>
                        <div className="header__text">
                            самые лучшие кабеля во вселенной
                        </div>
                    </div>
                </button>
            </div>
            <div className="header__right">
                <button onClick={buttonClick} className="header__cart-button">
                    Корзина
                </button>
            </div>
        </div>
    );
}