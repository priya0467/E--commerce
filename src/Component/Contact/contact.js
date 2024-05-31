import React, { useState } from "react";
import { UseuserAuth } from "../../Context/UserAuth";
import classes from "./contact.module.css";

const ContactUs = () => {
  const { user } = UseuserAuth(); // Get the authenticated user
  const [userData, setUserData] = useState({
    name: "",
    email: user?.email || "", // Use the authenticated user's email if available
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = userData;

    try {
      const res = await fetch("https://ecommerce-d5844-default-rtdb.firebaseio.com//userdatarecode.json", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (res.ok) {
        alert("Data stored successfully!");
        setUserData({
          name: "",
          email: user?.email || "", // Reset email to authenticated user's email
          message: "",
        });
      } else {
        alert("Failed to store data.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while storing data.");
    }
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className={classes.contact1}>
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className={classes.contact2}
          required
          value={userData.name}
          onChange={handleChange}
        />
      </div>
      <div className={classes.contact3}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className={classes.contact4}
          required
          value={userData.email}
          onChange={handleChange}
        />
      </div>
      <div className={classes.contact5}>
        <textarea
          placeholder="Your message"
          name="message"
          className={classes.contact6}
          required
          value={userData.message}
          onChange={handleChange}
        />
      </div>
      <div className={classes.contact7}>
        <button className={classes.contact8} type="submit">
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactUs;


