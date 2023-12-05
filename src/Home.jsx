import React, { useState } from "react";
import Details from "./proCard";
import Dailog from "./Dailog";
import { Button, Modal, Space } from "antd";

function Home() {
  const [post, setpost] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const newPost = () => {
    // setIsOpen(true);
    Modal.confirm({
      title: "Confirm",
      content: "Bla bla ...",
      footer: (_, { OkBtn, CancelBtn }) => (
        <>
          <Button>Custom Button</Button>
          <CancelBtn />
          <OkBtn />
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
