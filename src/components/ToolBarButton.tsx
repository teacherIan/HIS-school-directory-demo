
export default function ToolBarButton({ name, setPlayVideo }: { name: string, setPlayVideo: (value: boolean) => void; }) {

    function clickHandler() {
        setPlayVideo(true)
    }

    return (
        <>
            <button onClick={clickHandler} className="btn btn-outline btn-accent m-1 border-2 w-1/4 h-1/3 text-sm ">{name}</button>

        </>
    )
}