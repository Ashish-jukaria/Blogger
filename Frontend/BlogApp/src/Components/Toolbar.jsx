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
          <button
  onClick={() => {
    let url = prompt('Enter link URL');
    
    // Check if the entered URL starts with a protocol
    if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
      url = `https://${url}`;
    }
    
    editor.chain().focus().setLink({ href: url }).run();
  }}
  className={editor.isActive('link') ? 'active' : ''}
>
  Add Link
</button>

<button
        onClick={() => {
          const imageUrl = prompt('Enter image URL');
          if (imageUrl) {
            editor.chain().focus().setImage({ src: imageUrl }).run();
          }
        }}
        className={editor.isActive('image') ? 'active' : ''}
      >
        Insert Image
      </button>
      <button onClick={() => editor.chain().focus().toggleBlockquote().run()} 
        className={editor.isActive('blockquote') ? 'active' : ''}>
        Blockquote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()} 
        className={editor.isActive('horizontalRule') ? 'active' : ''}>
        Horizontal Rule
      </button>

      <button onClick={() => editor.chain().focus().toggleSubscript().run()} 
        className={editor.isActive('subscript') ? 'active' : ''}>
        Subscript
</button>

<button onClick={() => editor.chain().focus().toggleSuperscript().run()} 
        className={editor.isActive('superscript') ? 'active' : ''}>
        Superscript
</button>

<button onClick={() => {
  const color = prompt('Enter hex color code for text');
  if (color) {
    editor.chain().focus().setColor(color).run();
  }
}} className={editor.isActive('textStyle') ? 'active' : ''}>
  Font Color
</button>

<button onClick={() => editor.chain().focus().unsetAllMarks().run()} 
        className="clear-format">
        Clear Formatting
</button>
<button onClick={() => editor.chain().focus().undo().run()} 
        className="undo">
        Undo
</button>

<button onClick={() => editor.chain().focus().redo().run()} 
        className="redo">
        Redo
</button>

<button onClick={() => editor.chain().focus().toggleBlockquote().run()} 
        className={editor.isActive('blockquote') ? 'active' : ''}>
        Quote
</button>
<button onClick={() => editor.chain().focus().unsetLink().run()} 
        className={editor.isActive('link') ? 'active' : ''}>
        Remove Link
</button>
<button onClick={() => {
  const rows = prompt('Enter number of rows');
  const columns = prompt('Enter number of columns');
  if (rows && columns) {
    editor.chain().focus().insertTable({ rows: Number(rows), cols: Number(columns) }).run();
  }
}} className="insert-table">
  Insert Table
</button>

        </div>
  )
}
