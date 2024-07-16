import Navbar from "../components/Navbar";
import Sgrid from "../components/Sgrid";

function Services() {
  return (
    <>
      <Navbar />
      <div className="bg-rose-50 bg-opacity-40 min-h-screen">
        <div className="flex justify-center items-center py-9 text-3xl">
          <h1>Manicures And Pedicures</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6 gap-8">
          <Sgrid
            title="Spa Manicure"
            desc="includes shaping and shining of the nails, soak, exfoliation,  
            moisture masque, cuticle care repair, aroma hot towels, hand to elbow lotion massage and polish application."
            price="$45.00 | $5.00 Extra gel polish"
            extraPrice="$50.00 Deluxe"
          />
          <Sgrid
            title="Spa Pedicures"
            desc="include trimming, filing and buffing of toenails. Heels smoothed & callous 
            removal treatment, cuticle care repair, refreshing foot soak, exfoliation, cooling & refresh clay  masque, aroma hot towels, foot to knee crème massage and polish application."
            price="$65.00"
            extraPrice="$70.00 Chocolate"
          />
          <Sgrid
            title="Express Mani"
            desc="file, buff, shine of nails, cuticle care repair, lotion and polish application."
            price="$40.00"
            extraPrice="$2.00 Extra gel polish"
          />
          <Sgrid
            title="Express Pedi"
            desc="trim, file, buff, shine , cuticle care repair, heels smoothed, crème and polish application."
            price="$40.00"
            extraPrice="$2.00 Extra gel polish"
          />
          <Sgrid
            title="IBX"
            desc="Works to repair from inside the layers of the nail plate. This intensive treatment works on building up length and durability.
            Add on to any natural nail service and long term Gel Polish wearers."
            price="$8"
          />
        </div>
      </div>
    </>
  );
}

export default Services;
