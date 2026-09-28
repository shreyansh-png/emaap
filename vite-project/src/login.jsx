import React from "react";
import { useAuth } from "./AuthContext";

const AshokaChakra = () => {
  const spokes = Array.from({ length: 24 });

  return (
    <svg
      viewBox="0 0 200 200"
      className="w-44 h-44 opacity-[0.12]"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Chakra */}
      <circle
        cx="100"
        cy="100"
        r="88"
        fill="none"
        stroke="#56748A"
        strokeWidth="8"
      />

      {/* Inner Chakra */}
      <circle
        cx="100"
        cy="100"
        r="4"
        fill="#56748A"
      />

      {/* 24 spokes */}
      {spokes.map((_, index) => {
        const angle = index * 15;
        const radians = (angle * Math.PI) / 180;

        const x2 = 100 + 82 * Math.cos(radians);
        const y2 = 100 + 82 * Math.sin(radians);

        return (
          <line
            key={index}
            x1="100"
            y1="100"
            x2={x2}
            y2={y2}
            stroke="#56748A"
            strokeWidth="2"
          />
        );
      })}
    </svg>
  );
};

const EmappLogo = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center leading-none">
        {/* e */}
        <span className="text-[48px] font-bold text-[#f45112]">
          e
        </span>

        {/* माप */}
        <span className="text-[42px] font-bold text-[#073b5c] tracking-tight">
          माप
        </span>
      </div>

      {/* Tricolour underline */}
      <div className="flex w-[135px] h-[4px] mt-1">
        <div className="w-1/3 bg-[#f45112]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#138a3d]" />
      </div>
    </div>
  );
};

const PortalButton = ({ type, children, subtitle, onClick }) => {
  const styles = {
    user: {
      bg: "bg-[#084a78]",
      icon: "⊡",
    },
    lmo: {
      bg: "bg-[#159447]",
      icon: "●",
    },
    admin: {
      bg: "bg-[#f45112]",
      icon: "▮",
    },
  };

  const current = styles[type];

  return (
    <button
      className={`
        ${current.bg}
        w-[198px]
        min-h-[48px]
        rounded-md
        text-white
        font-semibold
        shadow-md
        hover:shadow-lg
        hover:-translate-y-[2px]
        transition-all
        duration-200
        flex
        items-center
        justify-center
        gap-3
        px-4
      `}
      onClick={(e) => {
        console.log("clicked", children);
        if (onClick) onClick(e);
      }}
    >
      <span className="text-[15px]">
        {current.icon}
      </span>

      <div className="text-center leading-tight">
        <div className="text-[14px] font-semibold">
          {children}
        </div>

        {subtitle && (
          <div className="text-[13px] font-semibold">
            {subtitle}
          </div>
        )}
      </div>
    </button>
  );
};

const supabase = null; // Unused – kept for reference, auth is via AuthContext

function Login({ onSelectPortal }) {
  const { signIn } = useAuth();
  const [activeTab, setActiveTab] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // signIn calls Supabase auth, then GET /api/auth/me for role validation
      const { role } = await signIn(email, password, activeTab);
      onSelectPortal(role);
    } catch (err) {
      setError(err.message || "An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f8fa] flex flex-col">

      {/* ================= HEADER ================= */}
      <header className="px-4 md:px-10 pt-7">
        <div className="bg-[#063653] h-[70px] relative flex items-center justify-between px-4 md:px-11">

          {/* Orange line */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#f45112]" />

          {/* Government Logo / Text */}
          <div className="flex items-center gap-3">

            {/* Emblem placeholder */}
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/80 flex items-center justify-center">
              <div className="w-4 h-4 md:w-5 md:h-5 rounded-full border border-white/30" />
            </div>

            <div className="text-white leading-tight">
              <div className="font-bold text-[14px] md:text-[16px]">
                Government of India
              </div>

              <div className="text-[10px] md:text-[12px] font-semibold">
                भारत सरकार
              </div>
            </div>
          </div>

          {/* Language */}
          <div className="hidden md:flex items-center gap-3 text-white font-semibold text-[16px]">
            <button className="hover:text-orange-300 transition">English</button>
            <span className="opacity-70">|</span>
            <button className="hover:text-orange-300 transition">हिन्दी</button>
          </div>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="flex-1 px-4 md:px-10 py-11 flex justify-center items-center">

        <section className="
          relative
          w-full
          max-w-[900px]
          min-h-[493px]
          bg-white
          border
          border-[#dce4e9]
          rounded-2xl
          flex
          flex-col
          items-center
          justify-center
          overflow-hidden
          py-8
        ">

          {/* Ashoka Chakra background */}
          <div className="absolute right-[-2rem] top-[-2rem] md:right-8 md:top-8 pointer-events-none">
            <AshokaChakra />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center w-full max-w-md px-4">

            {/* e-माप Logo */}
            <EmappLogo />

            {/* Title */}
            <h1 className="mt-3 text-[18px] md:text-[21px] font-bold text-[#182b3d]">
              Legal Metrology Verification Platform
            </h1>

            <p className="mt-2 text-[12px] md:text-[14px] text-[#63778b] tracking-wide mb-6">
              Select your role to login
            </p>

            {/* Portal Tabs */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-5 w-full">
              <PortalButton
                type="user"
                onClick={() => { setActiveTab("user"); setError(""); }}
              >
                User
              </PortalButton>

              <PortalButton
                type="lmo"
                subtitle="(legal metrology officer)"
                onClick={() => { setActiveTab("lmo"); setError(""); }}
              >
                LMO
              </PortalButton>

              <PortalButton
                type="admin"
                onClick={() => { setActiveTab("admin"); setError(""); }}
              >
                Admin
              </PortalButton>
            </div>

            {/* Login Form */}
            {activeTab && (
              <form onSubmit={handleLogin} className="mt-8 w-full bg-[#f9fbff] p-6 rounded-lg border border-[#dce4e9] shadow-sm text-left animate-in fade-in slide-in-from-bottom-2 duration-300">
                <h2 className="text-[#063653] font-bold text-[16px] mb-4 uppercase tracking-wide border-b pb-2">
                  {activeTab} Login
                </h2>
                
                {error && (
                  <div className="mb-4 text-xs text-red-600 bg-red-50 p-2 rounded border border-red-200">
                    {error}
                  </div>
                )}

                <div className="mb-4">
                  <label className="block text-[#182b3d] text-xs font-semibold mb-1">Email ID</label>
                  <input 
                    type="email" 
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#084a78] focus:ring-1 focus:ring-[#084a78]"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-[#182b3d] text-xs font-semibold mb-1">Password</label>
                  <input 
                    type="password" 
                    required
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#084a78] focus:ring-1 focus:ring-[#084a78]"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-[#f45112] text-white font-semibold rounded py-2 text-sm hover:bg-[#e0450b] transition disabled:opacity-50"
                >
                  {loading ? "Authenticating..." : "Login to Portal"}
                </button>
              </form>
            )}

            {/* Bottom tagline */}
            <div className="mt-8 text-[11px] font-bold text-[#064578]">
              Secure • Accessible • Citizen focused
            </div>

          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="px-4 md:px-10 pb-0">
        <div className="h-[57px] bg-[#063653] flex items-center justify-center text-white text-[10px] md:text-[11px]">
          <span>e-MaapSure</span>
          <span className="mx-2 opacity-70">|</span>
          <span>Legal Metrology Verification Platform</span>
        </div>
      </footer>

    </div>
  );
}

export default Login;