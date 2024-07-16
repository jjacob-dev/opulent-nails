interface Props {
  title: string;
  desc: string;
  price: string;
  extraPrice?: string;
}

function Sgrid(props: Props) {
  return (
    <>
      <div className="flex bg-white p-3 flex-col gap-4 shadow-md">
        <div className="text-xl text-pink-400">
          <h1>{props.title}</h1>
        </div>
        <div>
          <p>{props.desc}</p>
        </div>
        <div className="mt-auto">
          <p>{props.price}</p>
          <div className="font-medium">
            <p>{props.extraPrice}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sgrid;
