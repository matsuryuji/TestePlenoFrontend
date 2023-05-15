import { iCommentBook } from "@/interfaces/iCommentBook";
import COMMENTSICON from "@/assets/commentsicon.svg";
import LIKEICON from "@/assets/likeicon.svg";
import { formatDateWithHours } from "@/utils/format-date";
import { useEffect, useRef, useState } from "react";

interface CommentBookProps {
  commentBook: iCommentBook;
}

const CommentBook: React.FC<CommentBookProps> = ({ commentBook }) => {
  if (!commentBook) {
    return null;
  }

  const [textFormat, setTextFormat] = useState(commentBook.commentDescription);
  const textoRef = useRef<HTMLParagraphElement>(null);
  const [validateTextLength, setValidateTextLength] = useState<boolean>(false);

  useEffect(() => {
    if (textoRef.current?.offsetHeight) {
      if (textoRef.current.offsetHeight > 60) {
        setValidateTextLength(true);
        setTextFormat(
          commentBook.commentDescription.substring(
            0,
            commentBook.commentDescription.lastIndexOf(" ", 159)
          ) + "..."
        );
      }
    }
    console.log("a");
  }, [commentBook.commentDescription, textoRef?.current?.offsetHeight]);

  return (
    <div className="flex flex-row w-[335px] h-[116px] bg-light-gray rounded-lg">
      <div className="flex flex-row mt-2 ml-3 w-full relative">
        <img src={commentBook.image} className="w-[84px] h-[87px]" alt="" />
        <div className="flex flex-row ml-2 w-full">
          <div className="flex flex-col">
            <p className="text-normal font-inter font-normal text-white leading-3">
              {commentBook.title}
            </p>
            <p className="text-sm font-inter font-normal text-white leading-3">
              {formatDateWithHours(commentBook.date)}
            </p>
            <p className="text-sm font-inter font-semibold text-white mb-2 leading-3">
              {commentBook.commentAuthor}
            </p>
            <p
              className="text-sm font-inter font-extralight text-white"
              ref={textoRef}
            >
              {textFormat}
              <a
                href="/"
                className="text-sm font-inter font-semibold text-white"
              >
                {validateTextLength ? "Ver Mais" : null}
              </a>
            </p>
          </div>
          <div className="flex mr-2 gap-1">
            <div className="absolute right-[8%]">
              <div className="flex relative h-min">
                <img
                  src={COMMENTSICON}
                  alt="commentsicon"
                  className="w-[16px] h-[16px]"
                />
                <p className="text-xs font-poppins font-medium text-white absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                  {commentBook.comments}
                </p>
              </div>
            </div>
            <div className="absolute right-[2%]">
              <div className="flex relative h-min">
                <img
                  src={LIKEICON}
                  alt="likeicon"
                  className="w-[16px] h-[16px] "
                />

                <p className="text-xs font-poppins font-medium text-white absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                  {commentBook.like}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBook;
