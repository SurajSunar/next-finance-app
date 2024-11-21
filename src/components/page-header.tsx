import Link from "next/link";
import useServerDarkMode from "@/hooks/use-server-dark-mode";
import DarkModeToggle from "@/components/dark-mode-toggle";

export default function PageHeader() {
    const theme = useServerDarkMode();

    return (
        <header className="flex justify-between items-center">
            <Link href="/dashboard"  className="text-xl hover:underline hover:underline-offset-8 decoration-2">Finance Tracker</Link>

            <div className="flex items-center space-x-4">
                <DarkModeToggle defaultMode={theme} />
                <div>User Dropdown</div>
            </div>
        </header>


    )
}