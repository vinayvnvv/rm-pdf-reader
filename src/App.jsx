
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';



function App() {

  const location = window.location;
  const search = new URLSearchParams(location.search)
  const pdfURL = search.get('url')

  return (
    <>
     <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
     <div style={{
        border: '1px solid rgba(0, 0, 0, 0.3)',
        height: '100%',
        width: '100%',
        position: 'absolute'
    }}>
     <Viewer fileUrl={pdfURL}
 />
     </div>
    </Worker>
    </>
  )
}

export default App
