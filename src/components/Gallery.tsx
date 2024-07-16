import Img1 from "../images/nails/nail1.jpg";
import Img2 from "../images/nails/nail2.jpg";
import Img3 from "../images/nails/nail3.jpg";
import Img4 from "../images/nails/nail4.jpg";
import Img5 from "../images/nails/nail5.jpg";
import Img6 from "../images/nails/nail6.jpg";
import Img7 from "../images/nails/nail7.jpg";
import Img8 from "../images/nails/nail8.jpg";
import Img9 from "../images/nails/nail9.jpg";
import Img10 from "../images/nails/nail10.jpg";
import Img11 from "../images/nails/nail11.jpg";
import Img12 from "../images/nails/nail12.jpg";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
    {
      id: 7,
      imgSrc: Img7,
    },
    {
      id: 8,
      imgSrc: Img8,
    },
    {
      id: 9,
      imgSrc: Img9,
    },
    {
      id: 10,
      imgSrc: Img10,
    },
    {
      id: 11,
      imgSrc: Img11,
    },
    {
      id: 12,
      imgSrc: Img12,
    },
  ];
  return (
    <>
      <div className="bg-rose-50 bg-opacity-40 min-h-full">
        <div className="">
          <div className="columns-1 mg:max-w-2xl lg:max-w-7xl p-5 pb-10 mx-auto mb-10 gap-5 space-y-5 md:columns-2 lg:columns-3">
            {data.map((item, index) => {
              return (
                <div className="hover:opacity-80" key={index}>
                  <img src={item.imgSrc} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
