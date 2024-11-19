import LabelWChildren from '@/components/LabelWChildren'
import { Car } from '@/types/car'
import Link from 'next/link'

interface CarItemProps {
    car: Car
}

export default function CarItem({ car }: CarItemProps) {
    return (
        <Link
            href={`/cars/${car.id}`}
            className="overflow-hidden duration-150 border-2 border-white rounded-xl p-4 flex flex-col gap-2 hover:border-black"
        >
            <LabelWChildren label="Vehicle">{car.vehicle}</LabelWChildren>

            <LabelWChildren label="Model">{car.model}</LabelWChildren>

            <LabelWChildren label="Color" color={car.color}>
                {car.color}
            </LabelWChildren>
        </Link>
    )
}
