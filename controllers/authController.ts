import { Request, Response } from "express";
import { validateCredentials } from "../services/authService.ts";

// GET login form
export const getLogin = (req: Request, res: Response) => {
  res.render("login", {
    title: "Login",
    formAction: "/login",
    username: "",
    errorEmail: false,
    errorMessage: null,
  });
};

// POST login form
export const postLogin = (req: Request, res: Response): void => {
  try {
    const { username, password } = req.body;

    if (validateCredentials(username, password)) {
      (req.session as any).user = username;
      res.redirect("/dashboard");
      return;
    }

    res.render("login", {
      title: "Login",
      formAction: "/login",
      username,
      errorEmail: true,
      errorMessage: "Invalid username or password",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDashboard = (req: Request, res: Response): void => {
  const username = (req.session as any).user
  res.render("home", { username});
  return;
};


export const logout = (req: Request, res: Response): void => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      res.status(500).send("Failed to log out.");
      return;
    }
    res.clearCookie("connect.sid");
    res.redirect("/");
  });
};
