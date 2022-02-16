import PropTypes from "prop-types";

export default function Progress({ percent }) {
  const getPercents = (data) => {
    var width_inner = "";
    if ((data * 100).toFixed(2) > 100) {
      width_inner = `100%`;
    } else {
      if ((data * 100).toFixed(2) < 1) {
        width_inner = `1%`;
      } else {
        width_inner = `${(data * 100).toFixed(2)}%`;
      }
    }
    return width_inner;
  };

  const core = {
    height: "16px",
    borderRadius: "3px",
    fontSize: "10px",
    position: "relative",
    backgroundColor: "#ddd",
    width: "100%",
  };

  const base = {
    height: "16px",
    background: "linear-gradient(to right, #4cd6e6, #3183e0)",
    width: percent ? getPercents(percent) : "0%",
    position: "absolute",
    borderRadius: "3px",
  };

  const total = {
    height: "16px",
    position: "absolute",
    backgroundColor: "transparent",
    right: "8px",
    lineHeight: "16px",
    color: "#fff",
  };

  return (
    <div style={core}>
      <div className="base" style={base}></div>
      <div className="total" style={total}>
        {(percent * 100).toFixed(2)}%
      </div>
    </div>
  );
}

Progress.propTypes = {
  name: PropTypes.string,
  dayLeft: PropTypes.string,
  total: PropTypes.string,
  get: PropTypes.number,
  imgs: PropTypes.string,
};
