import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import SearchBox from "../../components/SearchBox";
import { ReactComponent as GoogleDriveIcon } from "../../assets/googledrive.svg"
import { ReactComponent as HubspotIcon } from "../../assets/hubspot.svg"
import { ReactComponent as PipedriveIcon } from "../../assets/pipedrive.svg"

const clouds = {
    googleDrive: "Google Drive",
    hubspot: "Hubspot",
    pipedrive: "Pipedrive"
}

function Campaigns() {
    const navigate = useNavigate();
    const [selectedButton, setSelectedButton] = useState("");

    function goToSearch() {
        navigate("/search?q=");
    }

    return (
        <div className="flex flex-col h-full">
            <nav className="flex gap-1">
                <Button active={selectedButton === "googleDrive"} onClick={() => setSelectedButton("googleDrive")} color="secondary">
                    <GoogleDriveIcon />
                    {clouds.googleDrive}
                </Button>
                <Button active={selectedButton === "hubspot"} onClick={() => setSelectedButton("hubspot")} color="secondary">
                    <HubspotIcon />
                    {clouds.hubspot}
                </Button>
                <Button active={selectedButton === "pipedrive"} onClick={() => setSelectedButton("pipedrive")} color="secondary">
                    <PipedriveIcon />
                    {clouds.pipedrive}
                </Button>
                <SearchBox onKeyDown={goToSearch} />
            </nav>
            <div className="flex flex-1">
                <div className="m-auto">
                    {clouds[selectedButton]}
                </div>
            </div>
        </div>
    )
}

export default Campaigns