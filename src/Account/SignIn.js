import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { getApps, getApp, initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import { firebaseConfig } from "../settings/firebaseConfig";
import AppMenu from "../UI/AppMenu";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
export default function SignIn() {
  console.log(firebaseConfig);
  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

  const auth = getAuth(app);
  const [account, setAccount] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const handleChange = function (event) {
    setMessage("");
    setAccount({ ...account, [event.target.name]: event.target.value });
  };

  const handleSubmit = async function () {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        account.email,
        account.password
      );
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
      const user = auth.currentUser;
      const displayName = user !== null ? user.displayName : "";
      const docSnap = await getDoc(doc(db, "user", user.uid), {
        school: account.school
      });
      const school = docSnap.exists() ? docSnap.data().school : "";

      setMessage(school + "/" + displayName + "已成功登入");
      console.log(res);
    } catch (error) {
      let message = "";
      console.log(error.code);
      switch (error.code) {
        case "auth/wrong-password":
          message = "密碼錯誤";
          break;
        case "auth/user-not-found":
          message = "無此帳號";
          break;
        default:
          message = "系統錯誤:" + error.code;
      }
      setMessage(message);
    }
  };
  const handleLogout = async function () {
    await signOut(auth);
    setMessage("已登出");
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
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: 10 }}
            onClick={handleSubmit}
          >
            登入
          </Button>
          <Button variant="outlined" color="primary" onClick={handleLogout}>
            登出
          </Button>
        </div>
      </div>
    </>
  );
}
