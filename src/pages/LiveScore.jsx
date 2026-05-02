import LiveScore from "../components/LiveScore";
import TerminatedHero from "../components/TerminatedHero";

export default function LiveScorePage() {
    return (
        <div className="min-h-screen">
            <div className='flex flex-col'>
                <div className="text-center">
                    <h1 className='text-2xl font-bold text-yellow-300 mb-2'>Match Termination Notice</h1>
                    <img src="/rain_termination.jpg" className='h-lg w-lg   md:w-xl mx-auto rounded-lg border-2 border-yellow-300' alt="Rain Termination" />
                </div>


            </div>
        </div>
    );
}
