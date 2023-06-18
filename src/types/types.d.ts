import { IconType } from "react-icons";

export interface SideBarMenuitem {
    id: String;
    label: String;
    icon: IconType;
    url: String;
}

export interface SideBarMenucard {
    id: String,
    displayName: String,
    photoURL: String,
    title: String,
    url: String,
}