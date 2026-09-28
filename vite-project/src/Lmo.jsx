import React from "react";
import {
  LayoutDashboard,
  ClipboardList,
  CalendarDays,
  ShieldCheck,
  UserRound,
  Clock3,
  CheckCircle2,
  FileCheck2,
  ArrowRight,
  Plus,
} from "lucide-react";

const applications = [
  {
    id: "APP-2025-0098",
    instrument: "Weighing Scale (100kg)",
    owner: "Sharma Traders",
    location: "On-site",
    status: "Assigned",
  },
  {
    id: "APP-2025-0097",
    instrument: "Pressure Gauge",
    owner: "Apex Industries",
    location: "Lab",
    status: "Scheduled",
  },
  {
    id: "APP-2025-0096",
    instrument: "Fuel Dispenser",
    owner: "City Fuels",
    location: "On-site",
    status: "In Progress",
  },
];

const schedules = [
  {
    day: "Today",
    time: "10:00 AM",
    application: "APP-2025-0096",
    instrument: "Fuel Dispenser",
    owner: "City Fuels",
    type: "On-site",
  },
  {
    day: "Today",
    time: "02:30 PM",
    application: "APP-2025-0097",
    instrument: "Pressure Gauge",
    owner: "Apex Industries",
    type: "Lab",
  },
  {
    day: "23 Sep",
    time: "11:00 AM",
    application: "APP-2025-0095",
    instrument: "Balance (5kg)",
    owner: "Gupta Stores",
    type: "Lab",
  },
  {
    day: "24 Sep",
    time: "09:30 AM",
    application: "APP-2025-0094",
    instrument: "Flow Meter",
    owner: "Metro Pumps",
    type: "On-site",
  },
  {
    day: "25 Sep",
    time: "01:00 PM",
    application: "APP-2025-0093",
    instrument: "Electrical Meter",
    owner: "Nexon Energy",
    type: "Lab",
  },
];

const stats = [
  {
    title: "Assigned",
    value: "18",
    subtitle: "Active workload",
    icon: ClipboardList,
    iconBg: "bg-[#1470c2]",
    border: "border-[#0a4a73]",
    titleColor: "text-[#0a4a73]",
    subColor: "text-[#0a4a73]",
  },
  {
    title: "Pending Verification",
    value: "6",
    subtitle: "Needs action",
    icon: Clock3,
    iconBg: "bg-[#fa9e14]",
    border: "border-[#eb5405]",
    titleColor: "text-[#eb5405]",
    subColor: "text-[#eb5405]",
  },
  {
    title: "Completed Today",
    value: "4",
    subtitle: "↑ 1 vs yesterday",
    icon: CheckCircle2,
    iconBg: "bg-[#17a33b]",
    border: "border-[#17a33b]",
    titleColor: "text-[#17a33b]",
    subColor: "text-[#17a33b]",
  },
  {
    title: "Completed This Week",
    value: "21",
    subtitle: "This week",
    icon: CheckCircle2,
    iconBg: "bg-[#6e47ba]",
    border: "border-[#6e47ba]",
    titleColor: "text-[#6e47ba]",
    subColor: "text-[#6e47ba]",
  },
  {
    title: "Certificates Issued",
    value: "16",
    subtitle: "This week",
    icon: ShieldCheck,
    iconBg: "bg-[#0a4a73]",
    border: "border-[#0a4a73]",
    titleColor: "text-[#0a4a73]",
    subColor: "text-[#0a4a73]",
  },
];

