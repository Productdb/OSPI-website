import Carousel2 from "components/reuseable/Carousel2";

export default function Hero23() {
  return (
    <section className="wrapper bg-dark">
      <div className="swiper-container swiper-thumbs-container swiper-fullscreen nav-dark">
        <Carousel2 />

        <div className="swiper-static">
          <div className="container h-100 d-flex align-items-center justify-content-center">
            <div className="row">
              <div className="col-lg-8 mx-auto mt-n10 text-center">
                <h1 className="fs-19 text-uppercase ls-xl text-white mb-3 animate__animated animate__zoomIn animate__delay-1s">
                  I'm Julia OSPI
                </h1>
                <h2 className="display-1 fs-60 text-white mb-0 animate__animated animate__zoomIn animate__delay-2s">
                  couples &amp; wedding photographer
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
