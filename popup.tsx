import { useState } from 'react';
import Editor, {
  loader,
} from '@monaco-editor/react';

loader.config({
  paths: {
    vs: '/libs/monaco'
  }
})

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        width: 600
      }
    }>
      <h1>sourcemap header</h1>
      <Editor
        height="90vh"
        defaultLanguage="json"
        defaultValue="{}"
      />
    </div>
  )
}

export default IndexPopup
