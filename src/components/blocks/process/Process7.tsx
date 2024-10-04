import { Fragment } from "react";
// CUSTOM ICON COMPONENT
import List from "icons/lineal/List";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "components/reuseable/links/NextLink";
import { ProcessList1 } from "components/reuseable/process-list";
// CUSTOM DATA
import { processList1 } from "data/process";

export default function Process7() {
  return (
    <Fragment>
      <div className="row mb-5">
        <div className="col-md-10 col-xl-8 col-xxl-7 mx-auto text-center">
          <List />
          <h2 className="display-4 mb-4 px-lg-14">Here are 3 working steps to organize our business projects.</h2>
        </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
        <div className="col-lg-6 order-lg-2">
          {processList1.map((item) => (
            <ProcessList1 {...item} key={item.no} />
          ))}
        </div>

        <div className="col-lg-6">
          <h2 className="display-6 mb-3">How It Works?</h2>
          <p className="lead fs-lg pe-lg-5">
          Discover everything you need to know about our process for creating effective business models.
          </p>

          <p>
          At OSPI, we focus on collaboration and innovation to develop standards that streamline product identification. Our approach involves engaging with the community, leveraging data insights, and refining our methodologies to ensure that our solutions are practical and impactful.
          </p>

          <p className="mb-6">
          Join us as we explore the transformative power of open standards in enhancing product data management.
          </p>

          <NextLink title="Learn More" href="#" className="btn btn-primary rounded-pill mb-0" />
        </div>
      </div>
    </Fragment>
  );
}
