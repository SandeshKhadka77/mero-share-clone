import { useState } from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { FiLogOut, FiMenu, FiUser } from "react-icons/fi";
import { dashboardMenuItems } from "../data/menuItems";

function DashboardLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  
//   const handleLogout
  return (
    <div className="grid min-h-screen grid-cols-1 bg-[#dfdfe3] font-sans min-[761px]:grid-cols-[250px_1fr]">
      <aside className={`fixed inset-y-0 left-0 z-30 flex w-62.5 -translate-x-full flex-col overflow-hidden bg-[#343c5f] text-[#f1f4ff] transition-transform duration-200 min-[761px]:relative min-[761px]:z-auto min-[761px]:translate-x-0 ${mobileMenuOpen ? "translate-x-0" : ""} after:absolute after:bottom-7 after:left-5.5 after:h-42.5 after:w-42.5 after:rounded-full after:border-[7px] after:border-white/8 after:content-['']`}>
        <div className="flex h-17.5 items-center justify-center gap-0.5 border-b border-white/5 text-[38px] font-bold">
          <span className="text-[#e8ecff]">MERO</span>
          <span className="text-[#d80303]">SHARE</span>
        </div>

        <nav aria-label="Sidebar Navigation">
          {dashboardMenuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) => {
                  return "flex min-h-8.5 w-full cursor-pointer items-center gap-3 px-3.5 pl-6 text-left text-[13px] font-semibold text-[#f7f8ff] no-underline hover:bg-black/[0.14] " +
                    (isActive ? "border-l-4 border-[#e40f1b] bg-[#222a47] pl-5" : "border-l-4 border-transparent");
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon className="text-sm" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <p className="relative z-10 mt-auto px-5.5 pb-3.5 text-[11px] font-semibold leading-[1.45]">© 2026 CDS and Clearing Limited. All Rights Reserved</p>
      </aside>

      <section className="grid min-w-0 grid-rows-[58px_1fr]">
        <header className="flex items-center justify-between border-b border-[#d9d9de] bg-linear-to-b from-[#f5f5f6] to-[#f0f0f2] px-4 shadow-[0_2px_7px_rgba(0,0,0,0.08)]">
          <button
            type="button"
            className="inline-flex h-7.5 w-7.5 cursor-pointer items-center justify-center border-none bg-transparent text-lg text-[#39404f]"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen((value) => !value)}
          >
            <FiMenu />
          </button>

          <div className="flex items-center gap-3.5">
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                className="inline-flex h-7.5 cursor-pointer items-center gap-1.5 rounded-md border border-[#cfd4df] bg-white px-2.5 text-xs font-semibold text-[#39404f] hover:bg-[#f5f7fb]"
                aria-label="Logout"
                onClick={handleLogout}
              >
                <FiLogOut />
                <span>Logout</span>
              </button>
              <button type="button" className="inline-flex h-7.5 w-7.5 cursor-pointer items-center justify-center border-none bg-transparent text-lg text-[#39404f]" aria-label="Profile">
                <FiUser />
              </button>
            </div>

            <div className="flex flex-col items-start leading-[1.1] text-[#7e8188]">
              <span className="text-xs font-bold text-[#40434a]">SANDESH KHADKA</span>
              <span className="text-[10px] font-bold">MERO SHARE PROFILE</span>
            </div>
          </div>
        </header>

        <main className="overflow-auto bg-[#dfdfe3] p-4 px-4.5 pb-4.5 max-[760px]:p-3">
          {children}
          <Outlet />
        </main>
      </section>

      {mobileMenuOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-20 block border-none bg-[rgba(18,22,37,0.35)] p-0 min-[761px]:hidden"
          aria-label="Close sidebar"
          onClick={() => setMobileMenuOpen(false)}
        />
      ) : null}
    </div>
  );
}

export default DashboardLayout;
