import cars from '@/assets/cars.json'
import Back from '@/components/Back'
import LabelWChildren from '@/components/LabelWChildren'

interface CarProps {
    params: Promise<{ id: string }>
}

export default async function Car({ params }: CarProps) {
    const id = (await params).id
    const car = cars.find((car) => car.id === +id)

    return (
        <div className="flex flex-col gap-4 items-start">
            <Back />

            {car ? (
                <div className="flex justify-center w-full">
                    <div className="flex flex-col gap-4 items-center p-4 border-2 border-black">
                        <LabelWChildren label="Vehicle" centered>
                            {car.vehicle}
                        </LabelWChildren>

                        <LabelWChildren label="Model" centered>
                            {car.model}
                        </LabelWChildren>

                        <LabelWChildren
                            label="Color"
                            color={car.color}
                            centered
                        >
                            {car.color}
                        </LabelWChildren>
                    </div>
                </div>
            ) : (
                <p className="w-full text-center text-2xl py-4">
                    Car not found
                </p>
            )}
        </div>
    )
}
