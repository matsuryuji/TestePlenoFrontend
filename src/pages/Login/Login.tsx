import Button from "@/components/Button/Button";
import React from "react";
import LOGO from "@/assets/logo.svg";

export default function Login() {
  return (
    <div className="bg-dark w-full h-full">
      <div className="flex flex-row justify-around items-center w-full h-full">
        <div className="flex flex-col items-center">
          <div className="flex flex-row">
            <img src={LOGO} alt="Logo" />
            <div className="flex flex-col justify-center pl-[12px]">
              <h1 className="font-sans font-poppins text-xl text-white font-bold leading-[64px]">
                My
              </h1>
              <h1 className="font-sans font-poppins text-xl text-white font-bold leading-[64px]">
                Library
              </h1>
            </div>
          </div>
          <p className="font-sans font-poppins text-xl text-white font-medium text-base">
            Sua Biblioteca virtual
          </p>
        </div>
        <Button className="bg-red text-white">Entrar</Button>
      </div>
    </div>
  );
}
