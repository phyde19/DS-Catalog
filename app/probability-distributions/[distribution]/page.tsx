'use client'

import { useRouter } from "next/navigation"

export default function Page({ params }: { params: { distribution: string } }) {
    const router = useRouter();
    return (
        <button onClick={() => router.back()}>back</button>
    )
}