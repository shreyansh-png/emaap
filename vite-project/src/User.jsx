import React from "react";
import {
  LayoutDashboard,
  Gauge,
  Plus,
  ClipboardList,
  FileCheck2,
  UserRound,
  Search,
  ArrowRight,
  CheckCircle2,
  Clock3,
  AlertCircle,
  Hourglass,
  FileText,
} from "lucide-react";

// ---------------------------
// Hardcoded data
// ---------------------------

const recentApplications = [
  {
    id: "APP-2025-0098",
    instrument: "Weighing Scale (100kg)",
    type: "Initial",
    status: "Submitted",
    appliedOn: "20 Sep 2025",
  },
  {
    id: "APP-2025-0097",
    instrument: "Pressure Gauge",
    type: "Re-verification",
    status: "Assigned",
    appliedOn: "18 Sep 2025",
  },
  {
    id: "APP-2025-0096",
    instrument: "Fuel Dispenser",
    type: "Initial",
    status: "Scheduled",
    appliedOn: "15 Sep 2025",
  },
];

const expiringInstruments = [
  {
    instrument: "Weighing Scale (100kg)",
    type: "Weighing Scale",
    expiry: "25 Sep 2025",
    days: "3 days",
    status: "Expiring Soon",
  },
  {
    instrument: "Pressure Gauge",
    type: "Pressure Gauge",
    expiry: "02 Oct 2025",
    days: "10 days",
    status: "Expiring Soon",
  },
  {
    instrument: "Flow Meter",
    type: "Flow Meter",
    expiry: "18 Oct 2025",
    days: "26 days",
    status: "Active",
  },
];

// ---------------------------
// Small reusable components
// ---------------------------

