
import useInViewHook from "../../utils/inView";
import { motion } from "framer-motion";
import { FadeInFromLeft } from "../../utils/motion";


const Owner = () => {
  const { ref, inView } = useInViewHook({ threshold: 0 });


  return (
    <section>
      <div className="bg-section py-16">
        <div ref={ref} className="container py-16">
          <motion.div
            variants={FadeInFromLeft(0.4)}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          >
            <h1 className="section-subtitle">Meet Our CE0</h1>
            <p className="font-light text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur assumenda repellendus facilis dicta .
            </p>
          </motion.div>

          <div className=" container ">
            {/* card */}
            <div className="relative right-5 lg:py-8 m-auto lg:pr-72 border-2 border-l-8 border-l-black mt-8 shadow-c">
              <motion.div
                variants={FadeInFromLeft(0.8)}
                initial="initial"
                animate={inView ? "animate" : "initial"}
                className="grid lg:grid-cols-2 gap-12 py-8"
              >
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
                  <p className=" lg:w-[40vw] px-4 text-left ">
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
              </motion.div>
            </div>
          </div>
        </div>

        {/* Agent */}
      </div>
    </section>
  );
};

export default Owner;
