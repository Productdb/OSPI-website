import { Fragment } from "react";
import { 
    UilCheckCircle, 
    UilGlobe, 
    UilCodeBranch, 
    UilServerNetwork, 
    UilPlusCircle, 
    UilPrint 
  } from '@iconscout/react-unicons';  


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
        <a href="/docs" className="btn btn-gradient btn-lg">Explore Documentation</a>
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

      {/* How OSPI Works Section with Animation */}
      <section className="how-it-works bg-gradient py-5 text-white position-relative">
        <div className="container">
          <h2 className="mb-4 text-center display-5">How the OSPI Protocol Works</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card card-body bg-transparent border-light shadow-sm text-center">
                <h4 className="mb-3">1. Generate Your OSPI Code</h4>
                <p>
                  Businesses can generate a unique OSPI code using the OSPI Code Generator. This code serves as the unique identifier for each product.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card card-body bg-transparent border-light shadow-sm text-center">
                <h4 className="mb-3">2. Integrate the Code</h4>
                <p>
                  Once generated, the OSPI code can be printed as a barcode, embedded in digital product catalogs, or integrated into inventory management systems.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card card-body bg-transparent border-light shadow-sm text-center">
                <h4 className="mb-3">3. Global Recognition</h4>
                <p>
                  The OSPI protocol is compatible with global supply chains and can be recognized by any system that supports barcode technology.
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card card-body bg-transparent border-light shadow-sm text-center">
                <h4 className="mb-3">4. No Centralized Fees or Registration</h4>
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

      {/* Comparison Section */}
      <section className="comparison py-5">
        <div className="container">
          <h2 className="mb-4 text-center display-5">OSPI vs Traditional Standards</h2>
          <table className="table table-bordered table-hover shadow-sm">
            <thead className="bg-dark text-white">
              <tr>
                <th>Feature</th>
                <th>OSPI</th>
                <th>GTIN (GS1)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cost</td>
                <td>Free</td>
                <td>License and registration fees required</td>
              </tr>
              <tr>
                <td>Ownership</td>
                <td>Decentralized and community-driven</td>
                <td>Centralized by GS1</td>
              </tr>
              <tr>
                <td>Flexibility</td>
                <td>Fully customizable by the business</td>
                <td>Fixed structure, governed by GS1</td>
              </tr>
              <tr>
                <td>Global Recognition</td>
                <td>Supported by global supply chain systems</td>
                <td>Recognized worldwide</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Benefits Section with Cards */}
      <section className="benefits py-5 bg-light">
        <div className="container">
          <h2 className="mb-4 text-center display-5">Benefits of Using OSPI</h2>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card card-body border-0 shadow-sm text-center">
                <i className="uil uil-check-circle fs-2 text-gradient gradient-1 mb-3"></i>
                <h5>No Fees</h5>
                <p>OSPI is free to use with no registration or licensing costs.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card card-body border-0 shadow-sm text-center">
                <i className="uil uil-code-branch fs-2 text-gradient gradient-2 mb-3"></i>
                <h5>Open Source</h5>
                <p>The protocol is open source, allowing businesses to contribute and adapt it to their needs.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card card-body border-0 shadow-sm text-center">
                <i className="uil uil-globe fs-2 text-gradient gradient-3 mb-3"></i>
                <h5>Global Compatibility</h5>
                <p>OSPI codes are compatible with global supply chain systems.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card card-body border-0 shadow-sm text-center">
                <i className="uil uil-shield-check fs-2 text-gradient gradient-4 mb-3"></i>
                <h5>Decentralized Control</h5>
                <p>Businesses have full control over their product identifiers without a governing body.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="implementation py-5">
        <div className="container">
          <h2 className="mb-4 text-center display-5">How to Implement OSPI</h2>
          <p className="text-muted text-center mb-5">
            Implementing OSPI is easy and flexible. Whether you're a small business or a large corporation, OSPI offers a simple, scalable process:
          </p>
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <i className="uil uil-plus-circle fs-3 text-gradient gradient-2"></i>
              <h5>1. Generate Codes</h5>
              <p>Use our online generator or API to create OSPI codes for your products.</p>
            </div>
            <div className="col-md-3 mb-4">
              <i className="uil uil-print fs-3 text-gradient gradient-3"></i>
              <h5>2. Print Barcodes</h5>
              <p>Embed OSPI codes into your product packaging, labels, or digital catalogs.</p>
            </div>
            <div className="col-md-3 mb-4">
              <i className="uil uil-server-network fs-3 text-gradient gradient-4"></i>
              <h5>3. Integrate Systems</h5>
              <p>Incorporate OSPI into your inventory management systems for seamless tracking.</p>
            </div>
            <div className="col-md-3 mb-4">
              <i className="uil uil-check-circle fs-3 text-gradient gradient-1"></i>
              <h5>4. Start Using OSPI</h5>
              <p>OSPI is ready for use without any additional registrations or fees.</p>
            </div>
          </div>
          <div className="text-center mt-5">
            <a href="/docs" className="btn btn-lg btn-gradient">Access API Documentation</a>
          </div>
        </div>
      </section>
    </Fragment>
  );
}