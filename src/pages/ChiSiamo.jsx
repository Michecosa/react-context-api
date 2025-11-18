import { Link } from "react-router-dom";
import image_1 from "../assets/AboutUs_1.jpg";

export default function ChiSiamo() {
  return (
    <div className="container mt-4">
      <div className="row g-4 g-lg-5 align-items-stretch">
        <div className="col-lg-7">
          <img
            src={image_1}
            alt="Shop with us"
            className="img-fluid mt-3 h-100 w-100 rounded-5"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-lg-5">
          <div style={{ fontFamily: "Funnel Display" }}>
            <h1
              style={{
                textTransform: "uppercase",
              }}
            >
              <span className="text-primary" style={{ fontSize: "1.5rem" }}>
                A bit
              </span>{" "}
              <br />
              about us
            </h1>
          </div>
          <div>
            <p className="my-4 text-muted" style={{ lineHeight: "1.8rem" }}>
              Our story is rooted in a passion for discovery and quality. We are
              not simply a store, but a true{" "}
              <strong>mosaic of opportunity</strong>, curated to meet your every
              need, from the household accessory you didn't know you wanted, to
              the cutting-edge tech gadget. We firmly believe that shopping
              should be an <strong>intuitive and rewarding experience</strong>.
              This is why our catalog is a dynamic and ever-evolving selection,
              designed to celebrate diversity, innovation, and value, ensuring
              that you can always find something special, regardless of your
              style or budget.
            </p>
          </div>

          <Link to="/">
            <button className="btn btn-primary fw-semibold px-4 py-3 mt-3">
              EXPLORE MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
