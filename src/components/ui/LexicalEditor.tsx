import {
  LexicalComposer,
  InitialConfigType,
} from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { EditorState } from 'lexical';

interface LexicalEditorProps {
  onChange?: (json: string) => void;
}

export default function LexicalEditor({ onChange }: LexicalEditorProps) {
  const config: InitialConfigType = {
    namespace: 'BlogEditor',
    theme: {},
    onError: (error: Error) => console.error(error),
    nodes: [],
  };

  const handleChange = (editorState: EditorState) => {
    const json = JSON.stringify(editorState.toJSON());
    onChange?.(json);
  };

  return (
    <LexicalComposer initialConfig={config}>
      <RichTextPlugin
        contentEditable={<ContentEditable className="editor" />}
        placeholder={<div className="placeholder">Start writing...</div>}
        ErrorBoundary={() => null}
      />
      <OnChangePlugin onChange={handleChange} />
      <HistoryPlugin />
    </LexicalComposer>
  );
}
