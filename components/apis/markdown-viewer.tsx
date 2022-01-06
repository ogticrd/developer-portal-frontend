import { useEffect } from 'react'
import { marked } from 'marked';

export default function MarkdownViewer({ content }: { content: string }) {
  const stylesheetTag = '<link rel="stylesheet" href="/css/markdown.css" />'
  const html = stylesheetTag + marked.parse(content)

  const updateSize = (frame: any) => {
    frame.style.height =
      50 + frame.contentWindow.document.body.scrollHeight + 'px'
    frame.style.width = '100%'
  }
  useEffect(() => {
    const frame = document.getElementById('md-frame') as any

    const doc = frame ? frame.contentWindow?.document : null
    if (doc) {
      doc.open()
      doc.write(html)
      doc.close()

      updateSize(frame)
    }
    return () => { }
  }, [content, html])

  return (
    <div className="relative">
      <iframe id="md-frame"></iframe>
    </div>
  )
}
