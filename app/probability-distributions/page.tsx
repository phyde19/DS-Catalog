'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { searchParamsToTypes } from "../lib/queryParams";
import Link from "next/link";

export default function Page() {
    const router = useRouter();

    const searchParams = useSearchParams();
    const types = searchParamsToTypes(searchParams);

    return (
        <>
            <span>
                Probability
            </span>
            <Link href={'probability-distributions/binomial'}>New</Link>
        </>
    )
}