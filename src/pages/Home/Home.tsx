import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import PEOPLE from "@/assets/people.png";
import BOOKSS from "@/assets/Bookss.svg";
import BIOGRAFIAS from "@/assets/ImageBiografias.svg";
import IT from "@/assets/it.png";
import EDLORRAINE from "@/assets/edlorraine.png";
import COMAMOR from "@/assets/comamor.png";
import BLOOD from "@/assets/blood.svg";
import {
  CategoryBox,
  CommentBook,
  Divider,
  FavoriteBook,
  Navbar,
} from "@/components";
import { iFavoriteBook } from "@/interfaces/iFavoriteBook";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { iCommentBook } from "@/interfaces/iCommentBook";

export default function Home() {
  const mockBook: iCommentBook[] = [
    {
      id: 1,
      image: EDLORRAINE,
      comments: 250,
      like: 15,
      title: "ED & Lorraine Warren",
      commentAuthor: "Alinne Lauren",
      commentDescription:
        " Fiquei presa nessa trilogia, conta a história dos demonólogos Ed e Lorraine Warren, a tragetória deles como investigadores de eventos paranoramais, a história lorem impsun dhiuasdhiusahiuaddjnsaijodasjoidoaijsdjioasdjoiasjoidas",
      date: "2022-10-06T19:14:00.000Z",
    },
    {
      id: 2,
      image: IT,
      comments: 250,
      like: 15,
      title: "IT a coisa",
      commentAuthor: "Larissa Machado",
      commentDescription:
        "História boa, fala sobre um palhaço assassino que mata crianças para alimentar-se e um grupo de sete adolescentes resolve dete-lo, porém, confesso que o final foi decepcionante.",
      date: "2022-11-12T15:18:00.000Z",
    },
    {
      id: 3,
      image: COMAMOR,
      comments: 250,
      like: 15,
      title: "Com amor Anthony",
      commentAuthor: "Augusto Fontes",
      commentDescription:
        "História conta a vida da mãe de um garoto autista,que sofre dificuldades constantemente, e posteriormente a criança não resiste vindo a falecer, seu casamento Testestestestestestestetestestestes",
      date: "2022-11-14T07:45:00.000Z",
    },
  ];
  const [books, setBooks] = useState<iFavoriteBook[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handlePrevClick = () => {
    if (carouselRef.current && windowRef.current) {
      const width = carouselRef.current.offsetWidth;
      setCurrentIndex(
        currentIndex + windowRef.current?.offsetWidth <= width
          ? currentIndex * 0
          : currentIndex - 300
      );
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current && windowRef.current) {
      const width = carouselRef.current.offsetWidth;
      setCurrentIndex(
        currentIndex + windowRef.current?.offsetWidth >= width
          ? currentIndex * 0
          : currentIndex + 300
      );
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3333/livros").then((res) => {
      const filterFavoriteBooks = res.data.filter(
        (item: { FL_FAVORITO: boolean }) => item.FL_FAVORITO
      );
      setBooks(filterFavoriteBooks);
    });
  }, []);

  return (
    <div className="flex flex-col">
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
      <div className="flex flex-row mt-4">
        <div className="flex flex-col  ml-4 mr-5">
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
          <div className="bg-blue w-[333px] h-[313px] mt-4 rounded-md shadow-sm">
            <div className="flex flex-col items-center mt-5">
              <img src={BIOGRAFIAS} alt="Briografias" className="rounded-sm" />
              <h1 className="font-sail text-white text-3lg leading-[50px] mt-2">
                Biografias
              </h1>
              <p className="font-teko text-white text-lg w-[55%] text-center mt-2 leading-[28px]">
                Grandes mentes da sociedade
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-x-hidden ">
          <div className="flex flex-col" ref={windowRef}>
            <h1 className="font-inter font-medium text-2lg mb-4">
              Livros Favoritos
            </h1>
            <div
              className="relative"
              onMouseEnter={() => setIsVisible(true)}
              onMouseLeave={() => setIsVisible(false)}
            >
              {isVisible ? (
                <>
                  <div
                    className="flex items-center absolute justify-center right-0 h-full z-50  bg-gray bg-opacity-60 h-full cursor-pointer w-10 hover:bg-gray  transition duration-700 ease-in-out rounded-sm"
                    onClick={handleNextClick}
                  >
                    <AiOutlineArrowRight />
                  </div>
                  {currentIndex > 0 ? (
                    <div
                      className="flex items-center justify-center absolute h-full z-50 bg-opacity-60 h-full bg-gray cursor-pointer w-10 hover:bg-gray opacity-100 transition duration-700 ease-in-out rounded-sm"
                      onClick={handlePrevClick}
                    >
                      <AiOutlineArrowLeft />
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}
              <div
                ref={carouselRef}
                className="flex flex-row gap-8 w-max transition-all duration-500 ease-in-out "
                style={{
                  transform: `translateX(-${currentIndex}px)`,
                }}
              >
                {books.map((book) => (
                  <FavoriteBook key={book.ID} book={book} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-6 mb-5">
            <h1 className="font-inter font-medium text-2lg mb-4">
              Comentários
            </h1>
            <div className="flex flex-row gap-3">
              {mockBook.map((commentMockBook) => (
                <CommentBook
                  key={commentMockBook.id}
                  commentBook={commentMockBook}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-row bg-dark h-[220px] mr-5 rounded-xl shadow-sm justify-between">
            <img src={BLOOD} alt="blood" className="w-[355px] h-[226px]" />
            <div className="flex flex-col mr-9">
              <div className="flex flex-col items-end">
                <p className="font-rubik-wet-paint text-3lg text-white">
                  Clássicos
                </p>
                <p className="font-rubik-wet-paint text-3lg text-white">
                  do Terror
                </p>
              </div>
              <p className="font-teko text-white text-lg">
                Grandes classicos de terror, historias de arrepiar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
