export default function Header() {
  const brand = {
    fontSize: "25px",
    fontWeight: "600",
  };

  return (
    <nav
      className="navbar navbar-default justify-content-between"
      role="navigation"
    >
      <div className="d-flex align-middle">
        <img
          src="https://assets.kitabisa.cc/images/icons/meta/icons-512.png"
          alt="logo-kitabisa"
          className="rounded-pill img-thumbnail cover me-3"
          width={50}
          height={50}
        />
        <a style={brand} href="#" className="my-auto">
          Kitabisa
        </a>
      </div>

      <div className="ml-0">
        <button className="btn btn-sm btn-outline-primary">
          Sorting by Donation Goal
        </button>
      </div>
    </nav>
  );
}
