'use client'

import { useFileInput } from './root'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from './file-item'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate(/* optional config */)

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return <FileItem key={file.name} file={file} state="complete" />
      })}
    </div>
  )
}
