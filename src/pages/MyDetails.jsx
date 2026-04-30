import { FiChevronDown, FiDownload, FiPrinter } from "react-icons/fi";
import DashboardLayout from "../layout/DashboardLayout";
import { detailsRows } from "../data/detailsData";
import "../styles/details.css";

function MyDetails() {
  return (
    <DashboardLayout>
      <div className="details-page">
        <div className="details-head">
          <div>
            <h1 className="details-title">My Details</h1>
            <p className="details-subtitle">View your details</p>
          </div>

          <div className="details-toolbar">
            <button type="button" className="toolbar-btn">
              <FiDownload />
              <span>PDF</span>
            </button>
            <button type="button" className="toolbar-btn">
              <FiDownload />
              <span>CSV</span>
            </button>
            <button type="button" className="toolbar-btn">
              <FiPrinter />
              <span>Print</span>
            </button>
            <div className="toolbar-select-wrap">
              <label className="toolbar-select-label" htmlFor="linked-account">
                Linked Account
              </label>
              <div className="toolbar-select-shell">
                <select id="linked-account" className="toolbar-select" defaultValue="self">
                  <option value="self">--Self--</option>
                </select>
                <FiChevronDown className="toolbar-select-icon" />
              </div>
            </div>
          </div>
        </div>

        <section className="details-card">
          <div className="details-table">
            {detailsRows.map(([label, value, note]) => (
              <div className="details-row" key={label}>
                <div className="details-label">{label}</div>
                <div className="details-value-wrap">
                  <div className="details-value">{value}</div>
                  {note ? <div className="details-note">{note}</div> : null}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default MyDetails;
