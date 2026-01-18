
import Link from 'next/link';

export default function Workers() {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar Navigation */}
            <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark flex flex-col">
                <div className="p-6 flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-primary flex items-center justify-center text-white">
                        <span className="material-symbols-outlined">
                            home_repair_service
                        </span>
                    </div>
                    <div>
                        <h1 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                            FixMate Lanka
                        </h1>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                            Admin Console
                        </p>
                    </div>
                </div>
                <nav className="flex-1 px-4 py-4 space-y-1">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <span className="material-symbols-outlined">dashboard</span>
                        <span className="text-sm font-medium">Dashboard</span>
                    </Link>
                    <Link
                        href="/workers"
                        className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg transition-colors"
                    >
                        <span className="material-symbols-outlined filled-icon">
                            engineering
                        </span>
                        <span className="text-sm font-semibold">Worker Management</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <span className="material-symbols-outlined">calendar_today</span>
                        <span className="text-sm font-medium">Bookings</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <span className="material-symbols-outlined">
                            account_balance_wallet
                        </span>
                        <span className="text-sm font-medium">Finance</span>
                    </Link>
                    <div className="pt-4 pb-2 px-3">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                            Platform
                        </p>
                    </div>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <span className="material-symbols-outlined">reviews</span>
                        <span className="text-sm font-medium">Reviews</span>
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <span className="material-symbols-outlined">settings</span>
                        <span className="text-sm font-medium">Settings</span>
                    </Link>
                </nav>
                <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3 p-2">
                        <div
                            className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center"
                            data-alt="Admin user profile picture"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqJiL9rvL-2SmNLvqhHzoMge3jboASiOLaCr2OhJxRvc3K3qCfpg7KKqosf0-SckLH1STiofGPEzs4UcfOWZkd-92IodIg71lRpIOzQIaYNqJ1c1Aol7BUCcQKgfPAmbsk3F2YNQUvnTbsH9WnmKraX0CIc9QXRdmYpV2KhE2Y47m_oDCH25HrOiARrWphh7fHGDEB-yaF_ikBy4zlKHIMfBgNdQnm6XMMjV_MVuwNgoq-cHN5nhhdG3BEldcQQumpCC0lTyQ3pPk')",
                            }}
                        ></div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                                Admin User
                            </p>
                            <p className="text-xs text-slate-500 truncate">System Overseer</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto flex flex-col">
                {/* Top Navbar */}
                <header className="bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 px-8 py-4 sticky top-0 z-10">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2 mb-1">
                                <Link
                                    href="/dashboard"
                                    className="text-xs font-medium text-slate-500 hover:text-primary"
                                >
                                    Dashboard
                                </Link>
                                <span className="material-symbols-outlined text-xs text-slate-400">
                                    chevron_right
                                </span>
                                <span className="text-xs font-medium text-slate-900 dark:text-white">
                                    Worker Management
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative w-96">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-slate-400 text-lg">
                                        search
                                    </span>
                                </div>
                                <input
                                    className="block w-full pl-10 pr-3 py-2 border-0 bg-slate-100 dark:bg-slate-800 rounded-lg focus:ring-2 focus:ring-primary text-sm dark:text-white"
                                    placeholder="Search by name, skill, or city..."
                                    type="text"
                                />
                            </div>
                            <button className="size-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                        </div>
                    </div>
                </header>

                <div className="p-8 space-y-8">
                    {/* Page Heading */}
                    <div className="flex items-end justify-between">
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                                Worker Management
                            </h2>
                            <p className="text-slate-500 mt-1">
                                Manage and verify service providers across regions.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 transition-colors">
                                <span className="material-symbols-outlined text-lg">
                                    file_download
                                </span>
                                Export Data
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-primary rounded-lg text-sm font-semibold text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
                                <span className="material-symbols-outlined text-lg">
                                    person_add
                                </span>
                                Register New Worker
                            </button>
                        </div>
                    </div>

                    {/* Stats Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <p className="text-slate-500 text-sm font-medium">
                                Total Workers
                            </p>
                            <div className="flex items-baseline gap-2 mt-2">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                    1,248
                                </h3>
                                <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                                    +12%
                                </span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <p className="text-slate-500 text-sm font-medium">
                                Pending Verifications
                            </p>
                            <div className="flex items-baseline gap-2 mt-2">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                    42
                                </h3>
                                <span className="text-xs font-bold text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded">
                                    High Priority
                                </span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <p className="text-slate-500 text-sm font-medium">
                                Active Workers
                            </p>
                            <div className="flex items-baseline gap-2 mt-2">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                    1,190
                                </h3>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <p className="text-slate-500 text-sm font-medium">
                                System Health
                            </p>
                            <div className="flex items-baseline gap-2 mt-2">
                                <h3 className="text-2xl font-bold text-emerald-500">99.4%</h3>
                            </div>
                        </div>
                    </div>

                    {/* Workers Table Section */}
                    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                            Worker Name
                                        </th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                            City
                                        </th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                            Expertise
                                        </th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
                                            Verification
                                        </th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                            Rating
                                        </th>
                                        <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                                    {/* Row 1 */}
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center"
                                                    data-alt="Worker profile photo Sunil Perera"
                                                    style={{
                                                        backgroundImage:
                                                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5U19RA5NXt05eGtuHJbxlsItTkAqfyr3YcFxeah_sKnSe0lMwujsv8HZV1K6W1n6vJOtwq2BWhbTD5Qyf-7uBqwWpRO74GtPK5BOf-ZrqQ84PhgozT6LVMVRcItKTMOEuFWaav1-m9WZzSj05TZuw1G8Sb45kvJZgS4grMZAwQ63rsmWGOKSCs6FP--DKyG0zpIhf9FFmvHgQGVhi17YeKvUF6HmQ47ocS38253oCvKEn3Z9LJswlW7bKauSMkBmhRRoIha6j1rc')",
                                                    }}
                                                ></div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                                                        Sunil Perera
                                                    </p>
                                                    <p className="text-xs text-slate-500">
                                                        Member since 2022
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm text-slate-600 dark:text-slate-400">
                                                Colombo
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded uppercase">
                                                    Plumbing
                                                </span>
                                                <span className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold rounded uppercase">
                                                    Electrical
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <div className="flex justify-center">
                                                <span
                                                    className="material-symbols-outlined text-emerald-500 filled-icon"
                                                    title="Verified Provider"
                                                >
                                                    verified
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-amber-400 text-sm filled-icon">
                                                    star
                                                </span>
                                                <span className="text-sm font-bold text-slate-900 dark:text-white">
                                                    4.8
                                                </span>
                                                <span className="text-[10px] text-slate-400">
                                                    (124)
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    className="p-2 text-slate-400 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors"
                                                    title="Warn Worker"
                                                >
                                                    <span className="material-symbols-outlined text-lg">
                                                        warning
                                                    </span>
                                                </button>
                                                <button
                                                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                                    title="Block Worker"
                                                >
                                                    <span className="material-symbols-outlined text-lg">
                                                        block
                                                    </span>
                                                </button>
                                                <button
                                                    className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                                                    title="View Details"
                                                >
                                                    <span className="material-symbols-outlined text-lg">
                                                        more_vert
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* Row 2 (Pending) */}
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center"
                                                    data-alt="Worker profile photo Kamal Gunawardena"
                                                    style={{
                                                        backgroundImage:
                                                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAEdyB7THE1jP6-5QagF7WNsuLE574P14l6Pp__NhZHNPWgBD5JfJz-Iuz8JMZ1E3jAvloHroCQkvq-KoE4zkepKCEiqNgLU4WVS0TLeB8eh_qR50GBBZI_PDezrNeLzraCn58ExA7kYQFopoXu6mWqFCh4Csrgs0PiW3MNFq3t5oY0S2SdZ7vWLwENiJAtxvz705yHi2l8ZEL1-iT3PDguoK6PMGFtDXv17FRhXr-NJMo5y0eocgdrGDtf5f_Ug4RlAHMnDJxrkbU')",
                                                    }}
                                                ></div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                                                        Kamal Gunawardena
                                                    </p>
                                                    <p className="text-xs text-slate-500">
                                                        Member since 2024
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm text-slate-600 dark:text-slate-400">
                                                Kandy
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-2 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-[10px] font-bold rounded uppercase">
                                                    Carpentry
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <div className="flex justify-center">
                                                <button className="text-[10px] font-bold bg-primary text-white px-3 py-1 rounded-full uppercase tracking-tight hover:bg-primary/90">
                                                    Verify
                                                </button>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-1 text-slate-300">
                                                <span className="material-symbols-outlined text-sm">
                                                    star
                                                </span>
                                                <span className="text-sm font-bold text-slate-400">
                                                    N/A
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-2 text-slate-400 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors">
                                                    <span className="material-symbols-outlined text-lg">
                                                        warning
                                                    </span>
                                                </button>
                                                <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                                                    <span className="material-symbols-outlined text-lg">
                                                        block
                                                    </span>
                                                </button>
                                                <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                                                    <span className="material-symbols-outlined text-lg">
                                                        more_vert
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* Row 3 */}
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center"
                                                    data-alt="Worker profile photo Dilshan Silva"
                                                    style={{
                                                        backgroundImage:
                                                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCC7xweFcxiRluD_eEchRWfdrivaivFCREe7oejSQTnS90lCsUcoYX1TSzFjK17K_jjG-1CYPKuYZEaUVJ2HfP77gJ4wzOjNrMut9e8ZP0GP1lEBAL1x8YvJAn-4sFvapq8YZdlytmrSxhAQcZLRyWo7QRTO0I3sz8UDXhB0-e_FYIRP6GlRlphDKPORMbUCeqfTXr-_cO83EbRSzIqCpAlI0_JPVUY6FVT3u-1MOiCZ8X9Nbp_Onipsu8CTuNYfyYfV8VkwUu8PRc')",
                                                    }}
                                                ></div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                                                        Dilshan Silva
                                                    </p>
                                                    <p className="text-xs text-slate-500">
                                                        Member since 2021
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm text-slate-600 dark:text-slate-400">
                                                Galle
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold rounded uppercase">
                                                    Masonry
                                                </span>
                                                <span className="px-2 py-1 bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-[10px] font-bold rounded uppercase">
                                                    Painting
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <div className="flex justify-center">
                                                <span className="material-symbols-outlined text-emerald-500 filled-icon">
                                                    verified
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-amber-400 text-sm filled-icon">
                                                    star
                                                </span>
                                                <span className="text-sm font-bold text-slate-900 dark:text-white">
                                                    4.5
                                                </span>
                                                <span className="text-[10px] text-slate-400">
                                                    (89)
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-2 text-slate-400 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors">
                                                    <span className="material-symbols-outlined text-lg">
                                                        warning
                                                    </span>
                                                </button>
                                                <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                                                    <span className="material-symbols-outlined text-lg">
                                                        block
                                                    </span>
                                                </button>
                                                <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                                                    <span className="material-symbols-outlined text-lg">
                                                        more_vert
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* Row 4 (Blocked) */}
                                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors opacity-60">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center grayscale"
                                                    data-alt="Worker profile photo Maithree Rathnayake"
                                                    style={{
                                                        backgroundImage:
                                                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZLWBe9MEoPQahiw6TT5mPgPsQM6QpNDEjSNLxJgjuzicrCgfmZ7jgsNR2-g3aZ77k42_VX3aaUNnoON9JC16PNKHELxwrgM4kYHn3bmpk8y4tTRoKoj4rd4vB7_tyVcgT7lbzZG6sImN7b_MHnV6hKQ0P-ROzQrtXlr5JYXM9fJ9k6xnd7bj3Va0iN8ShDUS-kjfg8r-X5Ca0uQ7KEkG_OhFYqR_DEpy95Tl0t7c5_PhGG5ueF9o0Om38U4yfjcrmLXtsGPk30cY')",
                                                    }}
                                                ></div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                                                        Maithree Rathnayake
                                                    </p>
                                                    <p className="text-xs text-red-500 font-bold uppercase tracking-tighter">
                                                        Status: Blocked
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm text-slate-600 dark:text-slate-400">
                                                Negombo
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-[10px] font-bold rounded uppercase">
                                                    HVAC
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <div className="flex justify-center">
                                                <span className="material-symbols-outlined text-slate-300">
                                                    verified
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-1">
                                                <span className="material-symbols-outlined text-slate-300 text-sm filled-icon">
                                                    star
                                                </span>
                                                <span className="text-sm font-bold text-slate-400">
                                                    2.1
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="px-3 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded uppercase hover:bg-emerald-600 transition-colors">
                                                    Unblock
                                                </button>
                                                <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                                                    <span className="material-symbols-outlined text-lg">
                                                        more_vert
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Pagination */}
                        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between">
                            <p className="text-xs font-medium text-slate-500">
                                Showing 1 to 10 of 1,248 workers
                            </p>
                            <div className="flex items-center gap-1">
                                <button className="p-1.5 rounded border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-50">
                                    <span className="material-symbols-outlined text-sm">
                                        chevron_left
                                    </span>
                                </button>
                                <button className="size-8 flex items-center justify-center rounded bg-primary text-white text-xs font-bold">
                                    1
                                </button>
                                <button className="size-8 flex items-center justify-center rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs font-bold">
                                    2
                                </button>
                                <button className="size-8 flex items-center justify-center rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs font-bold">
                                    3
                                </button>
                                <span className="px-2 text-slate-400 text-xs">...</span>
                                <button className="size-8 flex items-center justify-center rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs font-bold">
                                    125
                                </button>
                                <button className="p-1.5 rounded border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-white dark:hover:bg-slate-800">
                                    <span className="material-symbols-outlined text-sm">
                                        chevron_right
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
