import express from "express";
import { 
    addProject, 
    addTimeline, 
    addYoutube, 
    contact, 
    deleteProject, 
    deleteTimeline, 
    deleteYoutube, 
    getUser, 
    login, 
    logout, 
    myProfile, 
    updateUser } from "../controller/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

export const UserRouter = express.Router();

UserRouter.route("/login").post(login)

UserRouter.route("/logout").get(logout)

UserRouter.route("/user").get(getUser)

UserRouter.route("/me").get(isAuthenticated, myProfile);

UserRouter.route("/admin/update").put(isAuthenticated, updateUser);

UserRouter.route("/admin/timeline/add").post(isAuthenticated, addTimeline);
UserRouter.route("/admin/youtube/add").post(isAuthenticated, addYoutube);
UserRouter.route("/admin/project/add").post(isAuthenticated, addProject);

UserRouter.route("/admin/timeline/:id").delete(isAuthenticated, deleteTimeline);
UserRouter.route("/admin/youtube/:id").delete(isAuthenticated, deleteYoutube);
UserRouter.route("/admin/project/:id").delete(isAuthenticated, deleteProject);

UserRouter.route("/contact").post(contact);