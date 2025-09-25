// components/admin/AdminDashboard.tsx
import React from "react";
import EntrySidebar from "./EntrySidebar";
import "../../styles/components/AdminDashboard.scss";

interface Props {
    children: React.ReactNode;
}

const AdminDashboard: React.FC<Props> = ({ children }) => {
    return (
        <div className="admin-dashboard">
            <EntrySidebar />
            <main className="admin-content">
                {children}
            </main>
        </div>
    );
}

export default AdminDashboard;