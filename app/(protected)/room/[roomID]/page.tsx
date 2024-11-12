"use client";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { getUrlParams } from "@/lib/getUrlParams"; 

function randomID(len: number = 5): string {
    let result = "";
    const chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP";
    const maxPos = chars.length;
    for (let i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
}

export default function App(): JSX.Element {
    const router = useRouter();
    const roomID: string = getUrlParams().get("roomID") || randomID(5);

    const myMeeting = (element: HTMLDivElement | null) => {
        if (!element) return;

        (async () => {
            const appID = Number(process.env.NEXT_PUBLIC_ZEGO_APP_ID);
            const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET || "";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5));

            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: element,
                sharedLinks: [
                    {
                        name: "Personal link",
                        url:
                            window.location.protocol +
                            "//" +
                            window.location.host +
                            window.location.pathname +
                            "?roomID=" +
                            roomID,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
            });
        })();
    };

    const handleBackToVideoCall = () => {
        router.push("/videocall");
    };

    return (
        <div>
            <div
                className="myCallContainer"
                ref={myMeeting}
                style={{ width: "100vw", height: "100vh" }}
            ></div>
            <button
                className="bg-primary text-primary-foreground shadow hover:bg-primary/90 text-white font-bold cursor-pointer px-6 py-2 rounded-md flex items-center"
                onClick={handleBackToVideoCall}
            >
                <IoMdArrowRoundBack size={20} className="mr-2" />
                Back to Home
            </button>
        </div>
    );
}
