import { useHits } from 'react-instantsearch';
import SearchHits from "./SearchHits";

export default function SearchResults() {

    const { hits, results, sendEvent } = useHits();


    return(
        <div className="grid grid-cols-4">
            {hits.map((hit) =>
                <SearchHits hit={hit} />

            )}
        </div>
    )
}