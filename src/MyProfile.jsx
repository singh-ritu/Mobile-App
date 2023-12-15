import React from "react";
import { UserOutlined, UserAddOutlined, DownOutlined } from "@ant-design/icons";

import { Avatar, Button } from "antd";

function MyProfile() {
  return (
    <div className="my-profile">
      <div className="left-container">
        <div className="upper-container">
          <div>
            <Avatar
              size={250}
              icon={<UserOutlined />}
              src="Girl.jpg"
              style={{ marginRight: "50px" }}
            />
          </div>
          <div className="side-conatainer">
            <div>
              <h1>Ritu Singh</h1>
              <p>@iiritu456</p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h4 style={{ color: "grey", fontSize: "15px" }}>
                  Interior Design
                </h4>
                <Button
                  type="primary"
                  style={{ marginLeft: "10px", padding: ".5px 48px" }}
                >
                  Message
                </Button>
                <UserAddOutlined
                  style={{
                    border: "1px solid black",
                    borderRadius: "4px",
                    padding: " 8px",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />

                <DownOutlined
                  style={{
                    border: "1px solid black",
                    borderRadius: "4px",
                    padding: "8px",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div
                  style={{
                    borderRight: "1px solid black",
                    paddingRight: "20px",
                  }}
                >
                  <h3>68</h3>
                  <p>Posts</p>
                </div>
                <div
                  style={{
                    borderRight: "1px solid black",
                    paddingRight: "20px",
                  }}
                >
                  <h3>345k</h3>
                  <p>Followers</p>
                </div>
                <div
                  style={{
                    borderRight: "1px solid black",
                    paddingRight: "20px",
                  }}
                >
                  <h3>7890</h3>
                  <p>Likes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <div>
            <h3>Ritu Singh</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et
              velit ad accusamus ipsum inventore laborum, amet deleniti maiores
              minus cum atque! Iusto maxime corporis dolorum expedita totam,
              doloribus deleniti?Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Fuga dolore neque quasi deserunt recusandae
              aliquid, illum ullam veniam consectetur rem. Doloribus aperiam
              consequatur minus esse omnis, eligendi impedit ad laborum.
            </p>
          </div>
          <div>
            <h3>Recent Posts</h3>
            <div></div>
          </div>
        </div>
      </div>
      <div className="right-container">
        <h2>Suggestions...</h2>
        <div style={{ marginTop: "20px" }}>
          <div
            style={{ marginBottom: "60px", borderBottom: "1px solid black" }}
          >
            <div className="user1">
              <Avatar size={64} icon={<UserOutlined />} src="shashank.jpg" />
              <div>
                <h3>Shashank Gaur</h3>
                <p>@shashank456</p>
              </div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              quas explicabo sunt maiores nostrum error, ratione expedita amet
              eum distinctio. Temporibus molestiae ex dolore atque, odit ducimus
              sed corporis consequuntur?
            </div>
          </div>
          <div
            style={{ marginBottom: "60px", borderBottom: "1px solid black" }}
          >
            <div className="user2">
              <Avatar size={64} icon={<UserOutlined />} src="Vaidhei.jpg" />
              <div>
                <h3> Vaidhei Arya</h3>
                <p>@78Vaidhei</p>
              </div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              illo corrupti dolore aspernatur architecto ex, quidem rerum
              mollitia optio atque natus, ipsa saepe aperiam fugiat distinctio
              expedita? Provident, aut similique.
            </div>
          </div>
          <div
            style={{ marginBottom: "60px", borderBottom: "1px solid black" }}
          >
            <div className="user3">
              <Avatar size={64} icon={<UserOutlined />} src="Mansi.jpg" />
              <div>
                <h3>Mansi Chauhan</h3>
                <p>@mansii9800</p>
              </div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              dolores atque dolor. Consectetur minus deserunt incidunt nostrum
              non cumque reiciendis nobis praesentium commodi molestias,
              reprehenderit adipisci sunt officiis numquam unde!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
