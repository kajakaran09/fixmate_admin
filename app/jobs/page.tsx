
import Link from 'next/link';

export default function JobRequests() {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar Navigation */}
            <aside className="w-64 flex-shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col">
                <div className="p-6">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary size-10 rounded-lg flex items-center justify-center text-white">
                            <span className="material-symbols-outlined">build</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-primary text-base font-bold leading-none">
                                FixMate Lanka
                            </h1>
                            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">
                                Admin Portal
                            </p>
                        </div>
                    </div>
                </div>
                <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <span className="material-symbols-outlined">dashboard</span>
                        <span className="text-sm font-medium">Dashboard</span>
                    </Link>
                    <Link
                        href="/jobs"
                        className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg transition-colors"
                    >
                        <span
                            className="material-symbols-outlined"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            work
                        </span>
                        <span className="text-sm font-semibold">Job Requests</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <span className="material-symbols-outlined">engineering</span>
                        <span className="text-sm font-medium">Service Providers</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <span className="material-symbols-outlined">group</span>
                        <span className="text-sm font-medium">Customers</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <span className="material-symbols-outlined">payments</span>
                        <span className="text-sm font-medium">Payments</span>
                    </Link>
                    <div className="pt-4 pb-2">
                        <p className="px-3 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                            Configuration
                        </p>
                    </div>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <span className="material-symbols-outlined">settings</span>
                        <span className="text-sm font-medium">Settings</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <span className="material-symbols-outlined">help</span>
                        <span className="text-sm font-medium">Support</span>
                    </Link>
                </nav>
                <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                        <div
                            className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center"
                            data-alt="Admin user profile picture"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnwmCcUUO8h7CLG5hGiqpvjzlRitU4MmiU25nRAXl3CP8vZqHcF1etyxqmvfD1xsn8IbfKmU37lfVVsuz01ombOwZubMbMcIEdLqqXPzPO08HtzcuhDQu5ux091ADLDgXlJ68AdUXSflOaOo_AfNDxBUPYcYhLJnsCqUnki8uswEHjR6Uge75GKHSBrd9pLz38djepjChJuk9vbYRZcjJdTogPUrKYrDYAPolf1osevlcE38x6xtEa1rrjVQtZGux_u93rEvmb5SM')",
                            }}
                        ></div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold truncate">Anura Jayasuriya</p>
                            <p className="text-xs text-slate-500 truncate">Super Admin</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Top Navbar */}
                <header className="h-16 flex items-center justify-between px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0">
                    <div className="flex items-center flex-1 gap-4">
                        <div className="max-w-md w-full relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl leading-none">
                                search
                            </span>
                            <input
                                className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
                                placeholder="Search Job ID, Customer, or Phone..."
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="size-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 relative">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                        </button>
                        <button className="size-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
                            <span className="material-symbols-outlined">translate</span>
                        </button>
                    </div>
                </header>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-8">
                    <div className="max-w-7xl mx-auto">
                        {/* Page Heading */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                            <div>
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                                    Job Requests
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                                    Manage and track 1,248 total service requests from your
                                    customers.
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="inline-flex items-center justify-center px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                                    <span className="material-symbols-outlined mr-2 text-lg">
                                        download
                                    </span>
                                    Export CSV
                                </button>
                                <button className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 shadow-sm transition-colors">
                                    <span className="material-symbols-outlined mr-2 text-lg">
                                        add
                                    </span>
                                    New Request
                                </button>
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="flex flex-wrap gap-3 mb-6 items-center">
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:border-primary/50 transition-colors group">
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    Status:
                                </span>
                                <span className="text-sm font-medium">All Statuses</span>
                                <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-primary transition-colors">
                                    expand_more
                                </span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:border-primary/50 transition-colors group">
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    Date Range:
                                </span>
                                <span className="text-sm font-medium">Last 30 Days</span>
                                <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-primary transition-colors">
                                    calendar_today
                                </span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:border-primary/50 transition-colors group">
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    City:
                                </span>
                                <span className="text-sm font-medium">All Cities</span>
                                <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-primary transition-colors">
                                    location_on
                                </span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:border-primary/50 transition-colors group">
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                    Job Type:
                                </span>
                                <span className="text-sm font-medium">All Services</span>
                                <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-primary transition-colors">
                                    filter_list
                                </span>
                            </div>
                            <div className="ml-auto flex items-center gap-2">
                                <span className="text-xs text-slate-400 italic">
                                    Showing 10 of 1,248 jobs
                                </span>
                            </div>
                        </div>

                        {/* Data Table */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                            <div className="overflow-x-auto @container">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                                Job ID
                                            </th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                                Customer
                                            </th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                                Job Type
                                            </th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                                City
                                            </th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                                Status
                                            </th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                                Date
                                            </th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                        {/* Row 1 */}
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm font-bold text-primary">
                                                    #JOB-8842
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-semibold">
                                                        Aruni Perera
                                                    </span>
                                                    <span className="text-xs text-slate-400 font-medium">
                                                        +94 77 123 4567
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 uppercase tracking-wide">
                                                    Plumbing
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm text-slate-600 dark:text-slate-400">
                                                    Colombo
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 uppercase tracking-wide">
                                                    Pending
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                                                Oct 24, 2023
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                                <button className="text-primary hover:text-primary/80 text-sm font-bold tracking-tight">
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                        {/* Row 2 */}
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm font-bold text-primary">
                                                    #JOB-8841
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-semibold">
                                                        Kasun Silva
                                                    </span>
                                                    <span className="text-xs text-slate-400 font-medium">
                                                        +94 71 888 2211
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 uppercase tracking-wide">
                                                    Electrical
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm text-slate-600 dark:text-slate-400">
                                                    Kandy
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 uppercase tracking-wide">
                                                    Assigned
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                                                Oct 24, 2023
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                                <button className="text-primary hover:text-primary/80 text-sm font-bold tracking-tight">
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                        {/* Row 3 */}
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm font-bold text-primary">
                                                    #JOB-8840
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-semibold">
                                                        Nimal Siriwardana
                                                    </span>
                                                    <span className="text-xs text-slate-400 font-medium">
                                                        +94 11 555 4433
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 uppercase tracking-wide">
                                                    HVAC
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm text-slate-600 dark:text-slate-400">
                                                    Galle
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 uppercase tracking-wide">
                                                    Completed
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                                                Oct 23, 2023
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                                <button className="text-primary hover:text-primary/80 text-sm font-bold tracking-tight">
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                        {/* Row 4 */}
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm font-bold text-primary">
                                                    #JOB-8839
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-semibold">
                                                        Saman Kumara
                                                    </span>
                                                    <span className="text-xs text-slate-400 font-medium">
                                                        +94 77 999 1111
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 uppercase tracking-wide">
                                                    Carpentry
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm text-slate-600 dark:text-slate-400">
                                                    Colombo
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-bold bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 uppercase tracking-wide">
                                                    In Progress
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                                                Oct 23, 2023
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                                <button className="text-primary hover:text-primary/80 text-sm font-bold tracking-tight">
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                        {/* Row 5 */}
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm font-bold text-primary">
                                                    #JOB-8838
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-semibold">
                                                        Dilini Fernando
                                                    </span>
                                                    <span className="text-xs text-slate-400 font-medium">
                                                        +94 72 444 8877
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400 uppercase tracking-wide">
                                                    Plumbing
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="text-sm text-slate-600 dark:text-slate-400">
                                                    Negombo
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-bold bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 uppercase tracking-wide">
                                                    Cancelled
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                                                Oct 22, 2023
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                                <button className="text-primary hover:text-primary/80 text-sm font-bold tracking-tight">
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Table Footer / Pagination */}
                            <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 gap-4">
                                <p className="text-xs font-medium text-slate-500">
                                    Showing{" "}
                                    <span className="text-slate-900 dark:text-white">1</span> to{" "}
                                    <span className="text-slate-900 dark:text-white">5</span> of{" "}
                                    <span className="text-slate-900 dark:text-white">1,248</span>{" "}
                                    entries
                                </p>
                                <div className="flex items-center gap-1">
                                    <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed">
                                        <span className="material-symbols-outlined text-lg leading-none">
                                            chevron_left
                                        </span>
                                    </button>
                                    <button className="size-8 flex items-center justify-center rounded bg-primary text-white text-xs font-bold">
                                        1
                                    </button>
                                    <button className="size-8 flex items-center justify-center rounded border border-transparent hover:border-slate-200 dark:hover:border-slate-700 text-xs font-bold">
                                        2
                                    </button>
                                    <button className="size-8 flex items-center justify-center rounded border border-transparent hover:border-slate-200 dark:hover:border-slate-700 text-xs font-bold">
                                        3
                                    </button>
                                    <span className="px-1 text-slate-400">...</span>
                                    <button className="size-8 flex items-center justify-center rounded border border-transparent hover:border-slate-200 dark:hover:border-slate-700 text-xs font-bold">
                                        125
                                    </button>
                                    <button className="size-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                                        <span className="material-symbols-outlined text-lg leading-none">
                                            chevron_right
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
