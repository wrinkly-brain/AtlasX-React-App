import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
    const { profile } = useContext(ProfileContext);
    return (
        (profile && profile.isAdmin) ? <Outlet /> : <Navigate to='/ErrorPage' />
    )
}