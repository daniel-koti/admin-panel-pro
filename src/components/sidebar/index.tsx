import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
  LifeBuoy,
  Cog,
  Search,
} from 'lucide-react'
import { Logo } from './logo'
import { NavItem } from './nav-item'
import { UsedSpacedWidget } from './used-spaced-widget'
import { Profile } from './profile'
import * as Input from '../form/input'

export function Sidebar() {
  return (
    <aside className="fixed bottom-0 left-0 right-0 top-0 z-20 flex h-screen flex-col gap-6 border-zinc-200 bg-white p-4 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8">
      <Logo />

      <Input.Root>
        <Input.Control placeholder="Search" />
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
      </Input.Root>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UsedSpacedWidget />

        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
