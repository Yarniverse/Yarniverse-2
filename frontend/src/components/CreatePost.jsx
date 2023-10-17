import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../contexts/current-user-context";

export default function CreateAPost() {
  const { currentUser } = useContext(CurrentUserContext);
  console.log(currentUser);

  const [errorText, setErrorText] = useState("");
  const [context, setContext] = useState("");
  const getFetchOptions = (body, method = "POST") => ({
    method,
    credentials: "include", // IMPORTANT, this tells fetch to include cookies
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorText("");
    if (!context) return setErrorText("Enter post content");
    const formData = new FormData(e.target);
    const formInfo = Object.fromEntries(formData.entries());
    console.log(formInfo);
    const options = getFetchOptions(formInfo, "POST");
    const result = await fetch(`/api/posts`, options);
    const r = await result.json();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "context") setContext(value);
  };
  return (
    <>
      {!!errorText && <p>{errorText}</p>}
      <form onSubmit={handleSubmit} id="name-form">
        <input type="hidden" name="user_id" value={currentUser} />
        <input
          onChange={handleChange}
          type="text"
          name="context"
          id="context"
          value={context}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
