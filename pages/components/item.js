import PropTypes from "prop-types";
import util from "../utils";
import Progress from "./progress";

export default function Items({ name, dayLeft, total, get, imgs }) {
  const core = {
    boxShadow: "0px 1px 10px 1px rgba(0,0,0,0.15)",
    border: "none",
    borderRadius: "5px",
    fontSize: "12px",
  };
  const content = { padding: "5px 10px" };

  const _imgs = {
    height: "180px",
    objectFit: "cover",
    marginBottom: "6px",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
  };

  const title = {
    height: "50px",
  };

  return (
    <div className="card hover" style={core}>
      <img style={_imgs} src={imgs} alt="kitabisa-campaign-item" />
      <div style={content}>
        <div className="row g-0">
          <h6 style={title}>{name}</h6>
        </div>
        <div className="row g-0">
          <div className="col-md-12 mb-2">
            <Progress percent={total} />
          </div>
        </div>
        <div className="row g-0">
          <div className="col-md-7 mb-2">
            <div>Terkumpul</div>
            <div>{util.actions.formatRupiah(get ? get : 0, "Rp. ")}</div>
          </div>
          <div className="col-md-5 mb-2 ">
            <div className="text-md-end">Sisa hari</div>
            <div className="text-md-end">{dayLeft}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Items.propTypes = {
  name: PropTypes.string,
  dayLeft: PropTypes.number,
  total: PropTypes.number,
  get: PropTypes.number,
  imgs: PropTypes.string,
};
