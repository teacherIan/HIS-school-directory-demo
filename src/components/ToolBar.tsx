import '../index.css'
import Floor from './Floor'
import hisLogo from '../assets/hisLogo.png'


function ToolBar({ setPlayVideo }: { setPlayVideo: (value: boolean) => void; }) {

    {/** Floor locations.  TODO: add to external js file for storage */ }
    const firstFloor = ["LS Library", "US Library", "Nurses Office", "Elevator"]
    const secondFloor = ["Box", "Grade 2", "Grade 3", "Languages", "Tech Shack"]
    const thirdFloor = ["Grade 4", "LS Languages", "US Languages", "Grade 6"]
    const forthFloor = ["Grade 5", "US Library", "Nurses Office", "Design Tech"]
    const fifthFloor = ["LS Library", "VR Lab", "HS Classrooms", "Science Lab"]


    return (
        <>
            <div className=" m-2 card w-1/2 h-25  bg-accent text-base-300 bg-opacity-100 border-base-300 border-4 shadow-2xl">
                <img src={hisLogo} className='p-2 ' />
                <div className="card-body">
                    <h1 className='text-xl h-2 font-bold'>Directory</h1>

                </div>
            </div>
            <Floor title={"First Floor"} arr={firstFloor} setPlayVideo={setPlayVideo} />
            <Floor title={"Second Floor"} arr={secondFloor} setPlayVideo={setPlayVideo} />
            <Floor title={"Third Floor"} arr={thirdFloor} setPlayVideo={setPlayVideo} />
            <Floor title={"Forth Floor"} arr={forthFloor} setPlayVideo={setPlayVideo} />
            <Floor title={"Fifth Floor"} arr={fifthFloor} setPlayVideo={setPlayVideo} />

        </>
    )
}

export default ToolBar