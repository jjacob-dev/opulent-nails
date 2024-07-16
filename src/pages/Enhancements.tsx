import Navbar from "../components/Navbar";
import Sgrid from "../components/Sgrid";

function Enhancements() {
  return (
    <>
      <Navbar />
      <div className="bg-rose-50 bg-opacity-40 min-h-screen">
        <div className="flex justify-center items-center py-9 text-3xl">
          <h1>Enhancements</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6 gap-8">
          <Sgrid
            title="Set of Sculptured, French/Art Extra long Acrylic"
            desc="File and polish application"
            price="$75.00 / $80.00"
          />
          <Sgrid
            title="Set of tips Overlays"
            desc="(Acrylic or Polygel)"
            price="$70.00"
          />
          <Sgrid title="Overlays" desc="" price="$60.00" />
          <Sgrid
            title="Removal & Reset"
            desc="Price depends on type of set of Nails"
            price="$30.00 + Price of set"
            extraPrice=""
          />
          <Sgrid
            title="Removal & Treatment"
            desc="Safe & gentle removal. Acrylic is soaked off, nails are tidied, buffed and shined, soak, cuticle care treatment, finishing with application of nail strengthener."
            price="$55.00"
            extraPrice="With IBX $60.00"
          />
          <Sgrid
            title="Fiber in a bottle"
            desc="Strengthening Synthetic Fibers base gel. Wear on its own or with gel polish."
            price="$45.00"
            extraPrice=""
          />
          <Sgrid
            title="Nail Art * POA"
            desc=""
            price="5.00 - $25.00"
            extraPrice=""
          />
          <Sgrid
            title="Infills fortnightly"
            desc=""
            price="$47.00"
            extraPrice=""
          />
          <Sgrid
            title="Infills 3 weekly"
            desc=""
            price="$52.00"
            extraPrice=""
          />
          <Sgrid
            title="Infills 4 weekly"
            desc=""
            price="$55.00"
            extraPrice=""
          />
          <Sgrid
            title="Rebalance (French/Colour change)"
            desc=""
            price="$68.00"
            extraPrice=""
          />
        </div>
      </div>
    </>
  );
}

export default Enhancements;
