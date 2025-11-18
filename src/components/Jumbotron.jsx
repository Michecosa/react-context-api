import { Link } from "react-router-dom";

export default function Jumbotron() {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container">
        <div
          className="container-fluid py-5"
          style={{ fontFamily: "Funnel Display" }}
        >
          <h1 className="display-5 fw-bold text-uppercase">
            Il gatto spendaccione
          </h1>
          <p
            className="col-md-8 fs-6 text-secondary mt-2 mb-5"
            style={{ lineHeight: "1.8rem" }}
          >
            Our story is rooted in a passion for discovery and quality. We are
            not simply a store, but a true mosaic of opportunity, curated to
            meet your every need, from the household accessory you didn't know
            you wanted, to the cutting-edge tech gadget. We firmly believe that
            shopping should be an intuitive and rewarding experience. This is
            why our catalog is a dynamic and ever-evolving selection, designed
            to celebrate diversity, innovation, and value, ensuring that you can
            always find something special, regardless of your style or budget.
          </p>
          <Link to="/chisiamo">
            <button className="btn btn-primary btn-lg" type="button">
              About Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
