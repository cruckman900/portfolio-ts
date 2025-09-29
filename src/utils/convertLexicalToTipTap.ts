import type { JSONContent } from "@tiptap/react"

function convertLexicalToTiptap(lexicalJson: LexicalRoot): JSONContent {
    const tiptapContent: JSONContent[] = lexicalJson.children.map((node) => {
        if (node.type === 'heading') {
            return {
                type: 'heading',
                attrs: { level: node.tag === 'h1' ? 1 : 2 },
                content: node.children.map((child: LexicalTextNode) => ({
                    type: 'text',
                    text: child.text,
                })),
            }
        }

        if (node.type === 'paragraph') {
            return {
                type: 'paragraph',
                content: node.children.map((child: LexicalTextNode) => ({
                    type: 'text',
                    text: child.text,
                })),
            }
        }

        return null
    }).filter(Boolean) as JSONContent[]

    return {
        type: 'doc',
        content: tiptapContent,
    }
}

export default convertLexicalToTiptap
