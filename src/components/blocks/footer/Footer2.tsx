import { Contact2 } from "../contact";
import SocialLinks from "components/reuseable/SocialLinks";

export default function Footer2() {
  return (
    <footer className="bg-soft-primary">
      <div className="container">
        <div className="card shadow-lg mt-n16 mt-md-n21 mb-15 mb-md-14">
          <Contact2 />
        </div>
      </div>

      <div className="container pb-12 text-center">
        <div className="row mt-n10 mt-lg-0">
          <div className="col-xl-10 mx-auto">
            <div className="row mb-3">
              <div className="col-md-4">
                <div className="widget">
                  <h4 className="widget-title">Address</h4>
                  <address>
                    Moonshine St. 14/05 <br className="d-none d-md-block" /> Light City, London, UK
                  </address>
                </div>
              </div>

              <div className="col-md-4">
                <div className="widget">
                  <h4 className="widget-title">Phone</h4>
                  <p>
                    00 (123) 456 78 90 <br />
                    00 (987) 654 32 10
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="widget">
                  <h4 className="widget-title">E-mail</h4>

                  <a href="mailto:OSPI@email.com" className="link-body">
                    OSPI@email.com
                  </a>
                  <br className="d-none d-md-block" />

                  <a href="mailto:help@OSPI.com" className="link-body">
                    help@OSPI.com
                  </a>
                </div>
              </div>
            </div>

            <p>© 2022 OSPI. All rights reserved.</p>

            <SocialLinks className="nav social justify-content-center" />
          </div>
        </div>
      </div>
    </footer>
  );
}
