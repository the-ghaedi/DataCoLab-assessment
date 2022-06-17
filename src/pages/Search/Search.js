import { useSearchParams } from "react-router-dom";
import SearchBox from "../../components/SearchBox";

function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get("q");

    function handleChange(value) {
        setSearchParams({ q: value });
    }

    return (
        <div className="flex flex-col h-full">
            <nav className="flex">
                <SearchBox fullWidth autoFocus q={q} onChange={handleChange} />
            </nav>
            <div className="flex flex-1">
                <div className="m-auto">
                    {q}
                </div>
            </div>
        </div>
    )
}

export default Search