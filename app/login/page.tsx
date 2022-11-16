import React from "react";
import Image from "next/image";
import heroImage from "../../assets/images/hero.png";

const LoginPage = () => {
    return (
        <div className="h-[100vh] w-[100vw] flex flex-row items-center justify-center fixed">
            <Image
                src={heroImage}
                alt="Picture of the author"
                fill
                priority
            />
        </div>
    );
};

export default LoginPage;
