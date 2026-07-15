import { Game } from "@/lib/games";

export type GameLayout = "two-column" | "full-size";
export const pageantShowdownLayout: GameLayout = "two-column";

/** Which side of the matchup the player is backing / which side actually won. */
export type PageantSide = "left" | "right";

/**
 * This game's win condition is a direct comparison (chosenSide === outcome),
 * not a lookup through the generic 3-reel PayoutStructure the slot-style
 * games use — so the multiplier lives here as a plain constant rather than
 * buried in a payouts table. It's still 2x-or-nothing under the hood.
 */
export const WIN_MULTIPLIER = 2;

export const pageantShowdown: Game = {
    title: "Koda Pageant Showdown",
    description:
        "Who wins this Koda Pageant? Pick a side, watch the vote flip, and double your bet if you called it right.",
    gameAddress: "0x0000000000000000000000000000000000000000", // TODO: replace with the deployed game contract address
    gameBackground: "/pageant-showdown/background.png", // TODO: supply — dark navy/gold arena background matching KodaPageant's site theme
    card: "/pageant-showdown/card.png", // TODO: supply — 1:1, min 512x512
    banner: "/pageant-showdown/banner.png", // TODO: supply — 2:1, min 1024x512
    themeColorBackground: "#1a1030",
    song: "/pageant-showdown/audio/song.mp3", // TODO: supply — optional ambient loop
    // Required by the Game type but not actually read by this game's payout
    // logic (see WIN_MULTIPLIER above). Encodes the same flat 2x for either
    // resolved outcome so nothing downstream that inspects `.payouts` breaks.
    payouts: {
        0: { 0: { 0: WIN_MULTIPLIER * 10_000 } },
        1: { 0: { 0: WIN_MULTIPLIER * 10_000 } },
    },
};
