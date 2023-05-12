import ADVENTURE from "@/assets/adventureIcon.svg";
import THRILLER from "@/assets/thrillerIcon.svg";
import FICTION from "@/assets/fictionIcon.svg";
import GHOST from "@/assets/ghostIcon.svg";

const CategoryBox: React.FC = () => {
  return (
    <div className="flex flex-row justify-center gap-3">
      <div className="flex flex-col justify-between items-center w-[75px] h-[75px] rounded-md drop-shadow-sm bg-yellow ">
        <img
          src={ADVENTURE}
          className="w-[45px] h-[45px] mt-[8px]"
          alt="adventure"
        />
        <p className="font-saira-stencil-one text-white font-normal text-base mb-[2px]">
          AVENTURA
        </p>
      </div>
      <div className="flex flex-col justify-between items-center w-[75px] h-[75px] rounded-md drop-shadow-sm bg-blue">
        <img
          src={FICTION}
          className="w-[40px] h-[40px] mt-[8px]"
          alt="thriller"
        />
        <p className="font-russo-one text-white font-normal text-base mb-[2px]">
          FICÇÃO
        </p>
      </div>
      <div className="flex flex-col justify-between items-center w-[75px] h-[75px] rounded-md drop-shadow-sm bg-light-red">
        <img
          src={THRILLER}
          className="w-[32px] h-[32px]  mt-[8px]"
          alt="fiction"
        />
        <p className="font-rubik-glitch text-white font-normal text-base mb-[2px]">
          SUSPENSE
        </p>
      </div>
      <div className="flex flex-col justify-between items-center w-[75px] h-[75px] rounded-md drop-shadow-sm bg-dark">
        <img src={GHOST} className="w-[45px] h-[45px] mt-[2px]" alt="ghost" />
        <p className="font-rubik-wet-paint text-white font-normal text-base mb-[2px]">
          TERROR
        </p>
      </div>
    </div>
  );
};

export default CategoryBox;
