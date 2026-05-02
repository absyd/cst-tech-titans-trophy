import LiveScore from "../components/LiveScore";
import TerminatedHero from "../components/TerminatedHero";

export default function LiveScorePage() {
    return (
        <div className="min-h-screen">
            <div className="pt-12">
                {/* <LiveScore /> */}
                <TerminatedHero/>
            </div>
        </div>
    );
}
