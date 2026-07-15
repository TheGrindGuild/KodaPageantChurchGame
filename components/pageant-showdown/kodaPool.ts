/**
 * A curated, static set of real Otherside Koda tokens (contract
 * 0xe012baf811cf9c05c408e879c399960d1f305903 on Ethereum), pulled directly
 * from OpenSea's collection listing. Deliberately static rather than a live
 * API call — a live OpenSea fetch would need its own server route and API
 * key, which falls outside the components/pageant-showdown/ +
 * public/pageant-showdown/ boundary SKILL.md restricts edits to, and
 * OpenSea's v2 API isn't reliably CORS-open for direct browser calls
 * without one. This is a real, working set of ~50 Kodas — plenty of
 * visual variety for a two-portrait coin-flip game — with zero API
 * dependency or key management needed.
 *
 * TODO: if you want the FULL ~8,103-token pool instead of this curated 50,
 * that needs either (a) a bigger one-time pull like this one, expanded, or
 * (b) reach out to the Ape Church team about whether games are allowed
 * their own server-side API routes/keys outside the standard edit zone.
 */

export interface KodaEntry {
    id: number;
    image: string;
}

export const KODA_POOL: KodaEntry[] = [
    { id: 7333, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/30e6944bb0643b35815364d1a065f2/8130e6944bb0643b35815364d1a065f2.webp?w=800" },
    { id: 165, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/e6720742f3a252f08b1bf76194c7ab/9de6720742f3a252f08b1bf76194c7ab.webp?w=800" },
    { id: 3021, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/0bf864c5b34f6527385eb17b43d8a8/840bf864c5b34f6527385eb17b43d8a8.webp?w=800" },
    { id: 9398, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/e841c1b5ed0abb2717251eda6a582e/2ee841c1b5ed0abb2717251eda6a582e.webp?w=800" },
    { id: 2000, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/af290d7c47f7b9f2afcc240562de64/feaf290d7c47f7b9f2afcc240562de64.webp?w=800" },
    { id: 5033, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/027e4ee99a3bf515fca7dc6dc666d9/da027e4ee99a3bf515fca7dc6dc666d9.webp?w=800" },
    { id: 9255, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/475956c6bfa792cc503732e6bb241d/7a475956c6bfa792cc503732e6bb241d.webp?w=800" },
    { id: 3563, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/19631fd58bc235d5db5fef6ac7d0c2/2419631fd58bc235d5db5fef6ac7d0c2.webp?w=800" },
    { id: 2325, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/254dafd51c992685d0a980e8de5cc6/c9254dafd51c992685d0a980e8de5cc6.webp?w=800" },
    { id: 6495, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/8294ca169505dc233da25b1f3fa2ff/ea8294ca169505dc233da25b1f3fa2ff.webp?w=800" },
    { id: 5369, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/b1260dde43610dbe45f5e7b5e259f0/89b1260dde43610dbe45f5e7b5e259f0.webp?w=800" },
    { id: 3399, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/1a92828c3cce7e3565dea78b02f704/cd1a92828c3cce7e3565dea78b02f704.webp?w=800" },
    { id: 9720, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/45eba4e400a810030d0be29686bbba/f745eba4e400a810030d0be29686bbba.webp?w=800" },
    { id: 8169, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/5d9f5e156f6bcbbf3d6ff5c52f2b6c/bd5d9f5e156f6bcbbf3d6ff5c52f2b6c.webp?w=800" },
    { id: 1604, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/11b88bc34e73a4fcbe79334bf30b87/0011b88bc34e73a4fcbe79334bf30b87.webp?w=800" },
    { id: 5409, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/14c6b34186e44a6bd8c655abc1e4bf/bb14c6b34186e44a6bd8c655abc1e4bf.webp?w=800" },
    { id: 447, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/ffe9078478fa2feacdb2b5c5d87daf/06ffe9078478fa2feacdb2b5c5d87daf.webp?w=800" },
    { id: 6742, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/661b2b35309cf065f03334d8c03d9f/6f661b2b35309cf065f03334d8c03d9f.webp?w=800" },
    { id: 697, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/4660a880d66d26fa9da4dc79800c21/1e4660a880d66d26fa9da4dc79800c21.webp?w=800" },
    { id: 4596, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/1610a47f589bb53deb2a95b8dcb4f6/a31610a47f589bb53deb2a95b8dcb4f6.webp?w=800" },
    { id: 9834, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/47cecc92ce4ca0c32d5a13a032c110/5c47cecc92ce4ca0c32d5a13a032c110.webp?w=800" },
    { id: 8023, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/4238c474a449760d32006513f23afc/6a4238c474a449760d32006513f23afc.webp?w=800" },
    { id: 8081, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/0a7570ef9234d848530a5a1b790150/a80a7570ef9234d848530a5a1b790150.webp?w=800" },
    { id: 8231, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/58ea7b5e6ca9daaab4c0d8036784fe/d758ea7b5e6ca9daaab4c0d8036784fe.webp?w=800" },
    { id: 3826, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/995a6bb7f8da3c5730c42561e94d78/30995a6bb7f8da3c5730c42561e94d78.webp?w=800" },
    { id: 2928, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/6df2a1fef023c3ac4f3f607faa93bb/1a6df2a1fef023c3ac4f3f607faa93bb.webp?w=800" },
    { id: 351, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/b14d3f35f24986fbcb8a212a17d0e1/16b14d3f35f24986fbcb8a212a17d0e1.webp?w=800" },
    { id: 1394, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/747fb7a20db625854a7d988ea559da/83747fb7a20db625854a7d988ea559da.webp?w=800" },
    { id: 5540, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/1dd391333a545c342ad15e7c7783ec/b61dd391333a545c342ad15e7c7783ec.webp?w=800" },
    { id: 7463, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/6e43ee39368afd455872dc9f2ba31b/756e43ee39368afd455872dc9f2ba31b.webp?w=800" },
    { id: 7613, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/febcf12cb351bb79586116bc6d01db/9bfebcf12cb351bb79586116bc6d01db.webp?w=800" },
    { id: 8018, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/e80e0cf090b56014c1e91ec795eead/30e80e0cf090b56014c1e91ec795eead.webp?w=800" },
    { id: 6745, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/d301ec3af541a5b3091f306f522f5b/17d301ec3af541a5b3091f306f522f5b.webp?w=800" },
    { id: 1759, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/c66ba9045452045d114299fe8829b2/cfc66ba9045452045d114299fe8829b2.webp?w=800" },
    { id: 2281, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/e49d434fa0b01f91bb65b670519c53/46e49d434fa0b01f91bb65b670519c53.webp?w=800" },
    { id: 4517, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/c7141f0e7edfa211a2a93b8e268270/9cc7141f0e7edfa211a2a93b8e268270.webp?w=800" },
    { id: 1613, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/c08db589cc4df01f01fb55aee98af3/30c08db589cc4df01f01fb55aee98af3.webp?w=800" },
    { id: 3998, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/1b7ea6de74238da22be478e4236b1d/7a1b7ea6de74238da22be478e4236b1d.webp?w=800" },
    { id: 235, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/e43dda3fc520e129890fcc8541338d/92e43dda3fc520e129890fcc8541338d.webp?w=800" },
    { id: 7624, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/c2531469080e377b41b4d85843cb9a/9bc2531469080e377b41b4d85843cb9a.webp?w=800" },
    { id: 7369, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/eae31518286bdd5e4ec1dccf87ceb5/93eae31518286bdd5e4ec1dccf87ceb5.webp?w=800" },
    { id: 2268, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/09e72bfd6dcfe8bad3c9f3b53d291a/2209e72bfd6dcfe8bad3c9f3b53d291a.webp?w=800" },
    { id: 1875, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/451fba8d4b8faa1419a73e5ef76d08/f1451fba8d4b8faa1419a73e5ef76d08.webp?w=800" },
    { id: 1487, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/aa09494cabc1068ff3b63480d7b970/f7aa09494cabc1068ff3b63480d7b970.webp?w=800" },
    { id: 6939, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/4d67da1f4cb66c51712c95d6ec9796/604d67da1f4cb66c51712c95d6ec9796.webp?w=800" },
    { id: 2352, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/f60e3e70bdf2f55397ae639bc166f3/ecf60e3e70bdf2f55397ae639bc166f3.webp?w=800" },
    { id: 9139, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/04ba85b7f82160176a2b1011f67192/4c04ba85b7f82160176a2b1011f67192.webp?w=800" },
    { id: 1412, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/c9081cd02168aa2bd012ea33805f04/6dc9081cd02168aa2bd012ea33805f04.webp?w=800" },
    { id: 7089, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/b49622e3f56679a1f15af88f5028a7/bab49622e3f56679a1f15af88f5028a7.webp?w=800" },
    { id: 4986, image: "https://i2c.seadn.io/ethereum/0xe012baf811cf9c05c408e879c399960d1f305903/27381f10f20ea6d4c45a33e4b192ea/1127381f10f20ea6d4c45a33e4b192ea.webp?w=800" },
];

/** Picks two distinct random Kodas for a matchup — one per side. */
export function pickMatchup(): { left: KodaEntry; right: KodaEntry } {
    const a = KODA_POOL[Math.floor(Math.random() * KODA_POOL.length)];
    let b: KodaEntry;
    do {
        b = KODA_POOL[Math.floor(Math.random() * KODA_POOL.length)];
    } while (b.id === a.id);
    return { left: a, right: b };
}
