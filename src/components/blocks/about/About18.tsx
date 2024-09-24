"use client";

import CountUp from "components/reuseable/CountUp";
// GLOBAL CUSTOM HOOKS
import useProgressbar from "hooks/useProgressbar";
// CUSTOM ICON COMPONENT
import CloudGroup from "icons/solid-duo/CloudGroup";

export default function About18() {
  // used for the animated line
  useProgressbar();

  return (
    <div className="row gx-md-8 gy-10 align-items-center">
      <div className="col-lg-6 offset-lg-1 order-lg-2 position-relative">
        <figure className="rounded">
          <img className="img-fluid" src="/img/photos/about27.jpg" srcSet="/img/photos/about27@2x.jpg 2x" alt="" />
        </figure>

        <div className="card shadow-lg position-absolute d-none d-md-block" style={{ top: "15%", left: "-7%" }}>
          <div className="card-body py-4 px-5">
            <div className="d-flex flex-row align-items-center">
              <div>
                <CloudGroup />
              </div>
              <div>
                <h3 className="fs-25 counter mb-0 text-nowrap">
                  <CountUp end={25000} suffix="+" />
                </h3>
                <p className="fs-16 lh-sm mb-0 text-nowrap">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="card shadow-lg position-absolute text-center d-none d-md-block"
          style={{ bottom: "10%", left: "-10%" }}>
          <div className="card-body p-6">
            <div className="progressbar semi-circle fuchsia mb-3" data-value="80" />
            <h4 className="mb-0">Time Saved</h4>
          </div>
        </div>
      </div>

      <div className="col-lg-5">
  <h2 className="fs-16 text-uppercase text-gradient gradient-1 mb-3">What Makes Us Different?</h2>
  <h3 className="display-4 mb-4 me-lg-n5">We provide a cost-free, open-source product identification system.</h3>
  <p className="mb-6">
    Unlike traditional systems that require costly registrations and central control, OSPI offers a free and open 
    product identification standard accessible to businesses of all sizes. Empower your business with global 
    identification without the fees and complexities.
  </p>

  <ul className="icon-list bullet-bg bullet-soft-primary">
    <li>
      <i className="uil uil-check" />
      Completely free and open-source.
    </li>

    <li>
      <i className="uil uil-check" />
      No licensing or registration fees required.
    </li>

    <li>
      <i className="uil uil-check" />
      Flexible and customizable to fit your business needs.
    </li>
  </ul>
</div>

    </div>
  );
}
