import { Outlet, NavLink } from "react-router-dom";
import { ReactComponent as SettingsIcon } from "../../assets/settings.svg";
import { ReactComponent as CampaignsIcon } from "../../assets/campaigns.svg";
import Button from "../../components/Button";
import useDarkSide from "../../hooks/useDarkSide";

function Dashboard() {
    const [colorTheme, setTheme] = useDarkSide();

    return (
        <div className="flex md:flex-row-reverse flex-wrap dark:bg-slate-900">
            <nav className="w-full md:w-1/5 px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen md:border-r-4 border-secondary">
                <ul className="list-reset flex flex-row md:flex-col gap-1 text-center md:text-left">
                    <li className="md:m-auto">
                        <Button onClick={() => setTheme(colorTheme)}>
                            {colorTheme === "dark"
                                ? <svg id="theme-toggle-dark-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                                : <svg id="theme-toggle-light-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                            }
                        </Button>
                    </li>
                    <li>
                        <NavLink to="/" className={({ isActive }) => `${isActive ? "text-white bg-primary" : "text-black hover:bg-primary"} dark:text-white w-full font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center`}>
                            <CampaignsIcon />
                            Campaigns
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" className={({ isActive }) => `${isActive ? "bg-primary text-white" : "text-black hover:bg-primary"} dark:text-white w-full font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center`}>
                            <SettingsIcon />
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <main className="w-full h-screen md:w-4/5 p-10">
                <Outlet />
            </main>
        </div>
    )
}

export default Dashboard;