import { useState, useMemo } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { transactionHistoryData } from "../data/transactionHistoryData";
import "../styles/transactionHistory.css";

function TransactionHistory() {
  const [filterType, setFilterType] = useState("scrip");
  const [filterValue, setFilterValue] = useState("");

  const filteredData = useMemo(() => {
    if (!filterValue.trim()) return transactionHistoryData;

    return transactionHistoryData.filter((transaction) => {
      if (filterType === "scrip") {
        return transaction.scrip.toLowerCase().includes(filterValue.toLowerCase());
      } else if (filterType === "date") {
        return transaction.transactionDate.includes(filterValue);
      }
      return true;
    });
  }, [filterType, filterValue]);

  const handleReset = () => {
    setFilterValue("");
  };

  return (
    <DashboardLayout>
      <div className="transaction-history-page">
        <div className="transaction-head">
          <div>
            <h1 className="transaction-title">Transaction History</h1>
            <p className="transaction-subtitle">View Transaction History</p>
          </div>

          <div className="transaction-linked-account">
            <label htmlFor="linked-account-transaction">Linked Account</label>
            <select id="linked-account-transaction" defaultValue="self">
              <option value="self">--Self--</option>
            </select>
          </div>
        </div>

        <section className="transaction-filter-card">
          <div className="filter-section">
            <h3 className="filter-title">Filter By</h3>

            <div className="filter-options">
              <label className="filter-radio">
                <input
                  type="radio"
                  name="filterType"
                  value="scrip"
                  checked={filterType === "scrip"}
                  onChange={(e) => {
                    setFilterType(e.target.value);
                    setFilterValue("");
                  }}
                />
                <span>Scrip</span>
              </label>

              <label className="filter-radio">
                <input
                  type="radio"
                  name="filterType"
                  value="date"
                  checked={filterType === "date"}
                  onChange={(e) => {
                    setFilterType(e.target.value);
                    setFilterValue("");
                  }}
                />
                <span>Date</span>
              </label>
            </div>

            <div className="filter-input-wrapper">
              <label className="filter-label">
                {filterType === "scrip" ? "Scrip" : "Date"}
              </label>
              <input
                type={filterType === "date" ? "date" : "text"}
                className="filter-input"
                placeholder=""
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              />

              <div className="filter-actions">
                <button type="button" className="search-btn" disabled={!filterValue.trim()}>
                  Search
                </button>
                <button type="button" className="reset-btn" onClick={handleReset}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="transaction-result-card">
          {filteredData.length === 0 ? (
            <div className="no-record-container">
              <div className="no-record-icon">!</div>
              <p className="no-record-text">No Record(s) Found</p>
            </div>
          ) : (
            <div className="transaction-table-wrapper">
              <table className="transaction-table">
                <thead className="transaction-table-head">
                  <tr>
                    <th className="transaction-th">#</th>
                    <th className="transaction-th">Scrip</th>
                    <th className="transaction-th">Transaction Date</th>
                    <th className="transaction-th">Credit Quantity</th>
                    <th className="transaction-th">Debit Quantity</th>
                    <th className="transaction-th">Balance After Transaction</th>
                    <th className="transaction-th">History Description</th>
                  </tr>
                </thead>
                <tbody className="transaction-table-body">
                  {filteredData.map((transaction) => (
                    <tr key={transaction.id} className="transaction-tr">
                      <td className="transaction-td">{transaction.id}</td>
                      <td className="transaction-td transaction-scrip">{transaction.scrip}</td>
                      <td className="transaction-td">{transaction.transactionDate}</td>
                      <td className="transaction-td">{transaction.creditQuantity}</td>
                      <td className="transaction-td">{transaction.debitQuantity}</td>
                      <td className="transaction-td">{transaction.balanceAfterTransaction}</td>
                      <td className="transaction-td transaction-description">{transaction.historyDescription}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </DashboardLayout>
  );
}

export default TransactionHistory;
