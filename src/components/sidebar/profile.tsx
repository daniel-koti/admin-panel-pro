import { LogOut } from 'lucide-react'
import { Button } from '../form/button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/daniel-koti.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Daniel Koti</span>
        <span className="truncate text-sm text-zinc-500">
          danielk.moniz@gmail.com
        </span>
      </div>

      <Button type="button" variant="ghost">
        <LogOut className="h-4 w-4 text-zinc-500" />
      </Button>
    </div>
  )
}
