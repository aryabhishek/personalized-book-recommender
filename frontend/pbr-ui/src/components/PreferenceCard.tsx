interface PreferenceCardProps {
    isSelected: boolean,
    onClick: () => void,
    text: string
}

const defaultStyles = "text-xl mt-4 border-2 border-slate-400 flex justify-center items-center rounded-md p-2 hover:cursor-pointer select-none";
const selectedStyles = "bg-blue-400";

export default function PreferenceCard(props: PreferenceCardProps) {
    return <div className={`${defaultStyles} ${props.isSelected && selectedStyles}`} onClick={props.onClick}>
        {props.text}
    </div>
}