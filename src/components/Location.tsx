function Location() {
  return (
    <>
      <div className="flex py-24 flex-col px-8 bg-pink-50 justify-center items-center gap-12 lg:flex-row">
        <div>
          <div className="max-w-[700px]">
            <p>
              <iframe
                className="w-[400px] h-[260px] md:w-[450px] md:h-[300px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d742.9963143294053!2d153.24568285824682!3d-27.646002428932114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b916732ed18b11d%3A0x44c081fcf46ef275!2sOpulent%20Nails!5e0!3m2!1sen!2sau!4v1647347315423!5m2!1sen!2sau"
                loading="lazy"
              ></iframe>
            </p>
          </div>
        </div>

        <div>
          <div className="text-2xl py-3">
            <h1>Location and Hours</h1>
          </div>

          <div className="flex gap-6">
            <div>
              <p>
                Opulent Nails<br></br>
                58 Petunia Crescent<br></br>
                Mount Cotton QLD 4165<br></br>
                <a href="mailto:donna@opulentnails.com">
                  donna@opulentnails.com
                </a>
                <br></br>
                <div>
                  <a
                    data-v-6f179aba=""
                    href="https://www.google.com/maps/dir/?api=1&amp;destination=Opulent+Nails,+2%2F685+Old+Cleveland+Rd+E,+Wellington+Point+QLD+4160"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-v-ab1ca44a=""
                  >
                    <div
                      className="font-medium"
                      data-v-3730b402=""
                      data-v-0f80c724=""
                      data-v-6f179aba=""
                    >
                      <h3>Get directions</h3>
                    </div>
                  </a>
                </div>
              </p>
            </div>

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
      </div>
    </>
  );
}

export default Location;
