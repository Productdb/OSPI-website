import { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faPrint, faPlusCircle, faServer, faGlobe, faShieldAlt } from '@fortawesome/free-solid-svg-icons';


export default function Services() {
  return (
    <Fragment>
                          {/* Hero Section */}
      <section className="hero-section position-relative d-flex align-items-center justify-content-center text-center bg-gradient py-5" style={{ height: '100vh', background: 'linear-gradient(135deg, #1c92d2 0%, #f2fcfe 100%)', color: '#fff' }}>
        <div className="container">
          <h1 className="display-4 font-weight-bold animate__animated animate__fadeInDown mb-4">The Future of Product Identification</h1>
          <p className="lead mb-4 animate__animated animate__fadeInUp">Free, open, and global product identification with OSPI. Say goodbye to fees and restrictions.</p>
          <a href="/documentation" className="btn btn-lg btn-gradient shadow animate__animated animate__fadeInUp">Explore Documentation</a>
        </div>
        <div className="hero-bg-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'url(/images/hero-bg.svg)', opacity: 0.2 }}></div>
      </section>

      {/* Overview Section */}
      <section className="overview py-5 text-center bg-light">
        <div className="container">
          <h2 className="display-5 mb-4">What is OSPI?</h2>
          <p className="lead text-muted mb-5">OSPI (Open Standard Product Identification) is an open-source, free-to-use protocol that provides businesses a flexible, license-free way to generate product identifiers globally.</p>
        </div>
      </section>

      {/* How OSPI Works Section */}
      <section className="how-it-works py-5 text-white position-relative" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container">
          <h2 className="text-center display-5 mb-5">How OSPI Works</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card card-body bg-transparent border-light shadow-lg text-center p-4 animate__animated animate__zoomIn" style={{ transition: '0.3s', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faPlusCircle} size="3x" className="mb-3 text-gradient gradient-2" />
                <h4>Generate Your OSPI Code</h4>
                <p>Generate unique OSPI codes for each product with our free code generator, giving you complete control without licensing restrictions.</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card card-body bg-transparent border-light shadow-lg text-center p-4 animate__animated animate__zoomIn animate__delay-1s" style={{ transition: '0.3s', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faPrint} size="3x" className="mb-3 text-gradient gradient-3" />
                <h4>Integrate the Code</h4>
                <p>Embed OSPI codes into barcodes or digital systems for seamless integration into global supply chains.</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card card-body bg-transparent border-light shadow-lg text-center p-4 animate__animated animate__zoomIn animate__delay-2s" style={{ transition: '0.3s', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faGlobe} size="3x" className="mb-3 text-gradient gradient-4" />
                <h4>Global Recognition</h4>
                <p>OSPI codes are universally recognized across supply chains, supporting international trade and logistics systems.</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card card-body bg-transparent border-light shadow-lg text-center p-4 animate__animated animate__zoomIn animate__delay-3s" style={{ transition: '0.3s', cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faShieldAlt} size="3x" className="mb-3 text-gradient gradient-1" />
                <h4>No Fees, No Registration</h4>
                <p>OSPI offers a free, decentralized product identification system with no central authority, allowing businesses to operate freely.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-5 text-center bg-light">
        <div className="container">
          <h2 className="display-5 mb-5">Benefits of OSPI</h2>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card card-body border-0 shadow text-center h-100 p-4">
                <FontAwesomeIcon icon={faCheckCircle} size="2x" className="text-gradient gradient-1 mb-3" />
                <h5>No Fees</h5>
                <p>OSPI is free to use, with no registration or licensing costs.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card card-body border-0 shadow text-center h-100 p-4">
                <FontAwesomeIcon icon={faPrint} size="2x" className="text-gradient gradient-2 mb-3" />
                <h5>Open Source</h5>
                <p>Contribute to and customize the open-source OSPI protocol.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card card-body border-0 shadow text-center h-100 p-4">
                <FontAwesomeIcon icon={faGlobe} size="2x" className="text-gradient gradient-3 mb-3" />
                <h5>Global Compatibility</h5>
                <p>OSPI codes work seamlessly with global logistics systems.</p>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card card-body border-0 shadow text-center h-100 p-4">
                <FontAwesomeIcon icon={faShieldAlt} size="2x" className="text-gradient gradient-4 mb-3" />
                <h5>Decentralized</h5>
                <p>No central control, giving businesses full flexibility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}