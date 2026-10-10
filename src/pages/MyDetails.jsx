import { FiChevronDown, FiDownload, FiPrinter } from "react-icons/fi";
import DashboardLayout from "../layout/DashboardLayout";
import { detailsRows } from "../data/detailsData";

function MyDetails() {
  return (
    <DashboardLayout>
      <div className="min-w-0">
        <div className="mb-4 flex items-start justify-between gap-4 max-[1100px]:flex-col">
          <div>
            <h1 className="text-[15px] font-bold text-[#1f232c]">My Details</h1>
            <p className="mt-1 text-[11px] text-[#7c8189]">View your details</p>
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
              <label className="text-xs font-semibold text-[#5f6571]" htmlFor="linked-account">
                Linked Account
              </label>
              <div className="relative min-w-[150px]">
                <select id="linked-account" className="h-7 w-full appearance-none rounded-md border border-[#d2d4db] bg-[#fbfbfc] px-2.5 pr-7 text-xs font-semibold text-[#5a6270]" defaultValue="self">
                  <option value="self">--Self--</option>
                </select>
                <FiChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-sm text-[#7d838f]" />
              </div>
            </div>
          </div>
        </div>

        <section className="border border-[#e3e4ea] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <div className="grid">
            {detailsRows.map(([label, value, note]) => (
              <div className="grid min-h-[34px] grid-cols-[315px_1fr] border-b border-[#eceef2] last:border-b-0 max-[1100px]:grid-cols-[250px_1fr] max-[760px]:grid-cols-1" key={label}>
                <div className="flex items-center border-r border-[#eceef2] px-[18px] text-[11px] font-semibold text-[#6b717b] max-[760px]:min-h-[30px] max-[760px]:border-b max-[760px]:border-r-0">{label}</div>
                <div className="flex items-center justify-between gap-3 px-[18px] max-[760px]:min-h-[30px]">
                  <div className="text-[11px] font-semibold tracking-[0.1px] text-[#676d79]">{value}</div>
                  {note ? <div className="whitespace-nowrap text-[11px] font-semibold text-[#5c6270]">{note}</div> : null}
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
