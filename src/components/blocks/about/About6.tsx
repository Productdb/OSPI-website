import Megaphone from "icons/lineal/Megaphone";
import { Tiles5 } from "components/elements/tiles";
import ListColumn from "components/reuseable/ListColumn";
// CUSTOM DATA
import { aboutList2 } from "data/about";

export default function About6() {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
      <div className="col-lg-6 position-relative order-lg-2">
        <Tiles5 />
      </div>

      <div className="col-lg-6">
        <Megaphone className="icon-svg-md mb-4" />

        <h2 className="display-4 mb-3">Who Are We?</h2>

        <p className="lead fs-lg">
        We are a collaborative initiative dedicated to enhancing product identification standards. Our focus is on empowering businesses through clear, consistent, and accessible product data.
        </p>

        <p className="mb-6">
        With a commitment to innovation and collaboration, we aim to bridge gaps in product information, ensuring that companies can thrive in the digital landscape.
        </p>

        <ListColumn rowClass="gx-xl-8" list={aboutList2} />
      </div>
    </div>
  );
}
