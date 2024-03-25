'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { searchParamsToTypeNames, searchParamsToTypes } from "../../lib/queryParams";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAlgorithmsMockData, getProbabilityMockData, Result } from "@/app/lib/mockData";
import Catalog from "@/app/ui/Catalog/Catalog";

export default function Page() {
    
    const [data, setData] = useState<Result[]>([])

    const searchParams = useSearchParams();
    const types = searchParamsToTypeNames(searchParams);

    useEffect(() => {
        const d = getAlgorithmsMockData();
        setData(d);
    }, []);

    return (
        <Catalog
            category="Probability Distributions"
            data={data}
            filterTypes={types}
        />
    )
}