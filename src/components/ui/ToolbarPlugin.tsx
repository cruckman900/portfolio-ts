// components/ToolbarPlugin.tsx
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from 'lexical';

export default function ToolbarPlugin() {
    const [editor] = useLexicalComposerContext();

    const format = (type: 'bold' | 'italic' | 'underline') => {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, type);
    };

    return (
        <div className='toolbar'>
            <button onClick={() => format('bold')}>Bold</button>
            <button onClick={() => format('italic')}>Italic</button>
            <button onClick={() => format('underline')}>Underline</button>
        </div>
    )
}