import {
  FiBarChart2,
  FiBriefcase,
  FiCreditCard,
  FiGlobe,
  FiGrid,
  FiLogOut,
  FiMenu,
  FiMessageSquare,
  FiRepeat,
  FiUser,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";
import "../styles/dashboard.css";

const menuItems = [
  { label: "Dashboard", icon: FiGrid, active: true },
  { label: "My Details", icon: FiCreditCard },
  { label: "My Shares", icon: FiBarChart2 },
  { label: "My Transaction History", icon: FiRepeat },
  { label: "My Portfolio", icon: FiBriefcase },
  { label: "My Pledge Share Detail", icon: FiUserCheck },
  { label: "My Bank Request", icon: FiMessageSquare },
  { label: "My ASBA", icon: FiGlobe },
  { label: "My Purchase Source", icon: FiUsers },
  { label: "My EDIS", icon: FiRepeat },
];

function Dashboard() {
  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <div className="sidebar-brand">
          <span className="brand-light">MERO</span>
          <span className="brand-red">SHARE</span>
        </div>

        <nav className="sidebar-nav" aria-label="Sidebar Navigation">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                type="button"
                className={`sidebar-item ${item.active ? "is-active" : ""}`}
              >
                <Icon className="sidebar-icon" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <p className="sidebar-footer">© 2026 CDS and Clearing Limited. All Rights Reserved</p>
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-topbar">
          <button type="button" className="topbar-icon-btn" aria-label="Menu">
            <FiMenu />
          </button>

          <div className="topbar-actions">
            <button type="button" className="topbar-icon-btn" aria-label="Logout">
              <FiLogOut />
            </button>
            <button type="button" className="topbar-icon-btn" aria-label="Profile">
              <FiUser />
            </button>
          </div>
        </header>

        <main className="dashboard-content" />
      </section>
    </div>
  );
}

export default Dashboard;
