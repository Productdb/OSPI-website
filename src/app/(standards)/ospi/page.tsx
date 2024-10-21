import { Fragment } from "react";


export default function Services() {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="hero text-center py-5">
        <h1 className="display-4">OSPI Protocol: A Free and Open Standard for Product Identification</h1>
        <p className="lead mb-4">The Open Standard Product Identification (OSPI) protocol provides businesses with a free, global system to create, use, and manage unique product identifiers without licensing fees or restrictions.</p>
        <a href="/documentation" className="btn btn-primary">Explore Documentation</a>
      </section>

      {/* Overview Section */}
      <section className="overview py-5">
        <div className="container">
          <h2 className="mb-4">What is the OSPI Protocol?</h2>
          <p>
            OSPI (Open Standard Product Identification) is an open-source, free-to-use protocol that enables businesses to generate unique product identifiers 
            without needing to register with a central authority. Unlike traditional systems like GTIN, OSPI allows complete flexibility and control over 
            product identification, making it easier for businesses of all sizes to operate globally without the burden of licensing fees.
          </p>
        </div>
      </section>

      {/* How OSPI Works Section */}
      <section className="how-it-works bg-light py-5">
        <div className="container">
          <h2 className="mb-4">How the OSPI Protocol Works</h2>
          <p>The OSPI protocol is designed to be simple yet robust enough for global commerce. Here’s how it works:</p>
          <ul className="list-unstyled">
            <li className="mb-3">
              <strong>1. Generate Your OSPI Code:</strong> Businesses can generate a unique OSPI code using the OSPI Code Generator. This code serves as the unique identifier for each product.
            </li>
            <li className="mb-3">
              <strong>2. Integrate the Code:</strong> Once generated, the OSPI code can be printed as a barcode, embedded in digital product catalogs, or integrated into inventory management systems.
            </li>
            <li className="mb-3">
              <strong>3. Global Recognition:</strong> The OSPI protocol is built to be compatible with global supply chains and can be scanned or recognized by any system that supports barcode technology.
            </li>
            <li>
              <strong>4. No Centralized Fees or Registration:</strong> Unlike other systems, OSPI does not require businesses to pay fees or register with a central body. The protocol is entirely open and free.
            </li>
          </ul>
          <a href="/get-started" className="btn btn-secondary mt-4">Get Started with OSPI</a>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison py-5">
        <div className="container">
          <h2 className="mb-4">OSPI vs Traditional Product Identification Standards</h2>
          <table className="table table-bordered">
            <thead>
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
                <td>Fixed structure and governed by GS1</td>
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

      {/* Benefits Section */}
      <section className="benefits bg-light py-5">
        <div className="container">
          <h2 className="mb-4">Benefits of Using OSPI</h2>
          <ul className="icon-list bullet-bg bullet-soft-primary">
            <li className="mb-3">
              <i className="uil uil-check" />
              <strong>No Fees:</strong> OSPI is completely free to use. There are no registration or licensing costs.
            </li>
            <li className="mb-3">
              <i className="uil uil-check" />
              <strong>Open Source:</strong> The protocol is open source, allowing businesses to contribute, modify, and adapt it to their needs.
            </li>
            <li className="mb-3">
              <i className="uil uil-check" />
              <strong>Global Compatibility:</strong> OSPI codes can be used across global supply chains and recognized by any barcode-compatible system.
            </li>
            <li className="mb-3">
              <i className="uil uil-check" />
              <strong>Decentralized Control:</strong> Unlike GS1, OSPI does not have a central governing body. Businesses have full control over their product identifiers.
            </li>
          </ul>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="implementation py-5">
        <div className="container">
          <h2 className="mb-4">How to Implement the OSPI Protocol</h2>
          <p>Implementing OSPI in your business is easy and flexible. Whether you're a small business or a large corporation, OSPI offers a straightforward process:</p>
          <ul className="list-unstyled">
            <li className="mb-3">
              <strong>1. Generate Codes:</strong> Use our online generator or API to create OSPI codes for your products.
            </li>
            <li className="mb-3">
              <strong>2. Print Barcodes:</strong> Embed OSPI codes into your product packaging, labels, or digital catalogs.
            </li>
            <li className="mb-3">
              <strong>3. Integrate into Systems:</strong> Incorporate OSPI into your inventory management or ERP systems for seamless tracking.
            </li>
            <li>
              <strong>4. No Registration Needed:</strong> Start using OSPI codes right away without the need for any additional registrations.
            </li>
          </ul>
          <a href="/api-docs" className="btn btn-primary mt-4">Access the API Documentation</a>
        </div>
      </section>
    </Fragment>
  );
}