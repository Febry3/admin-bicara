import { UserContext, UserContextType } from "@/contexts/user-context";
import { useContext } from "react";

export default function useUser(): UserContextType {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}