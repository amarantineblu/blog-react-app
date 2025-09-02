// src/components/TipTapEditor.jsx
import React, { useEffect, useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Image from '@tiptap/extension-image';

const TipTapEditor = ({ value, onChange }) => {
  const fileInputRef = useRef();

  const editor = useEditor({
    extensions: [StarterKit, Bold, Italic, Image,],
    content: value,
    onUpdate: ({ editor }) => {
      onChange({
        target: {
          name: 'content', // or pass `name` as prop from InputField
          value: editor.getHTML(),
        }
      });
    },
  });

  const addImage = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      editor?.chain().focus().setImage({ src: reader.result }).run();
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div className="toolbar mb-2">
        <button onClick={() => editor?.chain().focus().toggleBold().run()} className="btn btn-sm btn-secondary mx-1">B</button>
        <button onClick={() => editor?.chain().focus().toggleItalic().run()} className="btn btn-sm btn-secondary mx-1">I</button>
        <button onClick={() => fileInputRef.current?.click()} className="btn btn-sm btn-secondary mx-1">🖼️</button>
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          hidden
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) addImage(file);
          }}
        />
      </div>

      <div className="editor border rounded p-2">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TipTapEditor;
