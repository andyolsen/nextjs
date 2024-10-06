// This must be a client component, because it handles browser events.
'use client'

import { useState } from 'react'
import parse from 'html-react-parser'
import styles from './searchablePanel.module.css'

export default function SearchablePanel(
  {text, children}: {text: string, children: React.ReactNode}
) {
  
  const [currentContent, setCurrentContent] = useState(parse(text))

  function doSearch(searchString: string) {
    if (!searchString) {
      setCurrentContent(parse(text))
    } 
    else {
      const newText = text.replaceAll(
        searchString, 
        `<span className=${styles.highlight}>${searchString}</span>`
      )
      setCurrentContent(parse(newText))
    }
  }

  return (
    <>
      <div>{currentContent}</div>
      <input type='text' placeholder='Enter search string here' onChange={(e) => doSearch(e.target.value)}/>
      {children}
    </>
  )
}