import { iFavoriteBook } from "@/interfaces/iFavoriteBook";
import DRACULA from "@/assets/dracula.png";
import HP from "@/assets/hp.png";
import REICH from "@/assets/reich.png";
import CALENDARIO from "@/assets/calendario.svg";
import EDITORA from "@/assets/editora.svg";
import AUTOR from "@/assets/autor.svg";
import FULLSTAR from "@/assets/fullStar.png";
import HALFSTAR from "@/assets/halfStar.png";
import EMPTYSTAR from "@/assets/emptyStar.png";
import Rating from "react-rating-stars-component";
import { truncateString } from "@/utils/truncate-string";
import { formatDate } from "@/utils/format-date";

interface FavoriteBookProps {
  book: iFavoriteBook;
}

const FavoriteBook: React.FC<FavoriteBookProps> = ({ book }) => {
  if (!book) {
    return null;
  }

  const filterMockImage = (ID: number) => {
    if (ID === 1) {
      return DRACULA;
    } else if (ID === 2) {
      return REICH;
    } else {
      return HP;
    }
  };

  return (
    <div className="flex flex-row w-[323px] h-[148px] bg-[url('@/assets/backgroundTexture.png')] drop-shadow-sm rounded-md">
      <div className="flex flex-row mt-2 ml-1">
        <img
          src={filterMockImage(book.ID)}
          className="w-[85px] h-[132px]"
          alt="dracula"
        />
        <div className="ml-2">
          <p className="text-[15px] font-poppins font-medium text-black mb-3 leading-6">
            {truncateString(book.NOME, 24)}
          </p>
          <div className="flex flex-row">
            <img src={EDITORA} alt="editora" />
            <div className="flex flex-col ml-1">
              <p className="text-sm font-poppins font-light text-black leading-[10px]">
                Editora
              </p>
              <p className="text-sm font-poppins font-medium text-black leading-[10px]">
                {book.EDITORA}
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <img src={AUTOR} alt="autor" />
            <div className="flex flex-col ml-1 my-1">
              <p className="text-sm font-poppins font-light text-black leading-[10px]">
                Autor
              </p>
              <p className="text-sm font-poppins font-medium text-black leading-[10px]">
                {book.AUTOR}
              </p>
            </div>
          </div>
          <div className="flex flex-row mb-2">
            <img src={CALENDARIO} alt="calendario" />
            <div className="flex flex-col ml-1">
              <p className="text-sm font-poppins font-light text-black leading-[10px]">
                Data da publicação
              </p>
              <p className="text-sm font-poppins font-medium text-black leading-[10px]">
                {formatDate(book.DATA_PUBLICACAO)}
              </p>
            </div>
          </div>
          <Rating
            count={5}
            value={book.Star}
            isHalf={true}
            edit={false}
            emptyIcon={<img src={EMPTYSTAR} alt="empty star" />}
            halfIcon={<img src={HALFSTAR} alt="halfstar" />}
            filledIcon={<img src={FULLSTAR} alt="empty star" />}
            activeColor="#F0AD00"
          />
        </div>
      </div>
    </div>
  );
};

export default FavoriteBook;
