import { ReactNode } from "react";
import SideMenu from "../SideMenu/SideMenu";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div style={{ display: "flex" }}>
            <SideMenu />
            {children}
        </div>
    )
}
