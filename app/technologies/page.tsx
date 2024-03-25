'use client'

import { usePathname, useSearchParams } from "next/navigation"

export default function Page() {

    const searchParams = useSearchParams();

    return (
        <span>
            Probability
        </span>
    )
}