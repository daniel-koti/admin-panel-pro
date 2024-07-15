'use client'

import { UploadCloud } from 'lucide-react'
import { useFileInput } from './root'

export function Trigger() {
  const { id } = useFileInput()

  return (
    <label
      htmlFor={id}
      className="hover:bg-violet-25 group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-50 hover:text-violet-500 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-violet-300"
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100 dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-700">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:to-violet-700 dark:text-zinc-500 dark:group-hover:text-violet-300" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-violet-700 dark:text-violet-300">
            Click to upload
          </span>{' '}
          or drag and drop
        </span>
        <span className="text-sm">SVG, PNG, JPG org GIF (max. 800x400)</span>
      </div>
    </label>
  )
}