function SidebarItem({ icon: Icon, label, active }) {
  return (
    <button
      className={`w-full h-[50px] flex items-center gap-4 px-5 rounded-lg text-left transition ${
        active
          ? "bg-[#0a4a73] text-white"
          : "text-white hover:bg-[#0a4a73]/60"
      }`}
    >
      <Icon size={20} strokeWidth={1.8} />

      <span
        className={`text-[14px] ${
          active ? "font-semibold" : "font-normal"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconBg,
  border,
  titleColor,
  subColor,
}) {
  return (
    <div
      className={`h-[128px] bg-white border ${border} rounded-[9px] p-[15px] flex items-start gap-3`}
    >
      <div
        className={`${iconBg} w-[56px] h-[56px] rounded-full flex items-center justify-center flex-shrink-0`}
      >
        <Icon size={24} className="text-white" strokeWidth={1.7} />
      </div>

      <div className="pt-[1px] min-w-0">
        <p className={`${titleColor} text-[13px] font-semibold whitespace-nowrap`}>
          {title}
        </p>

        <p className="text-[#12263b] text-[26px] font-bold leading-8 mt-1">
          {value}
        </p>

        <p className={`${subColor} text-[11px] mt-1`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function ActionCard({
  title,
  subtitle,
  icon: Icon,
  bg,
  textColor = "text-white",
  width = "w-[240px]",
}) {
  return (
    <button
      className={`${bg} ${textColor} ${width} h-[82px] rounded-lg px-[18px] flex items-center justify-between hover:brightness-95 transition`}
    >
      <div className="flex items-center gap-3 text-left">
        <Icon size={22} strokeWidth={1.7} />

        <div>
          <p className="text-[11px] font-semibold">
            {title}
          </p>

          <p className="text-[9px] opacity-90 mt-1">
            {subtitle}
          </p>
        </div>
      </div>

      <ArrowRight size={19} />
    </button>
  );
}

function StatusText({ status }) {
  const classes = {
    Assigned: "text-[#0a4a73]",
    Scheduled: "text-[#e59a00]",
    "In Progress": "text-[#6e47ba]",
  };

  return (
    <span className={`font-medium ${classes[status] || "text-gray-600"}`}>
      {status}
    </span>
  );
}

function ScheduleItem({ item }) {
  return (
    <div className="flex gap-4">
      <div className="w-[64px] h-[48px] rounded-[7px] border border-[#d6e3ed] bg-[#f0f7ff] flex flex-col items-center justify-center flex-shrink-0">
        <p className="text-[10px] font-semibold text-[#0a4a73]">
          {item.day}
        </p>

        <p className="text-[10px] font-semibold text-[#5c738c] mt-1">
          {item.time}
        </p>
      </div>

      <div className="pt-[1px]">
        <p className="text-[11px] font-semibold text-[#12263b]">
          {item.application}
          <span className="mx-1">•</span>
          {item.instrument}
        </p>

        <p className="text-[10px] text-[#5c738c] mt-2">
          {item.owner}
          <span className="mx-1">•</span>
          {item.type}
        </p>
      </div>
    </div>
  );
}

export default function OfficerDashboard({ onLogout }) {
  return (
    <div className="min-h-screen bg-[#e9e9e9] font-sans text-[#12263b]">
      {/* Desktop frame */}
      <div className="w-full min-h-screen flex justify-center">
        <div className="w-full max-w-[1440px] min-h-screen bg-[#f6f9fb] relative">
          
          {/* ================= HEADER ================= */}
          <header className="h-[85px] bg-[#053b5c] border-b-[3px] border-[#eb5405] flex items-center px-[58px] text-white">
            {/* logo */}
            <div className="flex items-center w-[160px]">
              <span className="text-[#eb5405] text-[36px] font-bold leading-none">
                e
              </span>

              <span className="text-[30px] font-bold ml-1">
                माप
              </span>
            </div>

            {/* title */}
            <div>
              <h1 className="text-[20px] font-semibold">
                Legal Metrology Verification Platform
              </h1>

              <p className="text-[13px] text-[#cce0f0] mt-1">
                Digital verification • Transparent certificate services
              </p>
            </div>

            {/* right side */}
            <div className="ml-auto flex items-center gap-6">
              <div className="text-[14px] font-semibold">
                English&nbsp;&nbsp;|&nbsp;&nbsp;हिन्दी
              </div>

              <button 
                onClick={onLogout}
                className="flex items-center gap-3 hover:opacity-80 transition cursor-pointer bg-transparent border-0 text-left text-white"
                title="Click to logout"
              >
                <div className="w-[46px] h-[46px] rounded-full border border-[#bfd6e5] bg-[#0a4a73] flex items-center justify-center">
                  <span className="text-[14px] font-semibold">
                    LM
                  </span>
                </div>

                <div>
                  <p className="text-[14px] font-semibold flex items-center gap-2">
                    Rajesh Kumar <span className="text-[11px] text-[#eb5405] font-normal">(Logout)</span>
                  </p>

                  <p className="text-[10px] text-[#c7deed]">
                    Legal Metrology Officer
                  </p>
                </div>
              </button>
            </div>
          </header>

          <div className="flex">
            {/* ================= SIDEBAR ================= */}
            <aside className="w-[230px] min-h-[calc(100vh-85px)] bg-[#053b5c] px-2 pt-[23px] flex flex-col flex-shrink-0">
              <nav className="space-y-[10px]">
                <SidebarItem
                  active
                  icon={LayoutDashboard}
                  label="Dashboard"
                />

                <SidebarItem
                  icon={ClipboardList}
                  label="Assigned Applications"
                />

                <SidebarItem
                  icon={CalendarDays}
                  label="My Schedule"
                />

                <SidebarItem
                  icon={ShieldCheck}
                  label="Issued Certificates"
                />

                <SidebarItem
                  icon={UserRound}
                  label="Profile"
                />
              </nav>

              <div className="mt-auto mb-7 px-2 text-[11px] text-[#c7deed] leading-4">
                ◊ Secure • Accessible • Citizen
                <br />
                focused
              </div>
            </aside>

            {/* ================= CONTENT ================= */}
            <main className="bg-white flex-1 min-w-0 p-[26px]">
              
              {/* Welcome */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-[29px] leading-9 font-bold">
                    Officer Dashboard
                  </h2>

                  <p className="text-[15px] text-[#5c738c] mt-1">
                    Review assigned applications, schedule verifications and
                    record inspection results.
                  </p>
                </div>

                <p className="text-[13px] font-semibold pt-1">
                  Mon, 22 Sep 2025&nbsp;&nbsp; | &nbsp;&nbsp;14:32
                </p>
              </div>

              {/* ================= STATS ================= */}
              <div className="flex gap-4 mt-[42px] overflow-hidden">
                {stats.map((stat) => (
                  <div key={stat.title} className="min-w-[230px] flex-1">
                    <StatCard {...stat} />
                  </div>
                ))}
              </div>

              {/* ================= TABLE + SCHEDULE ================= */}
              <div className="grid grid-cols-[700px_1fr] gap-6 mt-[18px]">
                
                {/* Assigned Applications */}
                <section className="h-[420px] border border-[#d6e3ed] rounded-[9px] bg-white p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-[17px] font-semibold">
                      Assigned Applications
                    </h3>

                    <button className="text-[12px] text-[#0a6ed1] font-semibold">
                      View All&nbsp; →
                    </button>
                  </div>

                  <table className="w-full mt-6 text-[11px]">
                    <thead>
                      <tr className="text-[#264766] font-semibold text-left">
                        <th className="pb-4">Application ID</th>
                        <th className="pb-4">Instrument</th>
                        <th className="pb-4">Owner</th>
                        <th className="pb-4">Location</th>
                        <th className="pb-4">Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {applications.map((app) => (
                        <tr key={app.id}>
                          <td className="py-4">{app.id}</td>
                          <td>{app.instrument}</td>
                          <td>{app.owner}</td>
                          <td>{app.location}</td>
                          <td>
                            <StatusText status={app.status} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <p className="text-[11px] text-[#5c738c] mt-[260px]">
                    Filters: &nbsp;Status • Owner • Instrument • Location Type
                  </p>
                </section>

                {/* Upcoming Schedule */}
                <section className="h-[420px] border border-[#d6e3ed] rounded-[9px] bg-white p-4 overflow-hidden">
                  <div className="flex justify-between">
                    <h3 className="text-[17px] font-semibold">
                      Upcoming Schedule
                    </h3>

                    <button className="text-[12px] text-[#0a6ed1] font-semibold">
                      My Schedule&nbsp; →
                    </button>
                  </div>

                  <div className="mt-6 space-y-4">
                    {schedules.map((item, index) => (
                      <ScheduleItem
                        key={`${item.application}-${index}`}
                        item={item}
                      />
                    ))}
                  </div>
                </section>
              </div>

              {/* ================= QUICK ACTIONS ================= */}
              <section className="border border-[#d6e3ed] rounded-[9px] p-4 mt-[20px]">
                <h3 className="text-[17px] font-semibold">
                  Quick Actions
                </h3>

                <p className="text-[11px] text-[#5c738c] mt-1">
                  Common officer actions
                </p>

                <div className="flex gap-4 mt-4">
                  <ActionCard
                    title="Schedule Verification"
                    subtitle="Set date & time"
                    icon={CalendarDays}
                    bg="bg-[#0a4a73]"
                  />

                  <ActionCard
                    title="Enter Verification Result"
                    subtitle="Pass / fail + observations"
                    icon={CheckCircle2}
                    bg="bg-[#17a33b]"
                  />

                  <ActionCard
                    title="Assigned Applications"
                    subtitle="Review your workload"
                    icon={ClipboardList}
                    bg="bg-[#eb5405]"
                  />

                  <ActionCard
                    title="Issued Certificates"
                    subtitle="View & download PDFs"
                    icon={ShieldCheck}
                    bg="bg-[#6e47ba]"
                    width="w-[204px]"
                  />

                  <ActionCard
                    title="Profile"
                    subtitle="Update your information"
                    icon={UserRound}
                    bg="bg-[#eef6fd]"
                    textColor="text-[#155582]"
                    width="w-[220px]"
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