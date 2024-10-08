// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Hero22 } from "components/blocks/hero";
import { Facts16 } from "components/blocks/facts";
import { About23 } from "components/blocks/about";
import { Footer14 } from "components/blocks/footer";
import { Pricing8 } from "components/blocks/pricing";
import { Process15 } from "components/blocks/process";
import { Services25 } from "components/blocks/services";
import { Portfolio12 } from "components/blocks/portfolio";

export default function Demo22() {
  return (
    <div className="py-md-6">
      {/* ========== header ========== */}
      <header className="wrapper">
        <Navbar
          info
          search
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark px-md-10 px-xxl-0"
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <Hero22 />

        <section className="wrapper bg-light">
          <div className="container pt-14 pt-md-16 pb-15 pb-md-17">
            {/* ========== what we do section ========== */}
            <Services25 />

            <hr className="dark my-14 my-md-17" />

            {/* ========== how it work section ========== */}
            <Process15 />

            {/* ========== why choose us section ========== */}
            <About23 />
          </div>
        </section>

        {/* ========== working process section ========== */}
        <Facts16 />

        <section className="wrapper bg-light">
          <div className="container py-15 py-md-17">
            {/* ========== our projects section ========== */}
            <Portfolio12 />

            <hr className="dark my-14 my-md-17" />

            {/* ========== our pricing section ========== */}
            <Pricing8 />
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer14 />
    </div>
  );
}
