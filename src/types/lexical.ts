type LexicalTextNode = {
    type: 'text';
    text: string;
};

type LexicalBlockNode = {
    type: 'heading' | 'paragraph';
    tag?: 'h1' | 'h2';
    children: LexicalTextNode[];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type LexicalRoot = {
    type: 'root';
    children: LexicalBlockNode[];
};
