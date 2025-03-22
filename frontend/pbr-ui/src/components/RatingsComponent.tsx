import StarIcon from "./icons/StarIcon";

export default function RatingsComponent() {
    return <div className="flex justify-start gap-2 items-center size-fit">
        <div className="flex">
            <StarIcon></StarIcon>
            <h2><span className="font-bold">8.4</span>/10</h2>
        </div>
        <div>
            <h2>(10.7K)</h2>
        </div>
    </div>
}