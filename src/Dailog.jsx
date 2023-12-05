import React from "react";
import { Input, Modal, Button } from "antd";

function Dailog({
  name,
  caption,
  handleName,
  handleCaption,
  handlePost,
  modalClose,
}) {
  return (
    <Modal
      title="New Post Details"
      open={true}
      okText="Create Post"
      onCancel={modalClose}
      onOk={handlePost}
    >
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
    </Modal>
  );
}
export default Dailog;
