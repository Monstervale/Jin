import {Copy} from "lucide-react";
import {useState} from "react";

const CopyText = ({text}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2s
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div  className={"flex w-full h-full items-center justify-center gap-4 font-bold text-orange-600 text-[24px]"}>
            <h2>{text}</h2>
            <Copy onClick={handleCopy} width={18} height={18} className={`hover:text-orange-300 cursor-pointer ${copied && 'text-orange-300'}`} />
        </div>
    );
};

export default CopyText;