import React from 'react';
import showdown from 'showdown';

export default function MarkdownViewer({ content }: { content: string }) {
  const converter = new showdown.Converter();
  const stylesheetTag = '<link rel="stylesheet" href="/css/markdown.css" />';
  const html = stylesheetTag + converter.makeHtml(content);
  console.log(html);

  const frame = document.getElementById('md-frame') as any;

  if (frame) {
    frame.onload = function () {
      frame.style.height =
        50 + frame.contentWindow.document.body.scrollHeight + 'px';
      frame.style.width = '100%';
    };
  }

  const doc = frame ? frame.contentWindow.document : null;
  if (doc) {
    doc.open();
    doc.write(html);
    doc.close();
  }

  return (
    <div className="relative">
      <iframe className="w-full h-full" id="md-frame"></iframe>
    </div>
  );
}
