import Dropzone from "components/dropzone";
import {
    Code as CodeIcon,
    Download as DownloadIcon,
    Info as InfoIcon,
    XCircle as StartOverIcon,
} from "lucide-react";
import Link from "next/link";

export default function EditFooter({ events, startOver, handleImageDropped }) {
    return (
        <footer className="w-full my-8">
            <div className="text-center">

                {events.length > 1 && (
                    <button className="lil-button" onClick={startOver}>
                        <StartOverIcon className="icon" />
                        Start over
                    </button>
                )}

                <Dropzone onImageDropped={handleImageDropped} />
            </div>
        </footer>
    );
}