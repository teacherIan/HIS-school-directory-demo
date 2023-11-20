//@ts-expect-error no actual error here...
import vid from '../assets/theBox.m4v'
import '../index.css'

export default function PlayVideo({ setPlayVideo }: { setPlayVideo: (value: boolean) => void }) {

    return (
        <video onEnded={() => setPlayVideo(false)} className='w-screen h-screen' autoPlay>
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
        </video>


    )
}