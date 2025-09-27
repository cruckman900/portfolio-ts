// components/ReadOnlyPost.tsx
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function ReadOnlyPost({ content }: { content: string }) {
    const editor = useEditor({
        extensions: [StarterKit],
        content,
        editable: false,
        immediatelyRender: false,
    });

    if (!editor) return null;

    return <EditorContent editor={editor} />;
}