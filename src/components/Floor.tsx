
import '../index.css'
import ToolBarButton from './ToolBarButton.tsx'

export default function Floor({ arr, title, setPlayVideo }: { arr: string[], title: string, setPlayVideo: (value: boolean) => void; }) {

    return (

        <div className="md:w-1/3 collapse bg-base-300 w-72 h-auto border-2 border-accent bg-opacity-50 m-2 ">
            <input className='m-0 p-0' type="radio" name="my-accordion-1" defaultChecked />
            <div className="md:text-lg collapse-title text-sm text-accent p-1 m-1  ">
                {title}
            </div>
            <div className="collapse-content flex flex-wrap justify-center p-0 m-0">
                {arr.map((element: string) => (

                    <ToolBarButton key={element} name={element} setPlayVideo={setPlayVideo} />
                ))}
            </div>
        </div>
    )
}