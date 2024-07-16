import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Props {
  stars?: string;
  desc: string;
  name: string;
}

function Tbox(props: Props) {
  return (
    <>
      <div className="flex bg-white p-3 flex-col gap-6 shadow-lg rounded-lg max-w-xs">
        <div className="flex justify-center items-center">
          <FaStar size="20px" color="pink" />
          <FaStar size="20px" color="pink" />
          <FaStar size="20px" color="pink" />
          <FaStar size="20px" color="pink" />
          <FaStarHalfAlt size="20px" color="pink" />
        </div>
        <div className="flex justify-center items-center text-xs pl-2 text-gray-600">
          <p>{props.desc}</p>
        </div>
        <div className="flex justify-center items-center text-xs font-medium">
          <p>{props.name}</p>
        </div>
      </div>
    </>
  );
}

export default Tbox;
