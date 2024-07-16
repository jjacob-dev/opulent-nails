import aimg from "../images/about.jpg";

function Aboutmain() {
  return (
    <>
      <div className="bg-rose-50 bg-opacity-40 min-h-screen">
        <div className="flex justify-center items-center pb-10 text-2xl py-9">
          <h1>About Me</h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-10 max-w-[80%] md:max-w-[65%] lg:flex-row">
            <div className="lg:max-w-[60%]">
              <p>
                Donna is a qualified Nail technician with over fifteen years
                experience working in a busy successful salon and running her
                own business for the past nine years. Donna has trained in both
                New Zealand and Australia and continues to stay abreast of the
                latest techniques, trends and products through regular workshops
                and a dedication to continuous improvment. Donna provides
                professional services and applies expert technique with all of
                her nail services , personally selecting the best products for
                the benefit and well being of her valued clientele.
                <br></br>
                <br></br>
                *Acrylic, polygel & some gel polish brands used at Opulent Nails
                are (Hema free) professional quality systems, nor does the
                acrylic monomer (liquid) contain toxic MMA (methacryate)
                <br></br>
                <br></br>
                *Credoblades are not used nor is there any cuticle cutting
                <br></br>
                <br></br>
                *Fresh towels for each client
                <br></br>
                <br></br>
                *Clients will have their own labelled files
                <br></br>
                <br></br>
                *All implements, files and surfaces are cleaned with hospital
                grade disinfectant
                <br></br>
                <br></br>
                *Opulent nails has completed and is certified in Covid safe
                training and infection control
                <br></br>
                <br></br>
                *Prices valid from July 2023 and are subject to change.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img className="w-[70%] h-auto" src={aimg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutmain;
