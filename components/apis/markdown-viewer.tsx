import { marked } from 'marked';

export default function MarkdownViewer({ content }: { content: string }) {
  const stylesheetTag = '<link rel="stylesheet" href="/css/markdown.css" />'
  const html = stylesheetTag + marked.parse(content)

  return (
    <div className="relative markdown-viewer" dangerouslySetInnerHTML={{ __html: html }}>
    </div>
  )
}
