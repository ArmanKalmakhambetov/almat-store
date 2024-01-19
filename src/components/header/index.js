import React from 'react';
import logo from '/public/image/cable/cable_logo.png';
import Image from "next/image";
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';

export default function Header({ clickCount }) {
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
                <Button onClick={buttonClickHome} className="btn">
                    <div className="header__logo">
                        <Image width="38" src={logo} alt="logo pizza" />
                    </div>
                </Button>
                <Button onClick={buttonClickHome} className="btn">
                    <div className="header__title">
                        <div className="header__title-text">
                            REACT CABLE
                        </div>
                        <div className="header__text">
                            самые лучшие кабеля во вселенной
                        </div>
                    </div>
                </Button>
            </div>
            <div className="header__right">
                {clickCount >= 1 ? (
                    <Button onClick={buttonClick} className="header__cart-button">
                        Корзина
                        <div className='inMods'> </div>
                        <div>{clickCount}</div>
                    </Button>
                ) : (
                    <Button onClick={buttonClick} className="header__cart-button">
                        <div className='d-flex gap-2 justify-content-center'>
                            Корзина
                        </div>
                    </Button>
                )}
            </div>
        </div>
    );
}
