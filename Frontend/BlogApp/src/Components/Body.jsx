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
import Toolbar from './Toolbar';


export default function Body({name,value,onChange}) {
    const editor = useEditor({
        extensions: [
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
