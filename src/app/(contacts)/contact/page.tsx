import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import { Footer8 } from "components/blocks/footer";
import { Contact2 } from "components/blocks/contact";
import Navbar from "components/blocks/navbar/navbar-1";
import ContactForm from "components/common/ContactForm";
import NextLink from "components/reuseable/links/NextLink";

export default function ContactThree() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          language
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark"
          button={<NextLink title="Contact" href="/contact" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        <section className="wrapper bg-dark text-white">
          <div className="container pt-18 pt-md-20 pb-21 pb-md-21 text-center">
            <div className="row">
              <div className="col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-5 mx-auto">
                <h1 className="display-1 text-white mb-3">Get in Touch</h1>
                <p className="lead px-xl-10 px-xxl-10">
                  Have any questions? Reach out to us from our contact form and we will get back to you shortly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="wrapper bg-light">
          <div className="container pb-14 pb-md-160">
            {/* ========== newsletter section ========== */}
            <div className="row">
              <div className="col mt-n19 mb-16">
                <div className="card shadow-lg">
                  <Contact2 />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-10 mx-auto">
                <div className="row gy-10 gx-lg-8 gx-xl-12">
                  {/* ========== contact form section ========== */}
                  <div className="col-lg-8">
                    <ContactForm />
                  </div>

                  {/* ========== contact info section ========== */}
                  <div className="col-lg-4">
                    <div className="d-flex flex-row">
                      <div>
                        <div className="icon text-primary fs-28 me-4 mt-n1">
                          <i className="uil uil-envelope" />
                        </div>
                      </div>
                      <div>
                        <h5 className="mb-1">E-mail</h5>
                        <p className="mb-0">
                          <a href="mailto:contact@ospi-standard.org" className="link-body">
                            contact@ospi-standard.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
