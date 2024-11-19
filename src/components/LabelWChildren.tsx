import { ReactNode } from 'react'

interface LabelWChildrenProps {
    label: string
    children: ReactNode
    centered?: boolean
    color?: string
}

export default function LabelWChildren({
    label,
    children,
    centered,
    color,
}: LabelWChildrenProps) {
    return (
        <div>
            <p
                style={{ color }}
                className={`break-words ${centered ? 'text-center' : ''}`}
            >
                <p className="text-black inline-block">{label}:</p> {children}
            </p>
        </div>
    )
}
