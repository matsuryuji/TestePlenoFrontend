import React from "react";
import LOGO from "@/assets/logo.svg";
import USER from "@/assets/user.svg";
import { Input, Button } from "@/components";

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
          <p className="font-sans font-poppins text-white font-medium text-base">
            Sua Biblioteca virtual
          </p>
        </div>
        <div className="flex flex-col items-center h-full justify-center">
          <div className="flex flex-col items-center ">
            <img src={USER} alt="User" className="w-[150px] mb-[60px]" />
            <div className="flex flex-col">
              <Input
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                containerClassName="w-[284px] mb-[9px]"
                inputClassName="h-[51px]"
              />
              <Input
                id="password"
                name="password"
                type="text"
                placeholder="Senha"
                containerClassName="w-[284px] mb-[84px]"
                inputClassName="h-[51px]"
              />
            </div>
            <Button className="bg-red text-white">Entrar</Button>
            <p className="font-sans font-poppins text-white font-medium lg:text-medium cursor-pointer mt-[15px]">
              Cadastrar-se
            </p>
            <p className="font-sans font-poppins text-white font-medium lg:text-medium cursor-pointer">
              Esqueceu sua senha ?
            </p>
          </div>
          <div className="fixed bottom-[1%]">
            <p className="font-sans font-poppins text-white font-medium lg:text-medium">
              @Create by D’lha Forense
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
