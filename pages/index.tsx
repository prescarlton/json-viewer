import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Home() {
  const [jsonContent, setJsonContent] = useState('');

  const parseJSON = () => {
    // grab textarea content and attempt to parse it before routing
    try {
      const parsedJson = JSON.parse(jsonContent);
      alert('successfully parsed JSON.')
      console.log(parsedJson)
    } catch (e) {
      alert('unable to parse JSON. Check console for more info.')
      console.log(e)
    }
  }

  const onTextAreaChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setJsonContent(target.value)
  }
  return (
    <div className='container'>
      <Head>
        <title>JSON Viewer</title>
        <meta name="JSON Viewer" content="format and view raw JSON" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="header">
          <h1>JSON Viewer</h1>
          <h2>I made this when I was working on an API-heavy project and wanted to see a better, more structured view of raw JSON data.</h2>
        </div>
        <div className="input-wrapper">
          <textarea name="json-input" id="json-input" placeholder='{}' value={jsonContent} onChange={onTextAreaChange}></textarea>
          <button className="submit" type="button" onClick={parseJSON}>VIEW</button>
        </div>
      </main>
      <footer>
        <a
          href="https://pcarlton.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          made by presto the wizard
        </a>
      </footer>
    </div>
  )
}
