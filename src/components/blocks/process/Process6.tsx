import { Fragment } from "react";
// CUSTOM DATA
import { processList2 } from "data/process";

export default function Process6() {
  return (
    <Fragment>
      <h2 className="display-4 mb-3">How We Do It?</h2>
      <p className="lead fs-lg mb-8">
      we have designed a <span className="underline">clear and efficient structure </span>for product identification that meets the highest standards of global interoperability:
      </p>

      <div className="row gx-lg-8 gx-xl-12 gy-6 process-wrapper line">
        {processList2.map(({ no, title, subtitle }, i) => {
          const iconColor = i === 1 ? "btn-primary" : "btn-soft-primary";

          return (
            <div className="col-md-6 col-lg-3" key={no}>
              <span className={`icon btn btn-circle btn-lg pe-none mb-4 ${iconColor}`}>
                <span className="number">{no}</span>
              </span>

              <h4 className="mb-1">{title}</h4>
              <p>{subtitle}</p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}
