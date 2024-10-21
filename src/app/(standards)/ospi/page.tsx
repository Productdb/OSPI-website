import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faPrint, faPlusCircle, faServer, faGlobe, faShieldAlt } from '@fortawesome/free-solid-svg-icons';


export default function Services() {
  return (
    <Fragment>
                    {/* Hero Section */}
      <section className="hero text-center py-5 position-relative">
        <div className="hero-bg" style={{ backgroundImage: 'url("/images/hero-bg.svg")', backgroundSize: 'cover' }} />
        <h1 className="display-4 text-gradient gradient-1 mb-4">OSPI Protocol: A Free and Open Standard for Product Identification</h1>
        <p className="lead text-muted mb-4">
          The Open Standard Product Identification (OSPI) protocol provides businesses with a free, global system to create, use, 
          and manage unique product identifiers without licensing fees or restrictions.
        </p>
        <a href="/documentation" className="btn btn-gradient btn-lg">Explore Documentation</a>
      </section>

      {/* Overview Section */}
      <section className="overview py-5">
        <div className="container text-center">
          <h2 className="mb-4 display-5">What is the OSPI Protocol?</h2>
          <p className="text-muted">
            OSPI (Open Standard Product Identification) is an open-source, free-to-use protocol that enables businesses to generate unique product 
            identifiers without needing to register with a central authority. Unlike traditional systems like GTIN, OSPI allows complete flexibility 
            and control over product identification, making it easier for businesses of all sizes to operate globally without the burden of licensing fees.
          </p>
        </div>
      </section>

      {/* How OSPI Works Section with Font Awesome Icons */}
      <section className="how-it-works bg-gradient py-5 text-white position-relative">
        <div className="container">
          <h2 className="mb-4 text-center display-5">How the OSPI Protocol Works</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card card-body bg-transparent border-light shadow-sm text-center">
                <h4 className="mb-3">
                  <FontAwesomeIcon icon={faPlusCircle} className="text-gradient gradient-2 me-2" />
                  Generate Your OSPI Code
                </h4>
                <p>
                  Businesses can generate a unique OSPI code using the OSPI Code Generator. This code serves as the unique identifier for each product.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card card-body bg-transparent border-light shadow-sm text-center">
                <h4 className="mb-3">
                  <FontAwesomeIcon icon={faPrint} className="text-gradient gradient-3 me-2" />
                  Integrate the Code
                </h4>
                <p>
                  Once generated, the OSPI code can be printed as a barcode, embedded in digital product catalogs, or integrated into inventory management systems.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card card-body bg-transparent border-light shadow-sm text-center">
                <h4 className="mb-3">
                  <FontAwesomeIcon icon={faGlobe} className="text-gradient gradient-4 me-2" />
                  Global Recognition
                </h4>
                <p>
                  The OSPI protocol is compatible with global supply chains and can be recognized by any system that supports barcode technology.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card card-body bg-transparent border-light shadow-sm text-center">
                <h4 className="mb-3">
                  <FontAwesomeIcon icon={faShieldAlt} className="text-gradient gradient-1 me-2" />
                  No Centralized Fees or Registration
                </h4>
                <p>
                  OSPI is free. No need to pay fees or register with a central body. The protocol is entirely open and accessible.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="/get-started" className="btn btn-lg btn-outline-light">Get Started with OSPI</a>
          </div>
        </div>
      </section>

      {/* Benefits Section with Font Awesome Icons */}
      <section className="benefits py-5 bg-light">
        <div className="container">
          <h2 className="mb-4 text-center display-5">Benefits of Using OSPI</h2>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card card-body border-0 shadow-sm text-center">
                <FontAwesomeIcon icon={faCheckCircle} className="fs-2 text-gradient gradient-1 mb-3" />
                <h5>No Fees</h5>
                <p>OSPI is free to use with no registration or licensing costs.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card card-body border-0 shadow-sm text-center">
                <FontAwesomeIcon icon={faPrint} className="fs-2 text-gradient gradient-2 mb-3" />
                <h5>Open Source</h5>
                <p>The protocol is open source, allowing businesses to contribute and adapt it to their needs.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card card-body border-0 shadow-sm text-center">
                <FontAwesomeIcon icon={faGlobe} className="fs-2 text-gradient gradient-3 mb-3" />
                <h5>Global Compatibility</h5>
                <p>OSPI codes are compatible with global supply chain systems.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card card-body border-0 shadow-sm text-center">
                <FontAwesomeIcon icon={faShieldAlt} className="fs-2 text-gradient gradient-4 mb-3" />
                <h5>Decentralized Control</h5>
                <p>Businesses have full control over their product identifiers without a governing body.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}