import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="py-4 bg-background border-t border-border flex items-center justify-center">
      <div className="flex items-center justify-center gap-4">
        <BottomNavItem href="/dashboard" label="Home" />
        <BottomNavItem href="/dashboard/stats" label="Stats" />
        <BottomNavItem href="/dashboard/exercises" label="Exercises" />
        <BottomNavItem href="/dashboard/habits" label="Habits" />
      </div>
    </nav>
  )
}

interface BottomNavItemProps {
  href: string;
  label: string;
}

function BottomNavItem({ href, label }: Readonly<BottomNavItemProps>) {
  return (
    <Link className="text-xl" href={href}>
      {label}
    </Link>
  )
}