import cars from '@/assets/cars.json'
import CarItem from '@/components/CarItem'
import { Car } from '@/types/car'

export default async function Cars() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {cars.map((car: Car) => (
                <CarItem key={car.id} car={car} />
            ))}
        </div>
    )
}
