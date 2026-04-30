import { useState } from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { FiLogOut, FiMenu, FiUser } from "react-icons/fi";
import { dashboardMenuItems } from "../data/menuItems";
import "../styles/dashboard.css";

function DashboardLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="dashboard-shell">
      <aside className={`dashboard-sidebar ${mobileMenuOpen ? "is-open" : ""}`}>
        <div className="sidebar-brand">
          <span className="brand-light">MERO</span>
          <span className="brand-red">SHARE</span>
        </div>

        <nav className="sidebar-nav" aria-label="Sidebar Navigation">
          {dashboardMenuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `sidebar-item ${isActive ? "is-active" : ""}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon className="sidebar-icon" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <p className="sidebar-footer">© 2026 CDS and Clearing Limited. All Rights Reserved</p>
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-topbar">
          <button
            type="button"
            className="topbar-icon-btn"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen((value) => !value)}
          >
            <FiMenu />
          </button>

          <div className="topbar-right">
            <div className="topbar-actions">
              <button
                type="button"
                className="topbar-logout-btn"
                aria-label="Logout"
                onClick={handleLogout}
              >
                <FiLogOut />
                <span>Logout</span>
              </button>
              <button type="button" className="topbar-icon-btn" aria-label="Profile">
                <FiUser />
              </button>
            </div>

            <div className="topbar-user-meta">
              <span className="topbar-user-name">SANDESH KHADKA</span>
              <span className="topbar-user-role">MERO SHARE PROFILE</span>
            </div>
          </div>
        </header>

        <main className="dashboard-content">
          {children}
          <Outlet />
        </main>
      </section>

      {mobileMenuOpen ? (
        <button
          type="button"
          className="mobile-backdrop"
          aria-label="Close sidebar"
          onClick={() => setMobileMenuOpen(false)}
        />
      ) : null}
    </div>
  );
}

export default DashboardLayout;
