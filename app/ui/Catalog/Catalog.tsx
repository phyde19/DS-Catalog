import { Result } from "@/app/lib/mockData"
import { SimpleGrid } from "@mantine/core";
import { useEffect, useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";

type Props = {
    category: string;
    data: Result[];
    filterTypes: string[];
}

export default function Catalog({ category, data, filterTypes }: Props) {
    const [results, setResults] = useState<Result[]>([]);
    console.log(data);
    console.log(filterTypes);
    
    const [search, setSearch] = useState('');

    const getUpdatedResults = (data: Result[], filterTypes: string[], searchQuery: string): Result[] => {
        const result: Result[] = [];

        for (let i = 0; i < data.length; i += 1) {
            if (!filterTypes.includes(data[i].type)) {
                continue;
            }
            if (searchQuery === '' || data[i].name.toLowerCase().includes(searchQuery.trim().toLowerCase())) {
                result.push(data[i]);
            }
        }
        return result;
    }


    useEffect(() => {
        const updatedResults = getUpdatedResults(data, filterTypes, search)
        setResults(updatedResults);
    }, [data, filterTypes, search]);

    return (
        <div className="flex flex-col items-center">
            <div className="w-full sm:w-80">
                <SearchBar 
                    search={search} 
                    setSearch={setSearch} 
                    searchResults={results}
                />
            </div>
            <SimpleGrid
                className="mt-8"
                cols={{ base: 1, sm: 2, lg: 5 }}
                spacing={{ base: 12, sm: 12 }}
            >
                {results.map(r => {
                    return <Card key={r.name} name={r.name} type={r.type} description={r.description} /> })}
            </SimpleGrid>
        </div>
  );
}