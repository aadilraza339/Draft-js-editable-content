import React, { useState } from "react";
import {
  EditorState,
  convertToRaw,
  ContentState,
  Modifier,
  convertFromHTML,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { stateFromHTML } from "draft-js-import-html";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./index.css";

const ContentEditor = ({ htmlContent, setContent, toolbarHidden=true }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  let contentState = stateFromHTML(htmlContent);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(contentState)
  );

  const handleEditorChange = (state) => {
    setEditorState(state);

  };

  const onBlurHandler = () => {
    setIsEditMode(false);
    const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    const value = blocks
      .map((block) => (!block.text.trim() && "\n") || block.text)
      .join("\n");
      console.log(value,"value");
    setContent(value);
  };
  return (
    <Editor
      onFocus={() => {
        setIsEditMode(true);
      }}
      toolbarHidden={toolbarHidden}
      editorState={editorState}
      onEditorStateChange={handleEditorChange}
      onBlur={onBlurHandler}
      wrapperClassName={`wrapper-editor-class`}
      editorClassName={`editor-class ${isEditMode && "focus"}`}
      toolbarClassName="toolbar-class"
    />
  );
};
export default ContentEditor;
