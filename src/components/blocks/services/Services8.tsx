import { Tiles4 } from "components/elements/tiles";
import IconTextBox from "components/reuseable/IconTextBox";
import { ServiceCard3 } from "components/reuseable/service-cards";
// CUSTOM DATA
import { serviceList2 } from "data/service";

export default function Services8() {
  return (
    <div className="row gx-lg-8 gy-8 mt-5 mt-md-12 mt-lg-0 mb-15 align-items-center">
      <div className="col-lg-6 order-lg-2">
        <Tiles4 />
      </div>

      <div className="col-lg-6">
        <h2 className="display-4 mb-3">What We Do?</h2>
        <p className="lead fs-lg mb-8 pe-xxl-2">
          The full service we are offering is <span className="underline">specifically</span> designed to meet your
          business needs and projects.
        </p>

        <div className="row gx-xl-10 gy-6">
          {serviceList2.map(({ title, id, description,icon }) => (
            <div className="col-md-6 col-lg-12 col-xl-6" key={id}>
              <ServiceCard3
                title={title}
                description={description}
                Icon={<IconTextBox icon={icon} className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-5" />}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
