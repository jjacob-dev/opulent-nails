function Cdetails() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="font-medium text-2xl">Opulent Nails</h1>
          <div>
            <div className="flex flex-row gap-3">
              <p className="text-rose-300">Mount Cotton</p>
              <p className="underline">0473 010 825</p>
            </div>
            <div>
              <p>58 Petunia Cres, Mount Cotton QLD, 4165</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="font-medium text-2xl pb-4">Opening Hours</h1>
          <div>
            <p>
              Monday CLOSED<br></br>
              Tuesday 09:00 - 20:00<br></br>
              Wednesday 09:00 - 14:30<br></br>
              Thursday 09:00 - 20:00<br></br>
              Friday 09:00 - 17:00<br></br>
              Saturday 08:00 - 14:00<br></br>
              Sunday CLOSED<br></br>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cdetails;
