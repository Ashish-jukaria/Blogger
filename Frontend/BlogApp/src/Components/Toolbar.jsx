import React from 'react'

export default function Toolbar({editor}) {
  return (
    <div className="toolbar">
          <button onClick={() => editor.chain().focus().toggleBold().run()} 
            className={editor.isActive('bold') ? 'active' : ''}>
            Bold
          </button>
          <button onClick={() => editor.chain().focus().toggleItalic().run()} 
            className={editor.isActive('italic') ? 'active' : ''}>
            Italic
          </button>
          <button onClick={() => editor.chain().focus().toggleStrike().run()} 
            className={editor.isActive('strike') ? 'active' : ''}>
            Strike
          </button>
          <button onClick={() => editor.chain().focus().toggleUnderline().run()} 
            className={editor.isActive('underline') ? 'active' : ''}>
            Underline
          </button>
          <button onClick={() => editor.chain().focus().toggleBulletList().run()} 
            className={editor.isActive('bulletList') ? 'active' : ''}>
            Bullet List
          </button>
          <button onClick={() => editor.chain().focus().toggleOrderedList().run()} 
            className={editor.isActive('orderedList') ? 'active' : ''}>
            Ordered List
          </button>
          <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} 
            className={editor.isActive('heading') ? 'active' : ''}>
            H1
          </button>
          <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} 
            className={editor.isActive('heading') ? 'active' : ''}>
            H2
          </button>
          <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} 
            className={editor.isActive('codeBlock') ? 'active' : ''}>
            Code Block
          </button>
          <button onClick={() => editor.chain().focus().setTextAlign('left').run()} 
            className={editor.isActive('paragraph') && editor.getAttributes('paragraph').textAlign === 'left' ? 'active' : ''}>
            Left Align
          </button>
          <button onClick={() => editor.chain().focus().setTextAlign('center').run()} 
            className={editor.isActive('paragraph') && editor.getAttributes('paragraph').textAlign === 'center' ? 'active' : ''}>
            Center Align
          </button>
          <button onClick={() => editor.chain().focus().setTextAlign('right').run()} 
            className={editor.isActive('paragraph') && editor.getAttributes('paragraph').textAlign === 'right' ? 'active' : ''}>
            Right Align
          </button>
          <button onClick={() => editor.chain().focus().setLink({ href: prompt('Enter link URL') }).run()} 
            className={editor.isActive('link') ? 'active' : ''}>
            Add Link
          </button>
        </div>
  )
}
