import React from "react";
import { LayoutDashboard, Users, UserRound, ArrowRight } from "lucide-react";

export default function AdminDashboard({ onLogout }) {
  return (
    <div className="min-h-screen bg-[#e9e9e9] font-sans text-[#12263b]">
      <div className="w-full min-h-screen flex justify-center">
        <div className="w-full max-w-[1440px] min-h-screen bg-[#f6f9fb] relative">
          
          {/* ================= HEADER ================= */}
          <header className="h-[85px] bg-[#053b5c] border-b-[3px] border-[#eb5405] flex items-center px-[58px] text-white">
            <div className="flex items-center w-[160px]">
              <span className="text-[#eb5405] text-[36px] font-bold leading-none">e</span>
              <span className="text-[30px] font-bold ml-1">माप</span>
            </div>

            <div>
              <h1 className="text-[20px] font-semibold">Legal Metrology Verification Platform</h1>
              <p className="text-[13px] text-[#cce0f0] mt-1">Admin Control Panel</p>
            </div>

            <div className="ml-auto flex items-center gap-6">
              <div className="text-[14px] font-semibold">English&nbsp;&nbsp;|&nbsp;&nbsp;हिन्दी</div>

              <button 
                onClick={onLogout}
                className="flex items-center gap-3 hover:opacity-80 transition cursor-pointer bg-transparent border-0 text-left text-white"
                title="Click to logout"
              >
                <div className="w-[46px] h-[46px] rounded-full border border-[#bfd6e5] bg-[#eb5405] flex items-center justify-center">
                  <span className="text-[14px] font-semibold">AD</span>
                </div>
                <div>
                  <p className="text-[14px] font-semibold flex items-center gap-2">
                    System Admin <span className="text-[11px] text-[#eb5405] font-normal">(Logout)</span>
                  </p>
                  <p className="text-[10px] text-[#c7deed]">Administrator</p>
                </div>
              </button>
            </div>
          </header>

          <div className="flex">
            {/* ================= SIDEBAR ================= */}
            <aside className="w-[230px] min-h-[calc(100vh-85px)] bg-[#053b5c] px-2 pt-[23px] flex flex-col flex-shrink-0">
              <nav className="space-y-[10px]">
                <button className="w-full h-[50px] flex items-center gap-4 px-5 rounded-lg text-left transition bg-[#0a4a73] text-white">
                  <LayoutDashboard size={20} />
                  <span className="text-[14px] font-semibold">Overview</span>
                </button>
                <button className="w-full h-[50px] flex items-center gap-4 px-5 rounded-lg text-left transition text-white hover:bg-[#0a4a73]/60">
                  <Users size={20} />
                  <span className="text-[14px]">Manage Users</span>
                </button>
              </nav>
            </aside>

            {/* ================= CONTENT ================= */}
            <main className="bg-white flex-1 min-w-0 p-[26px]">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-[29px] leading-9 font-bold">Admin Dashboard</h2>
                  <p className="text-[15px] text-[#5c738c] mt-1">Manage system configurations and users.</p>
                </div>
              </div>
              
              <div className="mt-10 border border-[#d6e3ed] rounded-[9px] p-8 text-center text-[#5c738c]">
                <p>Welcome to the admin panel. User management and reports will appear here.</p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}