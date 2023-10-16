import { useContext, useState, useEffect } from "react";

export default function CreateAProject({ userID }) {
  const [errorText, setErrorText] = useState("");
  const [project_name, setProjectName] = useState("");
  const [project_description, setProjectDescription] = useState("");
  const [hook_size, setHookSize] = useState("");
  const getFetchOptions = (body, method = "POST") => ({
    method,
    credentials: "include", // IMPORTANT, this tells fetch to include cookies
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorText("");
    if (!project_name) return setErrorText("Missing project name");
    if (!project_description)
      return setErrorText("Missing project description");
    if (!hook_size) return setErrorText("Missing hook size");

    const formData = new FormData(e.target);
    console.log(formData);
    const formInfo = Object.fromEntries(formData.entries());
    console.log(formInfo);
    const options = getFetchOptions(formInfo, "POST");
    const result = await fetch(`/api/projects`, options);
    const r = await result.json();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "project_name") setProjectName(value);
    if (name === "project_description") setProjectDescription(value);
    if (name === "hook_size") Number(setHookSize(value));
  };

  return (
    <>
      {!!errorText && <p>{errorText}</p>}
      <form onSubmit={handleSubmit} id="name-form">
        <input type="hidden" name="user_id" value={parseInt(userID.user_id)} />
        <input
          onChange={handleChange}
          type="text"
          name="project_name"
          id="project_name"
          placeholder="Enter project name"
          value={project_name}
        />
        <input
          onChange={handleChange}
          type="text"
          id="project_description"
          name="project_description"
          placeholder="Enter project description"
          value={project_description}
        />
        <input
          onChange={handleChange}
          type="number"
          id="hook_size"
          name="hook_size"
          placeholder="3"
          value={hook_size}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
