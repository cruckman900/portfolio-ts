// src/components/ui/LexicalEditor.tsx
import { useEffect } from 'react'

import {
  LexicalComposer,
  InitialConfigType,
} from '@lexical/react/LexicalComposer'

import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'

import {
  $convertFromMarkdownString,
  $convertToMarkdownString,
  TRANSFORMERS,
} from '@lexical/markdown'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'

import {
  EditorState,
  FORMAT_TEXT_COMMAND,
  INSERT_PARAGRAPH_COMMAND,
  $createParagraphNode,
  $createTextNode,
  $getRoot,
} from 'lexical'

import { HeadingNode, QuoteNode } from '@lexical/rich-text'

import {
  ListNode,
  ListItemNode,
  INSERT_UNORDERED_LIST_COMMAND,
  INSERT_ORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
} from '@lexical/list'

import { LinkNode } from '@lexical/link'

import { CodeNode } from '@lexical/code'

import '@/styles/editor.scss'

interface LexicalEditorProps {
  initialContent?: string // Markdown string from DB
  onChange?: (markdown: string) => void
}

// Toolbar
function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext()
  return (
    <div className="toolbar">
      <button type="button" onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')}>Bold</button>
      <button type="button" onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')}>Italic</button>
      <button type="button" onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')}>Underline</button>
      <button type="button" onClick={() => editor.dispatchCommand(INSERT_PARAGRAPH_COMMAND, undefined)}>P</button>
      <button type="button" onClick={() => editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)}>• Bulleted</button>
      <button type="button" onClick={() => editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)}>1. Numbered</button>
      <button type="button" onClick={() => editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined)}>Remove list</button>
    </div>
  )
}

// Plugin to hydrate from Markdown
function LoadContentPlugin({ initialContent }: { initialContent?: string }) {
  const [editor] = useLexicalComposerContext()
  useEffect(() => {
    if (initialContent && initialContent.trim().length > 0) {
      editor.update(() => {
        $convertFromMarkdownString(initialContent, TRANSFORMERS)
        // fallback: if transformers didn’t match, insert raw text
        const root = $getRoot()
        if (root.getChildrenSize() === 0) {
          const p = $createParagraphNode()
          p.append($createTextNode(initialContent))
          root.append(p)
        }
      })
    }
    // run only once on mount
  }, [])
  return null
}

export default function LexicalEditor({ initialContent, onChange }: LexicalEditorProps) {
  const theme = {
    text: {
      bold: 'editor-bold',
      italic: 'editor-italic',
      underline: 'editor-underline',
    },
    heading: { h1: 'editor-h1', h2: 'editor-h2' },
    quote: 'editor-quote',
    list: { ul: 'editor-ul', ol: 'editor-ol', listitem: 'editor-li' },
  }

  const config: InitialConfigType = {
    namespace: 'BlogEditor',
    theme,
    onError: (error: Error) => console.error(error),
    nodes: [HeadingNode, QuoteNode, ListNode, ListItemNode, LinkNode, CodeNode],
  }

  const handleChange = (editorState: EditorState) => {
    editorState.read(() => {
      const markdown = $convertToMarkdownString(TRANSFORMERS)
      onChange?.(markdown)
    })
  }

  return (
    <LexicalComposer initialConfig={config}>
      <ToolbarPlugin />
      <RichTextPlugin
        contentEditable={<ContentEditable className="editor" dir='ltr' />}
        placeholder={<div className="placeholder">Start writing...</div>}
        ErrorBoundary={() => null}
      />
      <LoadContentPlugin initialContent={initialContent} />
      <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
      <HistoryPlugin />
      <ListPlugin />
      <LinkPlugin />
      <OnChangePlugin onChange={handleChange} />
    </LexicalComposer>
  )
}
