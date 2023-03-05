import { useLocation, useSearchParams } from "react-router-dom";

function Search() {
    const [searchParams, _] = useSearchParams();
    const keyword = searchParams.get("keyword");
    console.log(keyword);
    return null;
}
export default Search;
