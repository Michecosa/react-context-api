export default function ChiSiamo() {
  return (
    <div className="container mt-4">
      <div className="row g-3">
        <div className="col-md-5">
          <p>Images section</p>
        </div>
        <div className="col-md-7">
          <div style={{ fontFamily: "Funnel Display" }}>
            <h1
              style={{
                textTransform: "uppercase",
              }}
            >
              <span style={{ color: "#F54927", fontSize: "1.5rem" }}>
                A bit
              </span>{" "}
              <br />
              about us
            </h1>
          </div>
          <div>
            <p className="mt-4 text-muted" style={{ lineHeight: "1.8rem" }}>
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
        </div>
      </div>
    </div>
  );
}
