import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { firebaseConfig } from "../settings/firebaseConfig";
import AppMenu from "../UI/AppMenu";
export default function SignUp() {
  console.log(firebaseConfig);
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

  const auth = getAuth(app);
  const [account, setAccount] = useState({
    email: "",
    password: "",
    displayName: "",
    school: ""
  });
  const [message, setMessage] = useState("");
  const handleChange = function (event) {
    setMessage("");
    setAccount({ ...account, [event.target.name]: event.target.value });
  };

  const handleSubmit = async function () {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        account.email,
        account.password
      );
      setMessage("已成功註冊");
      console.log(res);
      console.log(res.user.uid);
      updateProfile(auth.currentUser, {
        displayName: account.displayName
      });
      const uid = res.user.uid;
      const db = getFirestore(app);
      await setDoc(doc(db, "user", uid), {
        email: account.email,
        password: account.password,
        displayName: account.displayName,
        school: account.school
      });
    } catch (error) {
      let message = "";
      switch (error.code) {
        case "auth/email-already-in-use":
          message = "電子信箱已存在";
          break;
        case "auth/weak-password":
          message = "密碼強度不足";
          break;
        case "auth/invalid-email":
          message = "電子郵件格式錯誤";
          break;
        default:
          message = "系統錯誤:" + error.code;
      }
      setMessage(message);
    }
  };

  return (
    <>
      <AppMenu />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: 40
        }}
      >
        <TextField
          type="text"
          name="displayName"
          value={account.displayName}
          placeholder="姓名"
          label="姓名:"
          onChange={handleChange}
        />
        <br />
        <TextField
          type="text"
          name="school"
          value={account.school}
          placeholder="學校"
          label="學校:"
          onChange={handleChange}
        />
        <br />
        <TextField
          type="email"
          name="email"
          value={account.email}
          placeholder="電子郵件信箱"
          label="電子郵件信箱:"
          onChange={handleChange}
        />
        <br />
        <TextField
          type="password"
          name="password"
          value={account.password}
          placeholder="密碼"
          label="密碼:"
          onChange={handleChange}
          autoComplete="current-password"
        />
        <br />
        {message}
        <br />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          註冊
        </Button>
      </div>
    </>
  );
}
