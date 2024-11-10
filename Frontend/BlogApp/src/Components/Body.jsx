import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Strike from '@tiptap/extension-strike';
import Underline from '@tiptap/extension-underline';
import Heading from '@tiptap/extension-heading';
import CodeBlock from '@tiptap/extension-code-block';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import Image from '@tiptap/extension-image';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import Highlight from '@tiptap/extension-highlight';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Blockquote from '@tiptap/extension-blockquote';
import Toolbar from './Toolbar';





export default function Body({name,value,onChange}) {
    const editor = useEditor({
        extensions: [
          Image,
          StarterKit,
          Bold,
          Italic,
          Strike,
          Underline,
          Heading.configure({ levels: [1, 2, 3] }),
          CodeBlock,
          BulletList,
          OrderedList,
          ListItem,
          Link,
          TextAlign.configure({ types: ['heading', 'paragraph'] }),
          Image,
          Table.configure({ resizable: true }),
          TableRow,
          TableCell,
          TableHeader,
          Highlight,
          HorizontalRule,
          Blockquote,
        ],
        content: value,
        onUpdate: ({ editor }) => {
          const bodyContent = editor.getHTML(); // Capture body content as HTML
          onChange({ target: { name, value: bodyContent } });
          
        },
      });
  return (
    <>

        <Toolbar editor={editor}/>
        {editor && <EditorContent className="tiptap-editor" editor={editor} />}

        </>


      
  )
}
