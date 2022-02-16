export default function Footer() {
  const styled = {
    float: "left",
    padding: "15px",
    width: "100%",
    borderTop: "1px solid #ccc",
    fontSize: "12px",
  };

  const copy = {
    fontSize: "12px",
    fontWeight: "bold",
  };

  return (
    <div style={styled} className="container">
      &copy; 2022, Jakarta, Indonesia
      <div style={copy}>kitabisa.com</div>
    </div>
  );
}
