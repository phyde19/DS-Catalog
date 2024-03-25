'use client'

import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation"

export default function Page({ params }: { params: { distribution: string } }) {
    const router = useRouter();
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button
                className="flex"
                onClick={() => router.back()}
            >
                <ArrowLeftIcon className="w-6 h-6 mr-4"></ArrowLeftIcon>
                <span>
                    Back 
                </span>
            </button>
        </div>
    )
}