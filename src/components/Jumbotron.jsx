export default function Jumbotron() {
  return (
    <div
      className="jumbotron-image text-white shadow p-5 position-relative"
      style={{
        height: "60vh",
        objectFit: "16/9",
      }}
    >
      <div className="position-relative h-100 d-flex justify-content-center align-items-center">
        <h1 className="display-4">Welcome to our store</h1>
      </div>
    </div>
  );
}
