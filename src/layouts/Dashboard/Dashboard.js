import { Outlet, NavLink } from "react-router-dom";
import { ReactComponent as SettingsIcon } from "../../assets/settings.svg";
import { ReactComponent as CampaignsIcon } from "../../assets/campaigns.svg";

function Dashboard() {
    return (
        <div className="flex md:flex-row-reverse flex-wrap">
            <nav className="w-full md:w-1/5 px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 border-secondary">
                <ul className="list-reset flex flex-row md:flex-col gap-1 text-center md:text-left">
                    <li>
                        <NavLink to="/" className={({ isActive }) => `${isActive ? "text-white bg-primary" : "text-black hover:bg-primary"} w-full font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center`}>
                            <CampaignsIcon />
                            Campaigns
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" className={({ isActive }) => `${isActive ? "bg-primary text-white" : "text-black hover:bg-primary"} w-full font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center`}>
                            <SettingsIcon />
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <main className="w-full md:h-screen md:w-4/5 p-10">
                <Outlet />
            </main>
        </div>
    )
}

export default Dashboard;