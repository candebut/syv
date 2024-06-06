import { useState, useCallback, useMemo, useRef } from "react";
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";


const Editor = ({ setValue, value }) => {

  const quill = useRef();

  const imageHandler = useCallback(() => {
    // Create an input element of type 'file'
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    // When a file is selected
    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();

      // Read the selected file as a data URL
      reader.onload = () => {
        const imageUrl = reader.result;
        const quillEditor = quill.current.getEditor();

        // Get the current selection range and insert the image at that index
        const range = quillEditor.getSelection(true);
        quillEditor.insertEmbed(range.index, "image", imageUrl, "user");
      };

      reader.readAsDataURL(file);
    };
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [2, 3, 4, false] }],
          ["bold", "italic", "underline", "blockquote"],
          [{ color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      clipboard: {
        matchVisual: true,
      },
    }),
    [imageHandler]
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "clean",
  ];
  // Editor state

  return (
    <div className='editor-wrapper'>
      {/* <label className='editor-label'>Editor Content</label> */}
      <QuillEditor
        ref={(el) => (quill.current = el)}
        className='editor'
        theme="snow"
        value={value}
        formats={formats}
        modules={modules}
        onChange={(value) => {
          console.log('e: ', value)
          setValue(value)
        }}
      />
      {/* <button onClick={handler} className='editor-button'>
        Submit
      </button> */}
    </div>
  );
};

export default Editor;
