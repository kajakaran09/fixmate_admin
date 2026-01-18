
import Link from "next/link";

export default function Login() {
  return (
    <>
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f1f4] dark:border-b-white/10 bg-white dark:bg-background-dark px-6 md:px-10 py-3 w-full">
        <div className="flex items-center gap-4 text-primary dark:text-white">
          <div className="size-8">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
              <path
                clipRule="evenodd"
                d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <h2 className="text-[#121317] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            FixMate Lanka
          </h2>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
          <span className="truncate">Support</span>
        </button>
      </header>

      {/* Main Content: Centered Login Card */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-[440px] bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-[#dcdee5] dark:border-white/10 p-8">
          {/* Branding & Headline */}
          <div className="flex flex-col items-center mb-8">
            <div className="size-12 mb-4 text-primary">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
                <path
                  clipRule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h1 className="text-[#121317] dark:text-white text-2xl font-bold leading-tight tracking-light text-center">
              Admin Portal
            </h1>
            <p className="text-[#656b86] dark:text-slate-400 text-sm font-normal leading-normal text-center mt-2">
              Please sign in to manage the service platform.
            </p>
          </div>

          {/* Login Form */}
          <form className="flex flex-col gap-5">
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-[#121317] dark:text-slate-200 text-sm font-medium leading-normal">
                Admin Email
              </label>
              <div className="relative">
                <input
                  className="form-input flex w-full rounded-lg text-[#121317] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dcdee5] dark:border-white/10 bg-white dark:bg-slate-800 focus:border-primary h-12 placeholder:text-[#656b86] p-[12px] text-base font-normal leading-normal transition-all"
                  placeholder="e.g., admin@fixmate.lk"
                  type="email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-[#121317] dark:text-slate-200 text-sm font-medium leading-normal">
                  Password
                </label>
                <a
                  className="text-primary dark:text-blue-400 text-xs font-semibold hover:underline"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="flex w-full items-stretch rounded-lg group">
                <input
                  className="form-input flex w-full min-w-0 flex-1 rounded-l-lg text-[#121317] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dcdee5] dark:border-white/10 bg-white dark:bg-slate-800 focus:border-primary h-12 placeholder:text-[#656b86] p-[12px] border-r-0 text-base font-normal leading-normal transition-all"
                  placeholder="••••••••"
                  type="password"
                />
                <button
                  className="text-[#656b86] flex border border-[#dcdee5] dark:border-white/10 bg-white dark:bg-slate-800 items-center justify-center px-3 rounded-r-lg border-l-0 hover:text-primary transition-colors"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    visibility
                  </span>
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2 px-1">
              <input
                className="w-4 h-4 rounded border-[#dcdee5] text-primary focus:ring-primary"
                id="remember"
                type="checkbox"
              />
              <label
                className="text-sm text-[#656b86] dark:text-slate-400"
                htmlFor="remember"
              >
                Keep me logged in for 30 days
              </label>
            </div>

            {/* Login Button */}
            <button
              className="flex w-full items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 mt-2"
              type="submit"
            >
              Login to Dashboard
            </button>
          </form>

          {/* Security Badge */}
          <div className="mt-8 pt-6 border-t border-[#f0f1f4] dark:border-white/5 flex items-center justify-center gap-2 text-[#656b86] dark:text-slate-500">
            <span className="material-symbols-outlined text-[18px]">lock</span>
            <span className="text-xs font-medium uppercase tracking-wider">
              End-to-End Encrypted Session
            </span>
          </div>
        </div>
      </main>

      {/* Footer Area */}
      <footer className="py-6 flex flex-col items-center gap-2">
        <p className="text-[#656b86] dark:text-slate-500 text-xs">
          © 2024 FixMate Lanka. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            className="text-[#656b86] dark:text-slate-500 text-xs hover:text-primary underline"
            href="#"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-[#656b86] dark:text-slate-500 text-xs hover:text-primary underline"
            href="#"
          >
            Terms of Service
          </Link>
        </div>
      </footer>
    </>
  );
}
