import {
  FiBarChart2,
  FiBriefcase,
  FiCreditCard,
  FiGlobe,
  FiGrid,
  FiMessageSquare,
  FiRepeat,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";

export const dashboardMenuItems = [
  { label: "Dashboard", icon: FiGrid, to: "/dashboard" },
  { label: "My Details", icon: FiCreditCard, to: "/details" },
  { label: "My Shares", icon: FiBarChart2, to: "/dashboard/my-shares" },
  { label: "My Transaction History", icon: FiRepeat, to: "/dashboard/transactions" },
  { label: "My Portfolio", icon: FiBriefcase, to: "/dashboard/portfolio" },
  { label: "My Pledge Share Detail", icon: FiUserCheck, to: "/dashboard/pledge-share-detail" },
  { label: "My Bank Request", icon: FiMessageSquare, to: "/dashboard/bank-request" },
  { label: "My ASBA", icon: FiGlobe, to: "/dashboard/asba" },
  { label: "My Purchase Source", icon: FiUsers, to: "/dashboard/purchase-source" },
  { label: "My EDIS", icon: FiRepeat, to: "/dashboard/edis" },
];
