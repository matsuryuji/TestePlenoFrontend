import axios from "axios";
import React, { useEffect, useState } from "react";
import PEOPLE from "@/assets/people.png";
import { Box, Divider } from "@/components";
import NavBar from "@/components/Navbar/Navbar";

export default function Home() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3333/livros").then((res) => {
      setBook(res.data);
    });
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="bg-dark-gray w-[806px] h-[95px] rounded-br-[250px] rounded-bl-[50px] shadow-lg relative">
          <div className="flex flex-row pt-4">
            <img
              src={PEOPLE}
              alt="People"
              className="ml-5 mr-4 rounded-sm w-[53px] h-[56px]"
            />
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col">
                  <p className="font-inter text-white font-medium text-base">
                    Olá <strong>Alinne Lauren.</strong>
                  </p>
                  <p className="font-inter text-white font-medium text-base">
                    O que vai querer ler hoje?
                  </p>
                </div>
                <div className="flex flex-col absolute top-[5%] right-[5%]">
                  <p className="font-inter text-white font-medium text-sm leading-[20px] text-end">
                    NV
                  </p>
                  <p className="font-inter text-white font-bold text-lg leading-[20px]">
                    15
                  </p>
                </div>
              </div>
              <Divider className="my-1 w-[94%] border-light-gray" />
              <p className="font-inter text-white font-semibold text-base">
                Devoradora de Livros
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mr-[56px] mt-6">
          {/* Dentro deste componente foi utilizado uma fonte onde no figma estava escrito strong mas procurando na web não é igual ao do figma, optei de usar pois é o unico font family strong que eu tinha encontrado */}
          <NavBar />
          <Divider className="my-1 w-[440px] border-light-gray" />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <Box
            bgColor="light-red"
            boxClassName="w-[331px] h-[238px] mt-4 ml-4 mb-3 mr-5 rounded-md"
          ></Box>
        </div>
      </div>
    </div>
  );
}
