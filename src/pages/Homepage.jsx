import Jumbotron from "../components/Jumbotron";

export default function Homepage() {
  return (
    <>
      <Jumbotron />
      <div className="container my-5">
        <div class="card p-4 rounded-5 shadow">
          <div class="card-body text-center">
            <span className="gold-text">
              <i className="bi bi-trophy-fill fs-1"></i>
            </span>
            <h2>8 years at the top</h2>
            <p className="mb-0">TThe leading choice for our valued clients</p>
          </div>
        </div>
      </div>
    </>
  );
}
