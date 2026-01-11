import React, { useState } from "react";

function PromiseMe() {
  function something() {
    const usersPromise = fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json());
    const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json());

    Promise.all([usersPromise, postsPromise])
      .then(([users, posts]) => {
        console.log("Users:", users);
        console.log("Posts:", posts);
      })
      .catch(err => console.error("Error:", err));
  }

  const asyncAwait = async () => {
    try {
      const [usersRes, postsRes] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/posts")
      ]);
      const users = await usersRes.json();
      const posts = await postsRes.json();
      console.log("Users:", users);
      console.log("Posts:", posts);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const [flag, setFlag] = useState(true);

  return (
    <>
      { !flag ? (
        <button onClick={something}>Pure Promise method</button>
      ) : (
        <button onClick={asyncAwait}>Pure async approach</button>
      )}
      <br />
      <button onClick={() => setFlag(!flag)}>Toggle me</button>
    </>
  );
}

export default PromiseMe;
