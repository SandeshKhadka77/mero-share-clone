import { FiChevronDown, FiDownload, FiPrinter } from "react-icons/fi";
import DashboardLayout from "../layout/DashboardLayout";
import { sharesData } from "../data/sharesData";
import "../styles/shares.css";

function Shares() {
  return (
    <DashboardLayout>
      <div className="shares-page">
        <div className="shares-head">
          <div>
            <h1 className="shares-title">My Shares</h1>
            <p className="shares-subtitle">View your share holdings</p>
          </div>

          <div className="shares-toolbar">
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
              <label className="toolbar-select-label" htmlFor="linked-account-shares">
                Linked Account
              </label>
              <div className="toolbar-select-shell">
                <select id="linked-account-shares" className="toolbar-select" defaultValue="self">
                  <option value="self">--Self--</option>
                </select>
                <FiChevronDown className="toolbar-select-icon" />
              </div>
            </div>
          </div>
        </div>

        <section className="shares-card">
          <div className="shares-table-wrapper">
            <table className="shares-table">
              <thead className="shares-table-head">
                <tr>
                  <th className="shares-th">#</th>
                  <th className="shares-th">Scrip</th>
                  <th className="shares-th">Current Balance</th>
                  <th className="shares-th">Pledge Balance</th>
                  <th className="shares-th">Lockin Balance</th>
                  <th className="shares-th">Freeze Balance</th>
                  <th className="shares-th">Free Balance</th>
                  <th className="shares-th">Demat Pending</th>
                  <th className="shares-th">Remarks</th>
                </tr>
              </thead>
              <tbody className="shares-table-body">
                {sharesData.map((share) => (
                  <tr key={share.id} className="shares-tr">
                    <td className="shares-td">{share.id}</td>
                    <td className="shares-td shares-scrip">{share.scrip}</td>
                    <td className="shares-td">{share.currentBalance}</td>
                    <td className="shares-td">{share.pledgeBalance}</td>
                    <td className="shares-td">{share.lockinBalance}</td>
                    <td className="shares-td">{share.freezeBalance}</td>
                    <td className="shares-td shares-free-balance">{share.freeBalance}</td>
                    <td className="shares-td">{share.dematPending}</td>
                    <td className="shares-td shares-remarks">{share.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}

export default Shares;

