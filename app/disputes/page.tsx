
import Link from 'next/link';

export default function Disputes() {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar Navigation */}
            <aside className="w-64 flex-shrink-0 bg-white dark:bg-gray-900 border-r border-[#dcdee5] dark:border-gray-800 flex flex-col">
                <div className="p-6 flex flex-col gap-6">
                    <div className="flex gap-3 items-center">
                        <div className="bg-primary rounded-lg p-1.5 text-white">
                            <span className="material-symbols-outlined">build_circle</span>
                        </div>
                        <div>
                            <h1 className="text-sm font-bold leading-tight">FixMate Lanka</h1>
                            <p className="text-[#656b86] dark:text-gray-400 text-xs">
                                Admin Management
                            </p>
                        </div>
                    </div>
                    <nav className="flex flex-col gap-1">
                        <Link
                            href="/dashboard"
                            className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#656b86] hover:bg-[#f0f1f4] dark:hover:bg-gray-800 transition-colors"
                        >
                            <span className="material-symbols-outlined">dashboard</span>
                            <span className="text-sm font-medium">Dashboard</span>
                        </Link>
                        <Link
                            href="/jobs"
                            className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#656b86] hover:bg-[#f0f1f4] dark:hover:bg-gray-800 transition-colors"
                        >
                            <span className="material-symbols-outlined">work</span>
                            <span className="text-sm font-medium">Jobs</span>
                        </Link>
                        <Link
                            href="/workers"
                            className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#656b86] hover:bg-[#f0f1f4] dark:hover:bg-gray-800 transition-colors"
                        >
                            <span className="material-symbols-outlined">group</span>
                            <span className="text-sm font-medium">Users</span>
                        </Link>
                        <Link
                            href="/disputes"
                            className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary dark:bg-primary/20"
                        >
                            <span
                                className="material-symbols-outlined text-primary"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                                report_problem
                            </span>
                            <span className="text-sm font-bold">Disputes</span>
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#656b86] hover:bg-[#f0f1f4] dark:hover:bg-gray-800 transition-colors"
                        >
                            <span className="material-symbols-outlined">payments</span>
                            <span className="text-sm font-medium">Payments</span>
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#656b86] hover:bg-[#f0f1f4] dark:hover:bg-gray-800 transition-colors"
                        >
                            <span className="material-symbols-outlined">settings</span>
                            <span className="text-sm font-medium">Settings</span>
                        </Link>
                    </nav>
                </div>
                <div className="mt-auto p-4 border-t border-[#dcdee5] dark:border-gray-800">
                    <div className="flex items-center gap-3">
                        <div
                            className="size-10 rounded-full bg-cover bg-center"
                            data-alt="Admin user avatar portrait"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB8nKNsP4B8Q-EsuRge5rOP7qfaAV24EmcHeybs3UbE9ny5MB_1xe1iobyd02YshmNdo6Edp3TRe7FFbDyF7uAVN2p80UB_OKPGQ-oVuiEWt9QCeaCbEquwev00h0Eeu449eUJLyRmmaXfdeAfLU-EFLBQr7Ojevut7d45hqRtTN61N0az_GwQNWmf5T7LekylPH-tIo75-hlEblOeKOsED2-MbSwjc0iH-5YuXlao7pSSoA-kss-htDtYzMcbRU8Ydx4UP0b_jiiY')",
                            }}
                        ></div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold truncate">Admin Sarah</p>
                            <p className="text-xs text-[#656b86] truncate">Lead Moderator</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0">
                {/* Top Navbar */}
                <header className="h-16 border-b border-[#dcdee5] dark:border-gray-800 bg-white dark:bg-gray-900 flex items-center justify-between px-8 z-10">
                    <div className="flex items-center gap-4">
                        <h2 className="text-lg font-bold">Dispute Resolution Center</h2>
                        <div className="h-4 w-px bg-gray-300 dark:bg-gray-700"></div>
                        <span className="text-sm text-[#656b86] dark:text-gray-400">
                            Moderation Queue
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative w-64">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                search
                            </span>
                            <input
                                className="w-full pl-10 pr-4 py-2 bg-background-light dark:bg-gray-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary transition-all"
                                placeholder="Search disputes..."
                                type="text"
                            />
                        </div>
                        <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">help</span>
                        </button>
                    </div>
                </header>

                {/* Page Layout (Split View) */}
                <div className="flex-1 flex overflow-hidden">
                    {/* Dispute List Sidebar */}
                    <div className="w-80 border-r border-[#dcdee5] dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col">
                        <div className="p-4 border-b border-[#dcdee5] dark:border-gray-800 bg-background-light/50 dark:bg-gray-800/50">
                            <div className="flex gap-2">
                                <button className="flex-1 py-2 text-xs font-bold border-b-2 border-primary text-primary">
                                    All (12)
                                </button>
                                <button className="flex-1 py-2 text-xs font-bold text-[#656b86] hover:text-primary">
                                    Urgent (4)
                                </button>
                                <button className="flex-1 py-2 text-xs font-bold text-[#656b86] hover:text-primary">
                                    Closed
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {/* List Item: Active */}
                            <div className="p-4 bg-primary/5 dark:bg-primary/10 border-l-4 border-primary cursor-pointer border-b border-[#dcdee5] dark:border-gray-800">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-bold text-primary">#JOB-8842</span>
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/10 text-red-500 border border-red-500/20">
                                        CRITICAL
                                    </span>
                                </div>
                                <p className="text-sm font-bold truncate">
                                    Water leakage after repair
                                </p>
                                <p className="text-xs text-[#656b86] mt-1">
                                    Plumbing Service • 2h ago
                                </p>
                            </div>
                            {/* List Item */}
                            <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer border-b border-[#dcdee5] dark:border-gray-800 transition-colors">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-bold text-[#656b86]">
                                        #JOB-9102
                                    </span>
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-600 border border-orange-200">
                                        HIGH
                                    </span>
                                </div>
                                <p className="text-sm font-semibold truncate text-[#121317] dark:text-gray-200">
                                    Worker did not show up
                                </p>
                                <p className="text-xs text-[#656b86] mt-1">Electrical • 5h ago</p>
                            </div>
                            {/* List Item */}
                            <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer border-b border-[#dcdee5] dark:border-gray-800 transition-colors">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-bold text-[#656b86]">
                                        #JOB-8765
                                    </span>
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-600 border border-blue-200">
                                        MEDIUM
                                    </span>
                                </div>
                                <p className="text-sm font-semibold truncate text-[#121317] dark:text-gray-200">
                                    Overcharging beyond quote
                                </p>
                                <p className="text-xs text-[#656b86] mt-1">Cleaning • 1d ago</p>
                            </div>
                            {/* More list items... */}
                        </div>
                    </div>

                    {/* Dispute Detail Workspace */}
                    <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-8">
                        <div className="max-w-5xl mx-auto space-y-6">
                            {/* Header & Actions */}
                            <div className="flex flex-wrap justify-between items-center gap-4">
                                <div>
                                    <nav className="flex gap-2 text-xs text-[#656b86] mb-2 uppercase font-bold tracking-wider">
                                        <span>Disputes</span>
                                        <span>/</span>
                                        <span className="text-primary">#JOB-8842</span>
                                    </nav>
                                    <h1 className="text-3xl font-black tracking-tight">
                                        Water leakage after repair
                                    </h1>
                                    <p className="text-[#656b86] dark:text-gray-400 mt-1">
                                        Reported by Customer{" "}
                                        <span className="font-bold text-[#121317] dark:text-white">
                                            Liam Perera
                                        </span>{" "}
                                        on Oct 24, 2023
                                    </p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-gray-800 border border-[#dcdee5] dark:border-gray-700 rounded-lg text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                        <span className="material-symbols-outlined text-sm">mail</span>
                                        Contact Both
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-800 transition-colors shadow-lg shadow-primary/20">
                                        <span className="material-symbols-outlined text-sm">
                                            history_edu
                                        </span>
                                        Internal Note
                                    </button>
                                </div>
                            </div>

                            {/* Info Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-[#dcdee5] dark:border-gray-800 flex items-center gap-4">
                                    <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                        <span className="material-symbols-outlined">payments</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#656b86] uppercase font-bold">
                                            Total Amount
                                        </p>
                                        <p className="text-lg font-black">LKR 4,500.00</p>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-[#dcdee5] dark:border-gray-800 flex items-center gap-4">
                                    <div className="size-12 rounded-lg bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center text-orange-600">
                                        <span className="material-symbols-outlined">plumbing</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#656b86] uppercase font-bold">
                                            Service Category
                                        </p>
                                        <p className="text-lg font-black">Plumbing</p>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-[#dcdee5] dark:border-gray-800 flex items-center gap-4">
                                    <div className="size-12 rounded-lg bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                                        <span className="material-symbols-outlined">
                                            verified_user
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#656b86] uppercase font-bold">
                                            Worker Status
                                        </p>
                                        <p className="text-lg font-black">Gold Partner</p>
                                    </div>
                                </div>
                            </div>

                            {/* Statement Comparison */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Customer Side */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">
                                            person
                                        </span>
                                        <h3 className="font-bold text-lg uppercase tracking-wide text-sm">
                                            Customer Statement
                                        </h3>
                                    </div>
                                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-l-4 border-primary border border-[#dcdee5] dark:border-gray-800 relative shadow-sm">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div
                                                className="size-10 rounded-full bg-cover bg-center"
                                                data-alt="Customer Liam Perera avatar"
                                                style={{
                                                    backgroundImage:
                                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSkF1PCn4A1EvMyJ0xPL_cfUyuBoRlJzDFwWzKkl-41vILLMMOpDoA6xQzEGGIm4GEAqzHOyl-uS_aGyUrJGOsKUgx80frCt-wtvkRGg-dfFHuiK6qdgj_porz-GbdZkqqORNI4aJDQC4Q-GnxzsyEz5BgT9pOOIz6PeIYSwqmwzblRIWXW17vtM-Emkk4zn6LtHsHjg4MA-Rd621vhJQqAc9RlmiVtYkm82N-1Yo2fxKO02OpNP1CccfaN8DBjeUJ4METcdaynAo')",
                                                }}
                                            ></div>
                                            <div>
                                                <p className="text-sm font-bold">Liam Perera</p>
                                                <p className="text-xs text-[#656b86]">
                                                    User since 2021 • 4.8 Rating
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 italic">
                                            "The worker came to fix a minor leak under the sink. After he
                                            left, the entire pipe burst and flooded my kitchen. I tried to
                                            call him back immediately but he didn't answer. I had to call
                                            emergency services. This is unacceptable!"
                                        </p>
                                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                                            <p className="text-xs font-bold text-[#656b86] mb-2 uppercase">
                                                Evidence Attachments
                                            </p>
                                            <div className="flex gap-2">
                                                <div
                                                    className="size-16 rounded-lg bg-gray-200 bg-cover bg-center"
                                                    data-alt="Flooded kitchen floor photo"
                                                    style={{
                                                        backgroundImage:
                                                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCs4MitMn6wbWTKbwWjW9MNy07W01HFEP9O7D9WweFC-iKoXDr5CzbpecKkzysYVL5cYGJjl4ZdtGeSOvJKD8bIsT8V3Gf8mvvTy4F-ghc1bjN_aVMIHkxbjyfycmZKrNlc-Iuq7L_upE_gF4ZO36XLBZdRpFvsPx3JzfXLkj-4Lqg4PJvb4ReuabF19LQwPOQ4XsPtcHtLXdAr7SdoDkPHBBsI3KmPL4a2bIfYpmSB8zaNNiVdX45F4U-mASzX-0yALn5zuIPBU7o')",
                                                    }}
                                                ></div>
                                                <div
                                                    className="size-16 rounded-lg bg-gray-200 bg-cover bg-center"
                                                    data-alt="Broken pipe detail photo"
                                                    style={{
                                                        backgroundImage:
                                                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9S99axFyBoY3_wnl2h6Gbrv1QfKKON7OHVh42oGMbqQWXm9KI8z-pLapYkZM_x0CedyRnuG4mmypMPOdWsmOtqCksmoAt74dKchepdIIFv0u9ilnM51nEOBJF-O3ffUsbZBdTq-PonT_R0_guoOhMYUZiLjU1-CmXo8lETQ17qR8vlkwY6Nu5wByy1C6-KCA9HV3mDMMtCypNCnE6hdo8uW_t64BQQSjdHkr6dM5tyyh5qTGR_KHx3zKQn36S4bwFh0lvBwlN8BA')",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Worker Side */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-orange-500">
                                            engineering
                                        </span>
                                        <h3 className="font-bold text-lg uppercase tracking-wide text-sm">
                                            Worker Statement
                                        </h3>
                                    </div>
                                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-l-4 border-orange-500 border border-[#dcdee5] dark:border-gray-800 relative shadow-sm">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div
                                                className="size-10 rounded-full bg-cover bg-center"
                                                data-alt="Worker Kasun avatar"
                                                style={{
                                                    backgroundImage:
                                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDF_JUpSZXViLF2lY-VAb2VfkoQbgLo0Al9vewCuzpei_T8nCvjFHqxBnxLm_ngv5TpK_tIHKKj1ZPDS17qgCL-fKD9eI6wuEnKNfE8oC2tSo1xU0iv9n9AEDj-bBTdcPnOLRWixUOvMnVIsmD5a2iYuGuLuyOYrewZ6FHk-5y9JOYAZ1xq3mX2anLJ3wMlFxLMljjK1xuKhOZdwdbHX4OxFIki26sKJZ8nBihPBjYCPKmVAZcg_YBN_4BqixnfsONjfmUYjs20Uto')",
                                                }}
                                            ></div>
                                            <div>
                                                <p className="text-sm font-bold">Kasun Jayasena</p>
                                                <p className="text-xs text-[#656b86]">
                                                    156 Jobs Completed • 4.9 Rating
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 italic">
                                            "I fixed the requested leak. I noticed the other pipes were very
                                            old and corroded, I warned the customer they needed replacement,
                                            but he said he only wants to pay for the small patch. I have my
                                            phone off during prayer time. I did the job as requested."
                                        </p>
                                        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                                            <p className="text-xs font-bold text-[#656b86] mb-2 uppercase">
                                                Evidence Attachments
                                            </p>
                                            <div className="flex gap-2">
                                                <div
                                                    className="size-16 rounded-lg bg-gray-200 bg-cover bg-center"
                                                    data-alt="Job completion photo showing the repair"
                                                    style={{
                                                        backgroundImage:
                                                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAxinY2IfciOQV6cKyHvErSfrSyhAeknDXr1OFOIps3KFyW3tBpoarZbtx9VnWd7_NakUZdyl8YI-cwwHWUr8s0fNM4JZxcAi0SsOCp3ExaA-10-MkwJuLiCvdkDr7-a76htxAt_ptOJ8Jij7PWzCyr2Y2143RW9QgozOPYvYzBhBasiuGlRbLncB948VzqbVRzzmOyhM7Z2cLwboXtiPZ3chQQTX527gNW8tM8G9aZAUyRL-8zK_9x9wD-z89TjAQxNcCiPzZ2zB0')",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Resolution Workspace */}
                            <div className="bg-white dark:bg-gray-900 rounded-xl border border-[#dcdee5] dark:border-gray-800 overflow-hidden shadow-sm">
                                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-b border-[#dcdee5] dark:border-gray-800 flex justify-between items-center">
                                    <h3 className="font-bold">Final Resolution</h3>
                                    <span className="text-xs font-bold text-gray-500 uppercase">
                                        Awaiting Action
                                    </span>
                                </div>
                                <div className="p-8">
                                    <div className="flex flex-col gap-6">
                                        <label className="block">
                                            <span className="text-sm font-bold text-[#121317] dark:text-gray-200 mb-2 block">
                                                Resolution Summary Note (Internal)
                                            </span>
                                            <textarea
                                                className="w-full rounded-lg border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm focus:ring-primary focus:border-primary"
                                                placeholder="Enter the final verdict and reasoning..."
                                                rows={3}
                                            ></textarea>
                                        </label>
                                        <div className="flex flex-wrap gap-4 items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                                            <div className="flex gap-3">
                                                <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
                                                    <span className="material-symbols-outlined text-green-500">
                                                        payments
                                                    </span>
                                                    Issue Full Refund
                                                </button>
                                                <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
                                                    <span className="material-symbols-outlined text-primary">
                                                        person_search
                                                    </span>
                                                    Reassign Worker
                                                </button>
                                            </div>
                                            <button className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg text-sm font-black hover:bg-red-700 transition-colors shadow-lg shadow-alert/20">
                                                <span className="material-symbols-outlined">gavel</span>
                                                BAN WORKER
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Historical Timeline */}
                            <div className="space-y-4 pb-12">
                                <h3 className="font-bold text-sm text-[#656b86] uppercase tracking-wider">
                                    Dispute Timeline
                                </h3>
                                <div className="relative border-l-2 border-[#dcdee5] dark:border-gray-800 ml-4 pl-8 space-y-8">
                                    <div className="relative">
                                        <div className="absolute -left-[41px] top-0 size-4 rounded-full bg-red-500 ring-4 ring-white dark:ring-background-dark"></div>
                                        <p className="text-xs font-bold text-gray-400">
                                            TODAY, 10:24 AM
                                        </p>
                                        <p className="text-sm font-bold">Dispute Flagged by System</p>
                                        <p className="text-xs text-[#656b86]">
                                            High urgency detected due to "Water Leakage" keywords.
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[41px] top-0 size-4 rounded-full bg-primary ring-4 ring-white dark:ring-background-dark"></div>
                                        <p className="text-xs font-bold text-gray-400">
                                            TODAY, 11:15 AM
                                        </p>
                                        <p className="text-sm font-bold">
                                            Customer Submitted Evidence
                                        </p>
                                        <p className="text-xs text-[#656b86]">
                                            2 photos and 1 voice recording attached.
                                        </p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-[41px] top-0 size-4 rounded-full bg-gray-300 dark:bg-gray-700 ring-4 ring-white dark:ring-background-dark"></div>
                                        <p className="text-xs font-bold text-gray-400">
                                            TODAY, 11:45 AM
                                        </p>
                                        <p className="text-sm font-bold">Worker Response Received</p>
                                        <p className="text-xs text-[#656b86]">
                                            Claimed customer refused recommended extra repairs.
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
