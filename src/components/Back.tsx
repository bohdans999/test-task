'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Back() {
    const router = useRouter()

    return (
        <button
            className="p-2 flex items-center gap-2 duration-150 hover:underline"
            onClick={() => router.back()}
        >
            <Image src="/back-arrow.png" width={32} height={32} alt="Back" />
            Back
        </button>
    )
}
