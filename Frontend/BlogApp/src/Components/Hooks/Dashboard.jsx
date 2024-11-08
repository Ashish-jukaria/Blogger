import React, { useState } from "react";
import { useAuth } from "./useAuth";
import axios from "axios";
import { useEffect } from "react";
import Creation from "../Creation";
import BlogCard from "../BlogCard";
import BlogEdit from "../BlogEdit";
import '../Styling/Dashboard.css'
export default function Dashboard() {
  const [createblog, setcreateBlog] = useState({
    title: "",
    description: "",
    body: "",
    image: "",
  });
  const [blogs, setBlogs] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editblogid, seteditblogid] = useState("");
  const [title, settitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [creation, setCreation] = useState(false);
  async function getUserBlog() {
    const response = await axios.get("https://blogger-c93i.onrender.com/getuserblog", {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    console.log(response.data);
    if (response.status == 200) {
      setBlogs(response.data);
    }
  }
  const auth = useAuth();
  useEffect(() => {
    getUserBlog();
  }, []);
  async function handleDelete(blog) {
    const response = await axios.delete(
      `https://blogger-c93i.onrender.com/deleteblog/${blog._id}`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    if (response.status == 200) {
      getUserBlog();
    }
  }
  async function handleEdit(blog) {
    setEdit(!edit);
    settitle(blog.title);
    setDescription(blog.description);
    seteditblogid(blog._id);
    setBody(blog.body);
    setImage(blog.image);
    if (edit) {
      const response = await axios.put(
        `https://blogger-c93i.onrender.com/updateblog/${blog._id}`,
        {
          title: title,
          description: description,
          body: body,
          image: image,
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      if (response.status == 201) {
        getUserBlog();
      }
    }
  }

  async function handleCreation() {
    setCreation(!creation);
    console.log(createblog);

    if (creation) {
      const response = await axios.post(
        "https://blogger-c93i.onrender.com/createblog",
        createblog,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      if (response.status == 201) {
        getUserBlog();
      }
    }
  }
  return (
    <div className="dashboardmain">
      {creation && (
        <Creation createblog={createblog} setcreateBlog={setcreateBlog} />
      )}
      <div className="dashboardCreateBlog" onClick={handleCreation}>{!creation?'Create Blogs':'Confirm'}</div>
      <div className="dashboardelemain">
        {blogs.map((blog) => (
          <div key={blog._id}>
            {edit && editblogid === blog._id ? (
              <>
                <BlogEdit
                  editblogid={editblogid}
                  setImage={setImage}
                  setBody={setBody}
                  settitle={settitle}
                  setDescription={setDescription}
                  blog={blog}
                  handleEdit={handleEdit}
                />
              </>
            ) : (
              <>
              <button className="dashboardeditbutton" onClick={() => handleEdit(blog)}>Edit</button>
              <button className="dashboarddeletebutton" onClick={() => handleDelete(blog)}>Delete</button>
                <BlogCard item={blog} />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
