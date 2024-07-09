'use client'

import { ComponentProps } from 'react'
import { ChevronDown } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import * as Select from '@radix-ui/react-select'

export interface TriggerProps extends ComponentProps<typeof Select.Trigger> {}

export function Trigger({ children, ...props }: TriggerProps) {
  return (
    <Select.Trigger
      {...props}
      className={twMerge(
        'flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none',
        'data-[placeholder]:text-zinc-600',
        props.className,
      )}
    >
      {children}

      <Select.Icon>
        <ChevronDown className="h-5 w-5 text-zinc-500" />
      </Select.Icon>
    </Select.Trigger>
  )
}
