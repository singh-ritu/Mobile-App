import React, { useState } from "react";
import Details from "./proCard";
import Dailog from "./Dailog";
import { Button, Modal, Space } from "antd";

function Home() {
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");

  const handleName = (e) => {
    console.log(e);
    setName(e.target.value);
  };
  const handleCaption = () => {
    setCaption(e.target.value);
  };
  const handlePost = () => {
    console.log(name);
    console.log(caption);
  };

  const newPost = () => {
    // setIsOpen(true);
    Modal.confirm({
      title: "New Post Details",
      content: (
        <Dailog
          name={name}
          caption={caption}
          handleName={handleName}
          handleCaption={handleCaption}
        />
      ),
      footer: (_, { CancelBtn }) => (
        <>
          <Button type="primary" onClick={handlePost}>
            Create Post
          </Button>
          <CancelBtn />
        </>
      ),
    });
  };
  return (
    <div className="home-details">
      <Button className="add-post-btn" onClick={newPost}>
        +
      </Button>
      {/* {isOpen && <Dailog />} */}
    </div>
  );
}
export default Home;
