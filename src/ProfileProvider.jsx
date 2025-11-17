import { useEffect, useState } from "react";
import { ProfileContext } from "./ProfileContext";

export function ProfileProvider({ children }) {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (profile !== null) {
            localStorage.setItem("profile", JSON.stringify(profile));
        }
    }, [profile]);

    useEffect(() => {
        const storedProfile = localStorage.getItem("profile");
        if (storedProfile) {
            try {
                const parsed = JSON.parse(storedProfile);
                setProfile(parsed);
            } catch (err) {
                console.error("Failed to parse profile from localStorage:", err);
                localStorage.removeItem("profile");
            }
        }
    }, []);


    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    )
}