'use client';

import { pdfjs, Page, Document } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export function PDFViewer() {
  return (
    <div>
      <Document>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
