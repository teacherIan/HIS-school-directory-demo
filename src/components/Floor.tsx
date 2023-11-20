
import '../index.css'
import ToolBarButton from './ToolBarButton.tsx'

export default function Floor({ arr, title, setPlayVideo }: { arr: string[], title: string, setPlayVideo: (value: boolean) => void; }) {

    return (

        <div className="collapse bg-base-300 w-1/3 border-2 border-accent bg-opacity-50 m-2 ">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title text-xl font-medium text-accent ">
                {title}
            </div>
            <div className="collapse-content flex flex-wrap justify-center">
                {arr.map((element: string) => (

                    <ToolBarButton key={element} name={element} setPlayVideo={setPlayVideo} />
                ))}
            </div>
        </div>
    )
}