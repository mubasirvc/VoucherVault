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
  res.render("dashboard", { username: '' });
  return
};
