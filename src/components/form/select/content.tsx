'use client'

import * as Select from '@radix-ui/react-select'
import { ComponentProps } from 'react'

export interface ContentProps extends ComponentProps<typeof Select.Content> {}

export function Content({ children, ...props }: ContentProps) {
  return (
    <Select.Portal>
      <Select.Content
        {...props}
        side="bottom"
        sideOffset={8}
        position="popper"
        className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-md"
      >
        <Select.Viewport className="max-h-[300px]">{children}</Select.Viewport>
      </Select.Content>
    </Select.Portal>
  )
}
