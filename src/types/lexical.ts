type LexicalTextNode = {
    type: 'text';
    text: string;
};

type LexicalBlockNode = {
    type: 'heading' | 'paragraph';
    tag?: 'h1' | 'h2';
    children: LexicalTextNode[];
};

type LexicalRoot = {
    type: 'root';
    children: LexicalBlockNode[];
};
