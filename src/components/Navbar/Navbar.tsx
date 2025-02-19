import HOUSE from "@/assets/house.svg";
import BOOKS from "@/assets/books.svg";
import LIBRARY from "@/assets/library.svg";
import TEAM from "@/assets/team.svg";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-row cursor-pointer">
        <img src={HOUSE} alt="house" />
        <p className="pl-1 font-strong text-red font-normal text-base">Home</p>
      </div>
      <div className="flex flex-row mx-[25px] cursor-pointer drop-shadow-sm">
        <img src={BOOKS} alt="books" />
        <p className="pl-1 font-strong text-black font-normal text-base">
          Meus livros
        </p>
      </div>
      <div className="flex flex-row cursor-pointer">
        <img src={TEAM} alt="team" />
        <p className="pl-1 font-strong text-black font-normal text-base">
          Comunidade
        </p>
      </div>
      <div className="flex flex-row ml-[25px] cursor-pointer">
        <img src={LIBRARY} alt="library" />
        <p className="pl-1 font-strong text-black font-normal text-base">
          Biblioteca
        </p>
      </div>
    </div>
  );
};

export default Navbar;
