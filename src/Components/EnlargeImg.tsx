import { Dispatch, SetStateAction, useState } from "react";
import type { EnlargeImgType } from "./Projects";

type EnlargeImgProps = {
  enlargedImage: EnlargeImgType;
  setEnlargedImg: Dispatch<SetStateAction<EnlargeImgType>>;
};

function EnlargeImg({ setEnlargedImg, enlargedImage }: EnlargeImgProps) {
  const [nextImg, setNextImg] = useState(0);

  return (
    <>
      {enlargedImage.length > 0 && (
        <div
          onClick={() => {
            setEnlargedImg([]);
            setNextImg(0);
          }}
          className={`${enlargedImage ? "bigImgLayout" : ""}`}
        >
          {enlargedImage.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                return nextImg < 1
                  ? setNextImg(enlargedImage.length - 1)
                  : setNextImg((prev) => prev - 1);
              }}
              className="enlargeImgBtn"
            >
              <img
                className="enlargeIconBtn"
                src="/Portfolio/svg/icons/leftAngle.svg"
              />
            </button>
          )}

          <img
            onLoad={(e) => {
              const img = e.currentTarget;
              if (img.height > 600) {
                img.style.width = "350px";
              } else {
                img.style.width = "630px";
              }
            }}
            className={`${enlargedImage ? "showBigImg" : "hideBigImg"}`}
            src={enlargedImage[nextImg]?.src}
          />
          {enlargedImage.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                return nextImg >= enlargedImage.length
                  ? setNextImg(0)
                  : setNextImg((prev) => prev + 1);
              }}
              className="enlargeImgBtn"
            >
              <img
                className="enlargeIconBtn"
                src="/Portfolio/svg/icons/rightAngle.svg"
              />
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default EnlargeImg;
