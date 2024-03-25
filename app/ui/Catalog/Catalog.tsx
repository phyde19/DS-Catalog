import { Result } from "@/app/lib/mockData"
import { SimpleGrid } from "@mantine/core";
import { useEffect, useState } from "react";
import Card from "./Card";

type Props = {
    category: string;
    data: Result[];
    filterTypes: string[];
}

export default function Catalog({ category, data, filterTypes }: Props) {
    const [results, setResults] = useState<Result[]>([]);
    console.log(data);
    console.log(filterTypes);

    useEffect(() => {
        setResults(data.filter(dataItem => filterTypes.includes(dataItem.type)));
    }, [data, filterTypes]);

    return (
        <div className="">
            <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 5 }}
                spacing={{ base: 12, sm: 12 }}
            >
                {results.map(r => {
                    return <Card name={r.name} type={r.type} description={r.description} /> })}
            </SimpleGrid>
        </div>
  );
}