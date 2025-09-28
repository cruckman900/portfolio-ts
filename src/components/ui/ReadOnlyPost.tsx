// components/ReadOnlyPost.tsx
import convertLexicalToTiptap from '@/utils/convertLexicalToTipTap';
import { useEditor, EditorContent, JSONContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function ReadOnlyPost({ content }: { content: string }) {
    // console.log("stuff and things", convertLexicalToTiptap(JSON.parse(content)));
    const editor = useEditor({
        extensions: [StarterKit],
        content: convertLexicalToTiptap(JSON.parse(content)),
        editable: false,
        immediatelyRender: false,
    });

    if (!editor) return null;

    return <EditorContent editor={editor} />;
}