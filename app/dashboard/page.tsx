
import Link from 'next/link';

export default function Dashboard() {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar Navigation */}
            <aside className="w-64 flex-shrink-0 bg-white dark:bg-slate-900 border-r border-[#dcdee5] dark:border-slate-800 hidden md:flex flex-col">
                <div className="p-6 flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-primary flex items-center justify-center text-white">
                        <span className="material-symbols-outlined">handyman</span>
                    </div>
                    <div>
                        <h1 className="text-[#121317] dark:text-white text-base font-bold leading-tight">
                            FixMate Lanka
                        </h1>
                        <p className="text-[#656b86] dark:text-slate-400 text-xs font-medium">
                            Admin Management
                        </p>
                    </div>
                </div>
                <nav className="flex-1 px-4 space-y-1">
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary text-white shadow-sm"
                    >
                        <span className="material-symbols-outlined">dashboard</span>
                        <span className="text-sm font-semibold">Dashboard</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#656b86] dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                        <span className="material-symbols-outlined">work</span>
                        <span className="text-sm font-semibold">Jobs</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#656b86] dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                        <span className="material-symbols-outlined">group</span>
                        <span className="text-sm font-semibold">Workers</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#656b86] dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                        <span className="material-symbols-outlined">person</span>
                        <span className="text-sm font-semibold">Customers</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#656b86] dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                        <span className="material-symbols-outlined">warning</span>
                        <span className="text-sm font-semibold">Disputes</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#656b86] dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                        <span className="material-symbols-outlined">settings</span>
                        <span className="text-sm font-semibold">Settings</span>
                    </Link>
                </nav>
                <div className="p-4 border-t border-[#dcdee5] dark:border-slate-800">
                    <div className="flex items-center gap-3 p-2">
                        <div
                            className="size-8 rounded-full bg-slate-200 bg-cover bg-center"
                            data-alt="Admin user avatar portrait"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGmZWIY_vG_gIM9ZsGo6qrk0BFtTIBI6DCdwCNqhBsB1MVFY50xOVxIlha-7rX4yUP6drrezgFjCH_k5j5ibr272NayPx1DaX5P98OcFT_g1PtCbFlnB8aQw980s6Dlc7eytazdz0zPiRhSbM1I7QvkGIzsaP8HwNsJeeSVIjHTb1ndb7Bd1mIyOSxURQlsrUCO4-EazkKXn-Muez7j_7uS6VQSaU6hiuHyBPCHl2qcJgc-xk5ib69gdUyd5LYJevD9Z7W7qLps5o')",
                            }}
                        ></div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-[#121317] dark:text-white truncate">
                                Admin User
                            </p>
                            <p className="text-xs text-[#656b86] dark:text-slate-400 truncate">
                                admin@fixmate.lk
                            </p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Top Navigation Bar */}
                <header className="h-16 bg-white dark:bg-slate-900 border-b border-[#dcdee5] dark:border-slate-800 flex items-center justify-between px-8 shrink-0">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="relative w-full max-w-md">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#656b86]">
                                search
                            </span>
                            <input
                                className="w-full bg-[#f0f1f4] dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary transition-all placeholder:text-[#656b86]"
                                placeholder="Search jobs, workers or transactions..."
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-[#656b86] dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg relative">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                        </button>
                        <button className="p-2 text-[#656b86] dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">
                            <span className="material-symbols-outlined">chat_bubble</span>
                        </button>
                        <div className="h-8 w-px bg-[#dcdee5] dark:border-slate-800 mx-2"></div>
                        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-primary/90 transition-all">
                            Logout
                        </button>
                    </div>
                </header>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8 space-y-8">
                    {/* Stats Summary Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Total Jobs Card */}
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-[#dcdee5] dark:border-slate-800 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                                    <span className="material-symbols-outlined">assignment</span>
                                </div>
                                <span className="text-[#07883d] text-xs font-bold bg-[#07883d]/10 px-2 py-1 rounded-full">
                                    +12.5%
                                </span>
                            </div>
                            <p className="text-[#656b86] dark:text-slate-400 text-sm font-medium">
                                Total Jobs
                            </p>
                            <h3 className="text-2xl font-bold text-[#121317] dark:text-white mt-1">
                                1,284
                            </h3>
                        </div>
                        {/* Active Workers Card */}
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-[#dcdee5] dark:border-slate-800 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                                    <span className="material-symbols-outlined">badge</span>
                                </div>
                                <span className="text-[#07883d] text-xs font-bold bg-[#07883d]/10 px-2 py-1 rounded-full">
                                    +5.2%
                                </span>
                            </div>
                            <p className="text-[#656b86] dark:text-slate-400 text-sm font-medium">
                                Active Workers
                            </p>
                            <h3 className="text-2xl font-bold text-[#121317] dark:text-white mt-1">
                                456
                            </h3>
                        </div>
                        {/* Pending Confirmations Card */}
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border-l-4 border-l-[#FACC15] border border-[#dcdee5] dark:border-slate-800 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-yellow-100 text-yellow-700 rounded-lg">
                                    <span className="material-symbols-outlined">
                                        pending_actions
                                    </span>
                                </div>
                                <span className="text-yellow-700 text-xs font-bold bg-yellow-100 px-2 py-1 rounded-full">
                                    Action Needed
                                </span>
                            </div>
                            <p className="text-[#656b86] dark:text-slate-400 text-sm font-medium">
                                Pending Confirmations
                            </p>
                            <h3 className="text-2xl font-bold text-[#121317] dark:text-white mt-1">
                                23
                            </h3>
                        </div>
                        {/* Open Disputes Card */}
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border-l-4 border-l-[#EF4444] border border-[#dcdee5] dark:border-slate-800 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                                    <span className="material-symbols-outlined">report</span>
                                </div>
                                <span className="text-red-600 text-xs font-bold bg-red-100 px-2 py-1 rounded-full">
                                    Urgent
                                </span>
                            </div>
                            <p className="text-[#656b86] dark:text-slate-400 text-sm font-medium">
                                Open Disputes
                            </p>
                            <h3 className="text-2xl font-bold text-[#121317] dark:text-white mt-1">
                                7
                            </h3>
                        </div>
                    </div>

                    {/* Main Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Job Volume Chart */}
                        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-[#dcdee5] dark:border-slate-800 shadow-sm p-6">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <h2 className="text-lg font-bold text-[#121317] dark:text-white">
                                        Job Volume Over Time
                                    </h2>
                                    <p className="text-sm text-[#656b86] dark:text-slate-400">
                                        Activity performance for the last 7 days
                                    </p>
                                </div>
                                <select className="bg-[#f0f1f4] dark:bg-slate-800 border-none rounded-lg text-sm font-medium py-1.5 pl-3 pr-8">
                                    <option>Last 7 Days</option>
                                    <option>Last 30 Days</option>
                                </select>
                            </div>
                            <div className="relative h-64 w-full">
                                {/* Visual placeholder for chart */}
                                <svg
                                    className="w-full h-full"
                                    preserveAspectRatio="none"
                                    viewBox="0 0 100 40"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <defs>
                                        <linearGradient
                                            id="chartGradient"
                                            x1="0%"
                                            x2="0%"
                                            y1="0%"
                                            y2="100%"
                                        >
                                            <stop
                                                offset="0%"
                                                stopColor="#1c38a6"
                                                stopOpacity="0.2"
                                            ></stop>
                                            <stop
                                                offset="100%"
                                                stopColor="#1c38a6"
                                                stopOpacity="0"
                                            ></stop>
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M0,35 Q10,30 20,32 T40,15 T60,25 T80,10 T100,5 L100,40 L0,40 Z"
                                        fill="url(#chartGradient)"
                                    ></path>
                                    <path
                                        d="M0,35 Q10,30 20,32 T40,15 T60,25 T80,10 T100,5"
                                        fill="none"
                                        stroke="#1c38a6"
                                        strokeWidth="2"
                                    ></path>
                                </svg>
                                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 pt-4">
                                    <span className="text-[10px] font-bold text-[#656b86] uppercase">
                                        Mon
                                    </span>
                                    <span className="text-[10px] font-bold text-[#656b86] uppercase">
                                        Tue
                                    </span>
                                    <span className="text-[10px] font-bold text-[#656b86] uppercase">
                                        Wed
                                    </span>
                                    <span className="text-[10px] font-bold text-[#656b86] uppercase">
                                        Thu
                                    </span>
                                    <span className="text-[10px] font-bold text-[#656b86] uppercase">
                                        Fri
                                    </span>
                                    <span className="text-[10px] font-bold text-[#656b86] uppercase">
                                        Sat
                                    </span>
                                    <span className="text-[10px] font-bold text-[#656b86] uppercase">
                                        Sun
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Recent Activity List */}
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-[#dcdee5] dark:border-slate-800 shadow-sm p-6 flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-bold text-[#121317] dark:text-white">
                                    Recent Activity
                                </h2>
                                <button className="text-primary text-sm font-bold hover:underline">
                                    View All
                                </button>
                            </div>
                            <div className="space-y-6 flex-1 overflow-y-auto">
                                {/* Activity Item 1 */}
                                <div className="flex gap-4">
                                    <div className="size-10 rounded-full flex-shrink-0 bg-slate-100 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary">
                                            add_task
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#121317] dark:text-white">
                                            <span className="font-bold">New Job Posted</span> by Nimal
                                            Perera
                                        </p>
                                        <p className="text-xs text-[#656b86] dark:text-slate-400 mt-1">
                                            2 mins ago • Plumbing Service
                                        </p>
                                    </div>
                                </div>
                                {/* Activity Item 2 */}
                                <div className="flex gap-4">
                                    <div className="size-10 rounded-full flex-shrink-0 bg-green-50 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-green-600">
                                            how_to_reg
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#121317] dark:text-white">
                                            <span className="font-bold">Worker Verified</span>: Sunil
                                            J.
                                        </p>
                                        <p className="text-xs text-[#656b86] dark:text-slate-400 mt-1">
                                            45 mins ago • ID Documentation
                                        </p>
                                    </div>
                                </div>
                                {/* Activity Item 3 */}
                                <div className="flex gap-4">
                                    <div className="size-10 rounded-full flex-shrink-0 bg-yellow-50 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-yellow-600">
                                            priority_high
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#121317] dark:text-white">
                                            <span className="font-bold">New Dispute</span> filed by
                                            Kasun T.
                                        </p>
                                        <p className="text-xs text-[#656b86] dark:text-slate-400 mt-1">
                                            2 hours ago • Payment Issue
                                        </p>
                                    </div>
                                </div>
                                {/* Activity Item 4 */}
                                <div className="flex gap-4">
                                    <div className="size-10 rounded-full flex-shrink-0 bg-blue-50 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-blue-600">
                                            check_circle
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#121317] dark:text-white">
                                            <span className="font-bold">Job Completed</span> in
                                            Colombo 07
                                        </p>
                                        <p className="text-xs text-[#656b86] dark:text-slate-400 mt-1">
                                            4 hours ago • Electrical Repair
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
