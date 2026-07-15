"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import useSound from "use-sound";
import { Game } from "@/lib/games";
import { PageantSide } from "./pageantShowdownConfig";
import { KodaEntry } from "./kodaPool";

interface PageantShowdownWindowProps {
    game: Game;
    chosenSide: PageantSide | null;
    outcome: PageantSide | null;
    isRevealing: boolean;
    gameCompleted: boolean;
    betAmount: number;
    payoutAmount: number;
    leftKoda: KodaEntry;
    rightKoda: KodaEntry;
}

const PageantShowdownWindow: React.FC<PageantShowdownWindowProps> = ({
    game,
    chosenSide,
    outcome,
    isRevealing,
    gameCompleted,
    betAmount,
    payoutAmount,
    leftKoda,
    rightKoda,
}) => {
    // TODO: get muteSfx, sfxVolume from useUserPreferences, same as the
    // template's original MyGameWindow does.
    const muteSfx = false;
    const sfxVolume = 0.5;

    const [winSFX] = useSound("/pageant-showdown/sfx/win.mp3", {
        volume: sfxVolume,
        soundEnabled: !muteSfx,
        interrupt: true,
    });
    const [loseSFX] = useSound("/pageant-showdown/sfx/lose.mp3", {
        volume: sfxVolume,
        soundEnabled: !muteSfx,
        interrupt: true,
    });
    const [flipSFX] = useSound("/pageant-showdown/sfx/flip.mp3", {
        volume: sfxVolume,
        soundEnabled: !muteSfx,
        interrupt: true,
    });

    // Play the flip sound the moment the reveal animation starts.
    React.useEffect(() => {
        if (isRevealing) flipSFX();
    }, [isRevealing, flipSFX]);

    // Win/lose sfx once the result actually lands.
    React.useEffect(() => {
        if (gameCompleted) {
            const won = payoutAmount > 0;
            if (won) winSFX();
            else loseSFX();
        }
    }, [gameCompleted, payoutAmount, winSFX, loseSFX]);

    const won = gameCompleted && payoutAmount > 0;

    return (
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center text-white bg-gradient-to-b from-[#1a1030] via-[#120a24] to-[#0a0614]">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 text-center px-4">
                <p className="text-xs tracking-[0.2em] uppercase text-amber-300/80">Who wins this</p>
                <p className="text-lg sm:text-xl font-bold text-amber-100">Koda Pageant?</p>
            </div>

            <div className="relative flex items-center justify-center gap-3 sm:gap-6 w-full h-full px-6 pt-16 pb-10">
                {/* Left contestant */}
                <PageantPortrait
                    side="left"
                    imageSrc={leftKoda.image}
                    tokenId={leftKoda.id}
                    isChosen={chosenSide === "left"}
                    isRevealing={isRevealing}
                    isWinner={gameCompleted && outcome === "left"}
                    isLoser={gameCompleted && outcome === "right"}
                />

                <div className="flex flex-col items-center justify-center z-10 shrink-0">
                    <span className="text-2xl sm:text-3xl font-black text-amber-200/90 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
                        VS
                    </span>
                </div>

                {/* Right contestant */}
                <PageantPortrait
                    side="right"
                    imageSrc={rightKoda.image}
                    tokenId={rightKoda.id}
                    isChosen={chosenSide === "right"}
                    isRevealing={isRevealing}
                    isWinner={gameCompleted && outcome === "right"}
                    isLoser={gameCompleted && outcome === "left"}
                />
            </div>

            <AnimatePresence>
                {gameCompleted && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-center"
                    >
                        <p className={won ? "text-emerald-300 font-bold text-lg" : "text-red-300 font-bold text-lg"}>
                            {won ? `You called it! +${payoutAmount.toFixed(2)}` : `Wrong side — lost ${betAmount.toFixed(2)}`}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

interface PageantPortraitProps {
    side: PageantSide;
    imageSrc: string;
    tokenId: number;
    isChosen: boolean;
    isRevealing: boolean;
    isWinner: boolean;
    isLoser: boolean;
}

const PageantPortrait: React.FC<PageantPortraitProps> = ({
    imageSrc,
    tokenId,
    isChosen,
    isRevealing,
    isWinner,
    isLoser,
}) => {
    return (
        <motion.div
            className="relative w-[38%] max-w-[220px] aspect-square rounded-xl overflow-hidden border-4"
            style={{
                borderColor: isWinner ? "#fbbf24" : isChosen ? "#60a5fa" : "#2A3640",
                boxShadow: isWinner ? "0 0 24px rgba(251,191,36,0.6)" : isChosen ? "0 0 14px rgba(96,165,250,0.4)" : "none",
            }}
            animate={
                isRevealing
                    ? { rotateY: [0, 180, 360], opacity: [1, 0.6, 1] }
                    : { rotateY: 0 }
            }
            transition={isRevealing ? { duration: 1.6, ease: "easeInOut" } : { duration: 0.3 }}
        >
            <Image
                src={imageSrc}
                alt={`Koda #${tokenId}`}
                fill
                unoptimized
                className={`object-cover ${isLoser ? "opacity-40 grayscale" : ""}`}
            />
            <div className="absolute bottom-1 left-1 bg-black/60 text-[10px] font-semibold px-1.5 py-0.5 rounded">
                #{tokenId}
            </div>
            {isChosen && (
                <div className="absolute top-1 right-1 bg-blue-500/90 text-[10px] font-bold px-1.5 py-0.5 rounded">
                    YOUR PICK
                </div>
            )}
        </motion.div>
    );
};

export default PageantShowdownWindow;
