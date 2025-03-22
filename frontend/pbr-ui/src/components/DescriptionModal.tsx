import CloseIcon from "./icons/CloseIcon"

interface DescriptionModalProps {
    isOpen: boolean,
    setIsOpen(arg0: boolean): void,
    description: string
}

export default function DescriptionModal({ isOpen, setIsOpen, description }: DescriptionModalProps) {
    function handleClose() {
        setIsOpen(false);
    }
    return <div>
        {isOpen && <div className="top-0 left-0 fixed h-screen w-screen bg-black bg-opacity-60 flex justify-center items-center z-[999]">
            <div className="bg-myBlack-500 p-6 text-white rounded-md text-pretty h-fit w-[35%]">
                <div className="flex justify-between pb-3">
                    <h1 className="text-3xl">Summary</h1>
                    <CloseIcon size="size-s" onClick={handleClose}></CloseIcon>
                </div>
                <div id="description" className="text-wrap text-lg">
                    {description ?? "No description available"}
                </div>
            </div>
        </div>}
    </div>
}