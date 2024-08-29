import React from "react";

const Owner = () => {
  return (
    <section>
      <div className="bg-section py-16">
        <div className="container py-16">
          <div>
            <h1 className="section-subtitle">Meet Our CE0</h1>
            <p className="font-light text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur assumenda repellendus facilis dicta .
            </p>
          </div>

          <div className="grid  container ">
            <div className="flexCenter  flex-col-reverse w-[65%] mt-14 ml-16 ">
              <div className="lg:absolute rounded-2xl w-[40vh] h-[15vh] md:w-[50vh] md:h-[18vh] lg:w-[60vh] lg:h-[20vh] bg-[#0D39A9] lg:mr-96 flex flex-col gap-1 justify-center text-white ">
                <h1 className="ml-4 font-bold text-2xl">CEO</h1>
                <span className="ml-4 text-xl ">Ephraim Benjamin</span>
              </div>
              {/* Image */}
              <div className="image-con z-0">
                <img
                  src="./owner/test.png"
                  alt=""
                  className="h-full w-full rounded-full"
                />
              </div>
            </div>
            {/* card */}
            <div className="relative right-5 lg:py-8 lg:pr-72 min-w-20 lg:min-w-full  border-2 border-l-8 border-l-black mt-8 shadow-c">
              <div className="grid lg:grid-cols-2 gap-12 py-8">
                {/* logo */}
                <div className="flexCenter ">
                  <img
                    src="./owner/logo.jpg"
                    alt=""
                    className="size-32 rounded-3xl "
                  />
                </div>

                {/* text */}
                <div className="leading-8 ">
                  <p className=" lg:w-[40vw] px-4 text-left lg-text-">
                    Damisa Global Realty Ltd Introducing Ephraim Benjamin,
                    CEO/MD Ephraim Benjamin, a seasoned legal practitioner, is
                    the driving force behind Damisa Global Realty Ltd (DGR), a
                    leading real estate firm based in Abuja, Nigeria, is
                    dedicated to providing exceptional real estate solutions.
                    With a commitment to excellence and a deep understanding of
                    the local market, DGR offers a wide range of services,
                    including property sales, rentals, and management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agent */}

      </div>
    </section>
  );
};

export default Owner;