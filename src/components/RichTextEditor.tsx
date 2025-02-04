import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = () => {
  const [content, setContent] = useState(() => {
    return localStorage.getItem("editorContent") || "";
  });

  // useEffect hook to save content to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("editorContent", content);
  }, [content]);

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      {/* Title of the editor */}
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "16px",
          color: "black",
        }}
      >
        Rich Text Editor
      </h1>

      {/* ReactQuill component for the rich text editor */}
      <ReactQuill
        value={content} // Binds the editor content to the state
        onChange={setContent} // Updates the state whenever the content changes
        style={{
          flex: 1, // Ensures the editor expands to fill available space
          overflow: "auto",
        }}
        modules={{
          toolbar: [
            ["bold", "italic", "underline"], // Text formatting options
            [{ list: "ordered" }, { list: "bullet" }], // Ordered & unordered lists
            [{ header: [1, 2, false] }], // Heading levels
            ["clean"], // Remove formatting
          ],
        }}
      />
    </div>
  );
};

export default RichTextEditor;
