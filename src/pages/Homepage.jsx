import Jumbotron from "../components/Jumbotron";

export default function Homepage() {
  return (
    <>
      <Jumbotron />
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-12">
            <div className="card p-2 rounded-4 shadow text-center">
              <div className="card-body">
                <span className="gold-text">
                  <i className="bi bi-trophy-fill fs-1"></i>
                </span>
                <h2 className="fw-bolder">8 years at the top</h2>
                <p className="mb-0">
                  The leading choice for our valued clients
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 p-2 rounded-4 bg-dark text-white shadow">
              <div className="card-body text-center d-flex flex-column justify-content-center">
                <h2
                  className="rainbow-text fw-bolder"
                  style={{ fontSize: "2rem" }}
                >
                  25MLN+
                </h2>
                <p className="mb-0">
                  Users can't be wrong - <strong>choose Us!</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 p-2 rounded-4 shadow">
              <div className="card-body text-center d-flex flex-column justify-content-center">
                <h2
                  className="gold-text fw-bolder"
                  style={{ fontSize: "2rem" }}
                >
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                  <i className="bi bi-star-fill me-1"></i>
                </h2>
                <p className="mb-0">
                  <strong>9MLN+</strong> reviews on <strong>trustMe</strong>{" "}
                  market
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 p-2 rounded-4 shadow">
              <div className="card-body text-center d-flex flex-column justify-content-center">
                <h2
                  className="fw-bolder"
                  style={{ fontSize: "3rem", color: "#34c845ff" }}
                >
                  A96%
                </h2>
                <p className="mb-0">
                  <strong>Performance</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
