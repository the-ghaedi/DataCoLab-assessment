
import { useNavigate } from "react-router-dom";
import SearchBox from "../../components/SearchBox";

function Settings() {
    const navigate = useNavigate();

    function goToSearch() {
        navigate("/search?q=");
    }

    return (
        <div className="flex flex-col h-full">
            <nav className="flex gap-1">
                <SearchBox onKeyDown={goToSearch} />
            </nav>
            <div className="flex flex-1">
                <div className="m-auto dark:text-white">
                    Settings
                </div>
            </div>
        </div>
    )
}

export default Settings