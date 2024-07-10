import { ComponentProps } from 'react'

type TextAreaProps = ComponentProps<'textarea'>

export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      {...props}
      className="max-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
    />
  )
}
