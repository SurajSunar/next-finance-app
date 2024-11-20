import Link from "next/link";

export default function PageHeader() {
    return (
        <header className="flex justify-between items-center">
            <Link href="/dashboard"  className="text-xl hover:underline hover:underline-offset-8 decoration-2">Finance Tracker</Link>

            <div className="flex items-center space-x-4">
                <div>Mode Toggle</div>
                <div>User Dropdown</div>
            </div>
        </header>


    )
}