function SidebarItem({ icon: Icon, label, active = false }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-3 text-[12px] transition
        ${
          active
            ? "bg-[#0c527d] text-white rounded-r-lg"
            : "text-white/85 hover:bg-[#0c527d]/60"
        }`}
    >
      <Icon size={16} strokeWidth={1.8} />
      <span>{label}</span>
    </button>
  );
}

function StatCard({
  title,
  value,
  note,
  icon: Icon,
  color,
  noteColor,
}) {
  return (
    <div
      className={`bg-white border ${color} rounded-lg min-h-[90px] px-3 py-3 flex gap-3`}
    >
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
          <Icon size={18} className="text-white" />
        </div>
      </div>

      <div className="min-w-0">
        <p className="text-[11px] font-semibold text-[#17619a] truncate">
          {title}
        </p>

        <p className="text-[21px] leading-6 font-bold text-[#162b3d]">
          {value}
        </p>

        <p className={`text-[9px] mt-1 ${noteColor}`}>{note}</p>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Submitted: "text-green-500",
    Assigned: "text-yellow-500",
    Scheduled: "text-indigo-500",
    "Expiring Soon": "text-red-500",
    Active: "text-green-500",
  };

  return (
    <span className={`text-[9px] font-semibold ${styles[status] || ""}`}>
      {status}
    </span>
  );
}

function QuickAction({
  title,
  subtitle,
  icon: Icon,
  bg,
  textColor = "text-white",
}) {
  return (
    <button
      className={`${bg} ${textColor} h-[64px] rounded-md px-4 flex items-center justify-between flex-1 min-w-0 text-left hover:brightness-95 transition`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <Icon size={18} strokeWidth={1.8} className="flex-shrink-0" />

        <div className="min-w-0">
          <p className="text-[10px] font-semibold truncate">
            {title}
          </p>

          <p className="text-[8px] mt-1 opacity-90 truncate">
            {subtitle}
          </p>
        </div>
      </div>

      <ArrowRight size={16} className="flex-shrink-0" />
    </button>
  );
}

// ---------------------------
// Dashboard
// ---------------------------

export default function Dashboard({ onLogout }) {
  return (
    <div className="min-h-screen bg-[#eeeeee] font-sans text-[#13283a]">
      {/* Desktop canvas */}
      <div className="min-h-screen flex items-start justify-center px-4 py-5">
        <div className="w-full max-w-[1018px] min-h-[720px] bg-white shadow-sm flex overflow-hidden">
          {/* ================= SIDEBAR ================= */}
          <aside className="w-[138px] bg-[#083f5d] flex flex-col flex-shrink-0">
            {/* sidebar top blank area matching design */}
            <div className="h-[76px]" />

            <nav className="space-y-1">
              <SidebarItem
                active
                icon={LayoutDashboard}
                label="Dashboard"
              />

              <SidebarItem
                icon={Gauge}
                label="My Instruments"
              />

              <SidebarItem
                icon={Plus}
                label="Add Instrument"
              />

              <SidebarItem
                icon={ClipboardList}
                label="My Applications"
              />

              <SidebarItem
                icon={FileCheck2}
                label="My Certificates"
              />

              <SidebarItem
                icon={UserRound}
                label="Profile"
              />
            </nav>

            <div className="mt-auto px-2 pb-8 text-[7px] leading-3 text-white/80">
              Secure • Accessible • Citizen
              <br />
              focused
            </div>
          </aside>

          {/* ================= MAIN ================= */}
          <div className="flex-1 min-w-0 bg-white">
            {/* ================= HEADER ================= */}
            <header className="h-[60px] bg-[#043957] flex items-center justify-between px-4 text-white border-b-2 border-[#ee6a1a]">
              {/* Logo + title */}
              <div className="flex items-center gap-5">
                <div className="text-[25px] font-bold leading-none">
                  <span className="text-[#ef5a14]">e</span>
                  <span className="text-white"> माप</span>
                </div>

                <div>
                  <h1 className="text-[14px] font-semibold leading-4">
                    Legal Metrology Verification Platform
                  </h1>

                  <p className="text-[8px] text-white/70 mt-1">
                    Digital verification • Transparent certificate services
                  </p>
                </div>
              </div>

              {/* right */}
              <div className="flex items-center gap-5">
                <div className="hidden sm:flex gap-2 text-[9px]">
                  <span>English</span>
                  <span>|</span>
                  <span>हिन्दी</span>
                </div>

                <button
                  onClick={onLogout}
                  title="Click to logout"
                  className="flex items-center gap-2 hover:opacity-80 transition cursor-pointer bg-transparent border-0 text-left p-0 text-white"
                >
                  <div className="w-8 h-8 rounded-full border border-white/70 flex items-center justify-center text-[9px]">
                    SJ
                  </div>

                  <div className="leading-tight">
                    <p className="text-[9px] font-semibold">
                      USe01
                    </p>

                    <p className="text-[7px] text-white/60">
                      Logout
                    </p>
                  </div>
                </button>
              </div>
            </header>

            {/* ================= CONTENT ================= */}
            <main className="p-4">
              {/* welcome */}
              <div className="flex items-end justify-between mb-4">
                <div>
                  <h2 className="text-[22px] font-bold leading-6">
                    Welcome, Shubh Jain
                  </h2>

                  <p className="text-[11px] text-[#67809a] mt-1">
                    Manage your instruments, track verification status and
                    download certificates.
                  </p>
                </div>

                <div className="text-[9px] font-semibold">
                  Mon, 22 Sep 2025 &nbsp;|&nbsp; 14:30
                </div>
              </div>

              {/* ================= STAT CARDS ================= */}
              <section className="grid grid-cols-4 gap-3 mb-3">
                <StatCard
                  title="Total Instruments"
                  value="12"
                  note="↑ 2 since last month"
                  icon={Search}
                  color="border-blue-500"
                  noteColor="text-blue-500"
                />

                <StatCard
                  title="Verified Instruments"
                  value="7"
                  note="58% of total"
                  icon={CheckCircle2}
                  color="border-green-500"
                  noteColor="text-green-500"
                />

                <StatCard
                  title="Expiring Soon"
                  value="2"
                  note="Within 30 days"
                  icon={Clock3}
                  color="border-orange-500"
                  noteColor="text-orange-500"
                />

                <StatCard
                  title="Pending Applications"
                  value="3"
                  note="Requires your attention"
                  icon={Hourglass}
                  color="border-red-500"
                  noteColor="text-red-500"
                />
              </section>

              {/* ================= TABLE AREA ================= */}
              <section className="grid grid-cols-[1.1fr_0.9fr] gap-2 mb-4">
                {/* Recent Applications */}
                <div className="border border-[#dbe3e9] rounded-md bg-white overflow-hidden">
                  <div className="px-3 pt-2 pb-1 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-[12px]">
                        Recent Applications
                      </h3>
                    </div>

                    <button className="text-[8px] text-[#14639b] flex items-center gap-1">
                      View All
                      <ArrowRight size={10} />
                    </button>
                  </div>

                  <div className="px-3 pb-3">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="text-left text-[7px] text-[#49677f]">
                          <th className="py-2">Application ID</th>
                          <th>Instrument</th>
                          <th>Type</th>
                          <th>Status</th>
                          <th>Applied On</th>
                        </tr>
                      </thead>

                      <tbody>
                        {recentApplications.map((item) => (
                          <tr
                            key={item.id}
                            className="text-[8px] border-t border-transparent"
                          >
                            <td className="py-3">{item.id}</td>
                            <td>{item.instrument}</td>
                            <td>{item.type}</td>
                            <td>
                              <StatusBadge status={item.status} />
                            </td>
                            <td>{item.appliedOn}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Expiring Instruments */}
                <div className="border border-[#dbe3e9] rounded-md bg-white overflow-hidden">
                  <div className="px-3 pt-2 pb-1 flex items-center justify-between">
                    <h3 className="font-semibold text-[12px]">
                      Expiring Instruments
                    </h3>

                    <button className="text-[8px] text-[#14639b]">
                      View All
                    </button>
                  </div>

                  <div className="px-3 pb-3">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="text-left text-[7px] text-[#49677f]">
                          <th className="py-2">Instrument</th>
                          <th>Type</th>
                          <th>Expiry Date</th>
                          <th>Days Left</th>
                          <th>Status</th>
                        </tr>
                      </thead>

                      <tbody>
                        {expiringInstruments.map((item) => (
                          <tr
                            key={item.instrument}
                            className="text-[8px]"
                          >
                            <td className="py-3">
                              {item.instrument}
                            </td>

                            <td>{item.type}</td>

                            <td>{item.expiry}</td>

                            <td
                              className={`font-semibold ${
                                item.days === "26 days"
                                  ? "text-[#14293c]"
                                  : "text-red-500"
                              }`}
                            >
                              {item.days}
                            </td>

                            <td>
                              <StatusBadge status={item.status} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* ================= QUICK ACTIONS ================= */}
              <section className="border border-[#dbe3e9] rounded-md bg-white p-3">
                <div className="mb-2">
                  <h3 className="text-[12px] font-semibold">
                    Quick Actions
                  </h3>

                  <p className="text-[8px] text-[#67809a]">
                    Get started with common tasks
                  </p>
                </div>

                <div className="flex gap-3">
                  <QuickAction
                    title="Add Instrument"
                    subtitle="Register a new instrument"
                    icon={Plus}
                    bg="bg-[#09527c]"
                  />

                  <QuickAction
                    title="Apply for Verification"
                    subtitle="Submit verification request"
                    icon={FileCheck2}
                    bg="bg-[#15a344]"
                  />

                  <QuickAction
                    title="View Applications"
                    subtitle="Track your application status"
                    icon={FileText}
                    bg="bg-[#ef5a00]"
                  />

                  <QuickAction
                    title="My Certificates"
                    subtitle="Download your certificates"
                    icon={FileCheck2}
                    bg="bg-[#7146bd]"
                  />

                  <QuickAction
                    title="Profile"
                    subtitle="Update your information"
                    icon={UserRound}
                    bg="bg-[#eef6fd]"
                    textColor="text-[#155582]"
                  />
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}