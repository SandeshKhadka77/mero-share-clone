import { FiChevronDown, FiDownload, FiPrinter } from "react-icons/fi";
import DashboardLayout from "../layout/DashboardLayout";
import { sharesData } from "../data/sharesData";

function Shares() {
  return (
    <DashboardLayout>
      <div className="min-w-0">
        <div className="mb-4 flex items-start justify-between gap-4 max-[1100px]:flex-col">
          <div>
            <h1 className="text-[15px] font-bold text-[#1f232c]">My Shares</h1>
            <p className="mt-1 text-[11px] text-[#7c8189]">View your share holdings</p>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2.5 max-[1100px]:justify-start">
            <button type="button" className="inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md border border-[#d2d4db] bg-[#fbfbfc] px-3 text-xs font-semibold text-[#5a6270]">
              <FiDownload />
              <span>PDF</span>
            </button>
            <button type="button" className="inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md border border-[#d2d4db] bg-[#fbfbfc] px-3 text-xs font-semibold text-[#5a6270]">
              <FiDownload />
              <span>CSV</span>
            </button>
            <button type="button" className="inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md border border-[#d2d4db] bg-[#fbfbfc] px-3 text-xs font-semibold text-[#5a6270]">
              <FiPrinter />
              <span>Print</span>
            </button>
            <div className="flex items-center gap-2">
              <label className="text-xs font-semibold text-[#5f6571]" htmlFor="linked-account-shares">
                Linked Account
              </label>
              <div className="relative min-w-[150px]">
                <select id="linked-account-shares" className="h-7 w-full appearance-none rounded-md border border-[#d2d4db] bg-[#fbfbfc] px-2.5 pr-7 text-xs font-semibold text-[#5a6270]" defaultValue="self">
                  <option value="self">--Self--</option>
                </select>
                <FiChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-sm text-[#7d838f]" />
              </div>
            </div>
          </div>
        </div>

        <section className="overflow-hidden rounded-md border border-[#e3e4ea] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <div className="overflow-x-auto [scrollbar-width:auto]">
            <table className="w-full border-collapse text-[11px] max-[760px]:min-w-[800px]">
              <thead className="border-b border-[#eceef2] bg-[#f8f9fa]">
                <tr>
                  <th className="border-r border-[#eceef2] px-3.5 py-3 text-left font-semibold text-[#6b717b] last:border-r-0 max-[760px]:px-3 max-[760px]:py-2.5 max-[760px]:text-[10px]">#</th>
                  <th className="border-r border-[#eceef2] px-3.5 py-3 text-left font-semibold text-[#6b717b] last:border-r-0 max-[760px]:px-3 max-[760px]:py-2.5 max-[760px]:text-[10px]">Scrip</th>
                  <th className="border-r border-[#eceef2] px-3.5 py-3 text-left font-semibold text-[#6b717b] last:border-r-0 max-[760px]:px-3 max-[760px]:py-2.5 max-[760px]:text-[10px]">Current Balance</th>
                  <th className="border-r border-[#eceef2] px-3.5 py-3 text-left font-semibold text-[#6b717b] last:border-r-0 max-[760px]:px-3 max-[760px]:py-2.5 max-[760px]:text-[10px]">Pledge Balance</th>
                  <th className="border-r border-[#eceef2] px-3.5 py-3 text-left font-semibold text-[#6b717b] last:border-r-0 max-[760px]:px-3 max-[760px]:py-2.5 max-[760px]:text-[10px]">Lockin Balance</th>
                  <th className="border-r border-[#eceef2] px-3.5 py-3 text-left font-semibold text-[#6b717b] last:border-r-0 max-[760px]:px-3 max-[760px]:py-2.5 max-[760px]:text-[10px]">Freeze Balance</th>
                  <th className="border-r border-[#eceef2] px-3.5 py-3 text-left font-semibold text-[#6b717b] last:border-r-0 max-[760px]:px-3 max-[760px]:py-2.5 max-[760px]:text-[10px]">Free Balance</th>
                  <th className="border-r border-[#eceef2] px-3.5 py-3 text-left font-semibold text-[#6b717b] last:border-r-0 max-[760px]:px-3 max-[760px]:py-2.5 max-[760px]:text-[10px]">Demat Pending</th>
                  <th className="border-r border-[#eceef2] px-3.5 py-3 text-left font-semibold text-[#6b717b] last:border-r-0 max-[760px]:px-3 max-[760px]:py-2.5 max-[760px]:text-[10px]">Remarks</th>
                </tr>
              </thead>
              <tbody className="shares-table-body">
                {sharesData.map((share) => (
                    <tr key={share.id} className="border-b border-[#eceef2] transition-colors last:border-b-0 hover:bg-[#f8fafb]">
                    <td className="border-r border-[#eceef2] px-3.5 py-3 font-semibold text-[#676d79] last:border-r-0 max-[760px]:px-3 max-[760px]:py-2.5 max-[760px]:text-[10px]">{share.id}</td>
                    <td className="border-r border-[#eceef2] px-3.5 py-3 font-bold text-[#1f232c] last:border-r-0 max-[760px]:px-3 max-[760px]:py-2.5 max-[760px]:text-[10px]">{share.scrip}</td>
                    <td className="border-r border-[#eceef2] px-3.5 py-3 font-semibold text-[#676d79] last:border-r-0 max-[760px]:px-3 max-[760px]:py-2.5 max-[760px]:text-[10px]">{share.currentBalance}</td>
                    <td className="border-r border-[#eceef2] px-3.5 py-3 font-semibold text-[#676d79] last:border-r-0 max-[760px]:px-3 max-[760px]:py-2.5 max-[760px]:text-[10px]">{share.pledgeBalance}</td>
                    <td className="border-r border-[#eceef2] px-3.5 py-3 font-semibold text-[#676d79] last:border-r-0 max-[760px]:px-3 max-[760px]:py-2.5 max-[760px]:text-[10px]">{share.lockinBalance}</td>
                    <td className="border-r border-[#eceef2] px-3.5 py-3 font-semibold text-[#676d79] last:border-r-0 max-[760px]:px-3 max-[760px]:py-2.5 max-[760px]:text-[10px]">{share.freezeBalance}</td>
                    <td className="border-r border-[#eceef2] px-3.5 py-3 font-bold text-[#2d8659] last:border-r-0 max-[760px]:px-3 max-[760px]:py-2.5 max-[760px]:text-[10px]">{share.freeBalance}</td>
                    <td className="border-r border-[#eceef2] px-3.5 py-3 font-semibold text-[#676d79] last:border-r-0 max-[760px]:px-3 max-[760px]:py-2.5 max-[760px]:text-[10px]">{share.dematPending}</td>
                    <td className="max-w-[150px] whitespace-normal border-r border-[#eceef2] px-3.5 py-3 text-[10px] font-semibold text-[#5c6270] last:border-r-0 max-[760px]:px-3 max-[760px]:py-2.5 max-[760px]:text-[10px]">{share.remarks}</td>
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

