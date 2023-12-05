import React from "react";
import { Input } from "antd";

function Dailog({ name, caption, handleName, handleCaption }) {
  return (
    <div className="new-post-details">
      <Input
        placeholder="Enter Your Name"
        className="input-name"
        value={name}
        onChange={handleName}
      />
      <Input.TextArea
        placeholder="Write your Caption"
        value={caption}
        onChange={handleCaption}
      />
    </div>
  );
}
export default Dailog;
