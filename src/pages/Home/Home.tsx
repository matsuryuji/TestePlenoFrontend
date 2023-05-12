import axios from "axios";
import React, { useEffect, useState } from "react";
import PEOPLE from "@/assets/people.png";
import BOOKSS from "@/assets/Bookss.svg";
import { CategoryBox, Divider, Navbar } from "@/components";

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
          <Navbar />
          <Divider className="my-1 w-[440px] border-light-gray" />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col mt-4 ml-4 mr-5">
          <div className="bg-light-red w-[331px] h-[238px] mb-3 rounded-md shadow-sm">
            <h1 className="font-teko text-white text-xl mt-12 ml-4 leading-[50px]">
              Novos Livros
            </h1>
            <div className="flex flex-row ml-4">
              <p className="font-teko text-white text-medium">
                Conheça a nova coleção de livros que chegou no seu App!
              </p>
              <img
                src={BOOKSS}
                alt="Bookss"
                className="ml-5 rounded-sm mt-3 mr-4"
              />
            </div>
          </div>
          <CategoryBox />
        </div>
      </div>
    </div>
  );
}
