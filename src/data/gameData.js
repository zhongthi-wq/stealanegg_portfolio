export const gameData = {
  title: "Steal An Egg",
  tagline: "The Ultimate Egg Stealing & Pet Hatching Arcade Game on Roblox!",
  description: "Welcome to Steal An Egg! Collect rare voxel pets, upgrade treadmills to reach supersonic speeds, raid enemy bases, and build the richest egg sanctuary on Roblox!",
  playUrl: "https://www.roblox.com/share/g/825735094",
  discordUrl: "https://discord.gg/eggs",
  wikiUrl: "https://stealanegg.fandom.com/wiki/Steal_An_Egg_Wiki",
  robloxGroupUrl: "https://www.roblox.com/share/g/825735094",
  
  logo: "/assets/game-logo.png",
  verifiedBadge: "/assets/roblox-verified-badge.webp",
  thumbnails: [
    "/assets/noFilter (23).webp",
    "/assets/noFilter (24).webp",
    "/assets/noFilter (25).webp",
    "/assets/noFilter (26).webp"
  ],

  howToPlay: [
    { icon: "🥚", text: "Steal eggs from pets in wild biomes & enemy nests" },
    { icon: "🐣", text: "Hatch eggs to collect rare pets & beasts" },
    { icon: "💰", text: "Earn money from your pets passively" },
    { icon: "⬆️", text: "Upgrade your treadmill and base" },
    { icon: "🏃", text: "Train on the treadmill to gain Speed" },
    { icon: "🥷", text: "Steal eggs from other players" },
    { icon: "✨", text: "Discover rarer eggs, pets, sizes, and mutations!" }
  ],

  platforms: ["🖥️ Desktop", "🎮 Console (Xbox / PS)", "📱 Mobile", "📟 Tablet"],

  stats: [
    { label: "Total Visits", value: "25M+", icon: "Gamepad2", color: "text-roblox-cyan" },
    { label: "Unique Pets & Eggs", value: "236", icon: "Boxes", color: "text-roblox-yellow" },
    { label: "Active Stealers", value: "4,500+", icon: "Users", color: "text-roblox-green" },
    { label: "Player Rating", value: "95% 👍", icon: "Star", color: "text-roblox-pink" }
  ],

  updates: [
    {
      version: "v1.4.0",
      title: "The Divine & Titan Expansion",
      date: "September 2026",
      tag: "LATEST UPDATE",
      tagColor: "bg-emerald-500 text-black",
      highlights: [
        "Added 12 new Divine & Titan rarity pets (Archdemon Dragon, Kitsune, Demonic Egg)!",
        "Supersonic Treadmills Tier 8 & 9 added to base upgrades.",
        "New Mutator machine: Rainbow, Giant, and Corrupted pet sizes.",
        "Anti-camp base laser defenses & improved egg carry balance."
      ]
    },
    {
      version: "v1.3.2",
      title: "Cosmic Biome & Speed Boosters",
      date: "August 2026",
      tag: "MAJOR PATCH",
      tagColor: "bg-blue-500 text-white",
      highlights: [
        "Unlocked the Cosmic Zone with +420 Speed Sneaker pickups.",
        "Trading Hub v2: Anti-dupe transaction engine & trading tax reduction.",
        "18 new Secret eggs hidden across Forest and Volcano zones.",
        "Performance optimization for mobile & low-end devices (60 FPS locked)."
      ]
    }
  ],

  sneakPeeks: [
    {
      title: "Mythic Void Dragon Hatch",
      category: "Upcoming Pet",
      image: "/icons_large/pets/Eternal/Void Dragon.webp",
      desc: "Coming in Update 1.5! The Void Dragon yields over $120,000,000/s and grants a passive +15% sprint velocity aura.",
      rarity: "Eternal"
    },
    {
      title: "Titan Mech Destroyer Egg",
      category: "Upcoming Egg",
      image: "/icons_large/eggs/Divine/Mecha Dreadscale Egg.webp",
      desc: "A massive 40kg egg requiring 86,400s incubation or instant hatch tokens. Guaranteed to hatch a high-tier mechanical beast.",
      rarity: "Divine"
    }
  ],

  activeCodes: [
    { code: "RELEASE", reward: "+500 Starter Cash & 5m 2x Speed Potion", status: "Active" },
    { code: "STEAL100K", reward: "+420 Speed Sneaker & Rare Pet Egg", status: "Active" },
    { code: "DIVINE", reward: "Free Hatch Luck Potion (15 mins)", status: "Active" },
    { code: "BRAINROT", reward: "Exclusive Meme Pet Skin & Bat Skin", status: "Active" },
    { code: "TREADMILL", reward: "+1,000 Free Treadmill Training XP", status: "Active" }
  ],

  adminStaffAndCreators: {
    owner: {
      username: "Brockkodile",
      role: "Owner & Founder",
      badge: "👑 OWNER",
      color: "border-red-500 text-red-400",
      accentBg: "bg-red-500/10",
      badgeColor: "bg-gradient-to-r from-red-600 to-rose-600 text-white",
      avatar: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-5DCA1D61525DD28B971FFF12CCA88BD0-Png/150/150/AvatarHeadshot/Png/noFilter",
      robloxUrl: "https://www.roblox.com/users/3889785873/profile#!#about",
      verified: true,
      hasCrown: true,
      bio: "Owner and creator of Steal An Egg. Directs the vision, gameplay mechanics, and game events."
    },

    developers: [
      {
        username: "serieko",
        discordId: "serieko",
        role: "Lead Developer",
        badge: "💻 DEVELOPER",
        color: "border-blue-500 text-blue-400",
        accentBg: "bg-blue-500/10",
        badgeColor: "bg-blue-600 text-white",
        avatar: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-86B2879561A4B0CFA3B24C0D8FE50A25-Png/150/150/AvatarHeadshot/Png/noFilter",
        robloxUrl: "https://www.roblox.com/users/10751598093/profile",
        verified: true,
        bio: "Core game engineer. Builds Luau gameplay systems, treadmill speed mechanics, and server netcode."
      },
      {
        username: "wiscript",
        displayName: "wiscript",
        discordId: "wiscript",
        role: "Systems Developer",
        badge: "💻 DEVELOPER",
        color: "border-blue-500 text-blue-400",
        accentBg: "bg-blue-500/10",
        badgeColor: "bg-blue-600 text-white",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=wiscriptDev&backgroundColor=2563eb",
        isDiscordOnly: true,
        verified: true,
        bio: "Backend Luau systems developer. Handles data persistence, trade locks, and server security."
      }
    ],

    mod: {
      username: "utilisateur1lbg2",
      displayName: "utilisateur1lbg2",
      discordId: "utilisateur1lbg2",
      role: "Game Moderator",
      badge: "🛡️ MODERATOR",
      color: "border-emerald-500 text-emerald-400",
      accentBg: "bg-emerald-500/10",
      badgeColor: "bg-emerald-600 text-white",
      avatar: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-3390992166BD64EE83630DD305522BA2-Png/150/150/AvatarHeadshot/Png/noFilter",
      robloxUrl: "https://www.roblox.com/users/1065906907/profile",
      verified: true,
      bio: "Official in-game moderator enforcing community safety, fair play, and anti-exploit rules."
    },

    communityManager: {
      username: "kalgukso",
      displayName: "kalgukso",
      discordId: "kalgukso",
      role: "Community Manager",
      badge: "📢 COMMUNITY MANAGER",
      color: "border-cyan-400 text-cyan-300",
      accentBg: "bg-cyan-500/10",
      badgeColor: "bg-cyan-600 text-white",
      avatar: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-D1C1CEA96FDC9FF3944549A4408D6A9A-Png/150/150/AvatarHeadshot/Png/noFilter",
      robloxUrl: "https://www.roblox.com/users/156980044/profile",
      verified: true,
      bio: "Manages player relations, official Discord announcements, tournaments, and community feedback."
    },

    testers: [
      {
        username: "divine_hogrider2321",
        displayName: "divine_hogrider2321",
        discordId: "divine_hogrider2321",
        role: "Game Tester",
        badge: "🧪 TESTER",
        color: "border-fuchsia-500 text-fuchsia-300",
        badgeColor: "bg-fuchsia-600 text-white",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=divineHogrider&backgroundColor=c026d3",
        isDiscordOnly: true,
        verified: true,
        bio: "Dedicated QA tester finding edge-case bugs and balancing speed scaling."
      },
      {
        username: "No_Vynestra",
        displayName: "Vynestra",
        discordId: "vyn3stra.",
        role: "Game Tester",
        badge: "🧪 TESTER",
        color: "border-fuchsia-500 text-fuchsia-300",
        badgeColor: "bg-fuchsia-600 text-white",
        avatar: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-2600D5376DEBCBADDEFF4C67DF7AC747-Png/150/150/AvatarHeadshot/Png/noFilter",
        robloxUrl: "https://www.roblox.com/users/8500653411/profile",
        verified: true,
        bio: "Specializes in testing egg base infiltration, bat combat, and hitbox detection."
      },
      {
        username: "To4noNe_Rokuz",
        displayName: "Yuuuki",
        discordId: "itsyuuuki",
        role: "Game Tester",
        badge: "🧪 TESTER",
        color: "border-fuchsia-500 text-fuchsia-300",
        badgeColor: "bg-fuchsia-600 text-white",
        avatar: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-328F4D572C307331B50EDE69F68929B8-Png/150/150/AvatarHeadshot/Png/noFilter",
        robloxUrl: "https://www.roblox.com/users/3415699949/profile",
        verified: true,
        bio: "Testing economy rates, pet mutation rolls, and trading security."
      }
    ],

    featuredYoutubers: [
      {
        name: "SSundee",
        channelUrl: "https://www.youtube.com/@SSundee",
        avatar: "/assets/youtubers/Sundeee.jpg",
        subscribers: "24.5M Subs",
        badge: "⭐ YOUTUBE TITAN",
        tag: "Played & Reviewed",
        color: "border-amber-500 text-amber-300",
        verified: true,
        hasRoblox: false,
        bio: "Legendary gaming YouTuber with over 24 million subscribers, reviewing Steal An Egg raids, pet hatching, and insane speed gameplay!"
      },
      {
        name: "Flamingo",
        channelUrl: "https://www.youtube.com/@flamingo",
        avatar: "/assets/youtubers/Flamingo.jpg",
        subscribers: "13.2M Subs",
        badge: "⭐ ROBLOX ICON",
        tag: "Played & Reviewed",
        color: "border-rose-500 text-rose-300",
        verified: true,
        hasRoblox: false,
        bio: "Albert (Flamingo), one of the biggest Roblox creators in history, showcasing Steal An Egg funny moments and base raids!"
      },
      {
        name: "MiniBloxia",
        channelUrl: "https://www.youtube.com/@MiniBloxia",
        avatar: "/assets/youtubers/MiniBloxia.jpg",
        subscribers: "1.2M Subs",
        badge: "🌟 FEATURED CREATOR",
        tag: "Played & Reviewed",
        color: "border-red-500 text-red-300",
        verified: true,
        hasRoblox: false,
        bio: "Top-tier Roblox simulator and egg raiding creator exploring divine eggs, hidden zones, and supersonic treadmill speeds."
      },
      {
        name: "real.kittgaming",
        channelUrl: "https://www.youtube.com/@real.kittgaming",
        avatar: "/assets/youtubers/Kitt gaming.jpg",
        subscribers: "840K Subs",
        badge: "🌟 FEATURED CREATOR",
        tag: "Played & Reviewed",
        color: "border-red-500 text-red-300",
        verified: true,
        hasRoblox: false,
        bio: "Thrilling Roblox pet collecting and speed running gameplay, highlighting secret hatch probabilities and egg heists."
      },
      {
        name: "mayrushart",
        channelUrl: "https://www.youtube.com/@mayrushart",
        avatar: "/assets/youtubers/Mayrusherart.jpg",
        subscribers: "550K Subs",
        badge: "🌟 FEATURED CREATOR",
        tag: "Played & Reviewed",
        color: "border-red-500 text-red-300",
        verified: true,
        hasRoblox: false,
        bio: "High-energy Roblox animation and creative review channel testing out Steal An Egg mutations and base upgrades."
      },
      {
        name: "BachaBlox",
        channelUrl: "https://www.youtube.com/@BachaBlox",
        avatar: "/assets/youtubers/bachablox.jpg",
        subscribers: "310K Subs",
        badge: "🌟 FEATURED CREATOR",
        tag: "Played & Reviewed",
        color: "border-red-500 text-red-300",
        verified: true,
        hasRoblox: false,
        bio: "Adventurous Roblox gaming videos exploring every egg tier, treadmill rebirth, and pet trading values."
      }
    ],

    vipCreator: {
      name: "ItsLossi",
      displayName: "Minion",
      robloxUsername: "ItsLossi",
      robloxId: "11216231342",
      robloxUrl: "https://www.roblox.com/users/11216231342/profile",
      avatar: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-A8E6BDCE581F183EC45F976798F9A4C7-Png/150/150/AvatarHeadshot/Png/noFilter",
      tiktokHandle: "@itslossi",
      tiktokUrl: "https://www.tiktok.com/@itslossi",
      badges: [
        { label: "TESTER", color: "bg-fuchsia-600 text-white", isTester: true },
        { label: "VERIFIED CREATOR", color: "bg-yellow-400 text-black", isVerified: true },
        { label: "VIP IN-GAME PARTNER (Item Spawner & Egg Gifter)", color: "bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold", isPerk: true },
        { label: "FAMOUS TIKTOK STREAMER", color: "bg-black text-white border border-pink-500", isTiktok: true }
      ],
      tag: "VIP CREATOR & IN-GAME PARTNER",
      bio: "Famous TikTok creator & streamer (@itslossi). Official Steal An Egg QA tester equipped with special in-game privileges including item spawner, rare egg gifting, and live stream community drop events!"
    },

    tiktokCreators: [
      {
        name: "ItsLossi",
        displayName: "Minion",
        handle: "@itslossi",
        tiktokUrl: "https://www.tiktok.com/@itslossi",
        robloxUrl: "https://www.roblox.com/users/11216231342/profile",
        avatar: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-A8E6BDCE581F183EC45F976798F9A4C7-Png/150/150/AvatarHeadshot/Png/noFilter",
        followers: "VIP Streamer",
        badge: "👑 VIP TIKTOK PARTNER",
        verified: true,
        hasRoblox: true,
        perks: "Item Spawner & Egg Gifter",
        bio: "Famous TikTok creator & streamer. Official game QA tester with in-game item spawner & egg gifting perks for live viewers!"
      },
      {
        name: "KreekCraft",
        handle: "@kreekcraft",
        tiktokUrl: "https://www.tiktok.com/@kreekcraft",
        robloxUrl: "https://www.roblox.com/users/140258990/profile",
        avatar: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-F75D21B2173BF2D669691C35227DFB15-Png/150/150/AvatarHeadshot/Png/noFilter",
        followers: "3.5M Followers",
        badge: "⭐ TOP STREAMER",
        verified: true,
        hasRoblox: true,
        bio: "Legendary Roblox creator streaming live egg raids and reaction shorts to millions of fans."
      },
      {
        name: "Leah Ashe",
        handle: "@leahashe",
        tiktokUrl: "https://www.tiktok.com/@leahashe",
        robloxUrl: "https://www.roblox.com/users/142541386/profile",
        avatar: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-4CA63262CBDDABD64BDFE0C6F2F8EB7D-Png/150/150/AvatarHeadshot/Png/noFilter",
        followers: "4.8M Followers",
        badge: "⭐ TIKTOK QUEEN",
        verified: true,
        hasRoblox: true,
        bio: "Vibrant Roblox creator known for cute pet showcases, egg hatching streaks, and base designs."
      },
      {
        name: "DenisDaily",
        handle: "@denisdaily",
        tiktokUrl: "https://www.tiktok.com/@denisdaily",
        robloxUrl: "https://www.roblox.com/users/121823922/profile",
        avatar: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-748EFE282142A3DEBF619158296F603B-Png/150/150/AvatarHeadshot/Png/noFilter",
        followers: "2.8M Followers",
        badge: "⭐ ROBLOX LEGEND",
        verified: true,
        hasRoblox: true,
        bio: "Iconic gaming star with millions of views exploring speed treadmills and divine pet mutations."
      },
      {
        name: "Skeptical",
        handle: "@skepticalroblox",
        tiktokUrl: "https://www.tiktok.com/@skeptical",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=SkepticalBlox&backgroundColor=06b6d4",
        followers: "2.1M Followers",
        badge: "🎵 VIRAL CREATOR",
        verified: true,
        hasRoblox: false,
        bio: "Viral comedic Roblox TikToks, funny base infiltration fails, and high-speed chaser escapes."
      },
      {
        name: "Charli Blox",
        handle: "@charlixroblox",
        tiktokUrl: "https://www.tiktok.com/@charlixroblox",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=CharliBlox&backgroundColor=ec4899",
        followers: "1.6M Followers",
        badge: "🎵 TIKTOK DANCE & CLIPS",
        verified: true,
        hasRoblox: false,
        bio: "TikTok dance trends inside Steal An Egg with rare mutated pets and cosmetic trails."
      },
      {
        name: "DefildPlays",
        handle: "@defildplays",
        tiktokUrl: "https://www.tiktok.com/@defildplays",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=DefildPlays&backgroundColor=eab308",
        followers: "1.4M Followers",
        badge: "🎵 SIMULATOR PRO",
        verified: true,
        hasRoblox: false,
        bio: "Simulator grinding guides, egg luck tricks, and treadmill rebirth tutorials on TikTok."
      },
      {
        name: "InquisitorMaster",
        handle: "@inquisitormaster",
        tiktokUrl: "https://www.tiktok.com/@inquisitormaster",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=InquisitorMaster&backgroundColor=8b5cf6",
        followers: "3.9M Followers",
        badge: "⭐ ROBLOX SQUAD",
        verified: true,
        hasRoblox: false,
        bio: "Viral squad gameplay and chaotic egg stealing raids with friend squads on live stream."
      },
      {
        name: "Lana Blox",
        handle: "@lanablox",
        tiktokUrl: "https://www.tiktok.com/@lanablox",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=LanaBlox&backgroundColor=f43f5e",
        followers: "1.1M Followers",
        badge: "🎵 TIKTOK SPEEDRUNNER",
        verified: true,
        hasRoblox: false,
        bio: "Crazy fast base sneaking heists, clutching eggs under 5 seconds, and speedrun challenges."
      },
      {
        name: "Roblox Moments",
        handle: "@robloxmoments.exe",
        tiktokUrl: "https://www.tiktok.com/@robloxmoments",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=RobloxMoments&backgroundColor=10b981",
        followers: "2.4M Followers",
        badge: "🎵 MEME CLIPS",
        verified: true,
        hasRoblox: false,
        bio: "Daily highlight reels of the funniest egg steals, karma moments, and super speed escapes."
      }
    ],

    mediaCreators: [
      {
        name: "Jujubo TV",
        channelUrl: "https://www.youtube.com/@jujubotv",
        platform: "YouTube",
        badge: "🎬 MEDIA CREATOR",
        color: "border-red-500 text-red-400",
        avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=JujuboTV&backgroundColor=e11d48",
        verified: true,
        hasRoblox: false,
        bio: "Official creator partner making thrilling Steal An Egg challenge videos and egg hunts."
      },
      {
        name: "00WInterKIoudz",
        robloxUsername: "WInterKIoudz",
        robloxUrl: "https://www.roblox.com/users/225495866/profile",
        channelUrl: "https://www.youtube.com/channel/UC6-GNJmiOo8wCTJGxM5LafQ",
        platform: "YouTube",
        badge: "🎬 MEDIA CREATOR",
        color: "border-red-500 text-red-400",
        avatar: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-CE948092B8897068ACD9420E2F771935-Png/150/150/AvatarHeadshot/Png/noFilter",
        verified: true,
        hasRoblox: true,
        bio: "Content creator streaming egg stealing raids, treadmill speedruns, and community trades."
      },
      {
        name: "kagurazaka",
        robloxUsername: "kagurazaka03",
        robloxUrl: "https://www.roblox.com/users/8699303644/profile",
        channelUrl: "https://www.youtube.com/channel/UCb0jAu_gkHIG1Sucgh_JtVw",
        platform: "TikTok & YouTube",
        badge: "🎬 MEDIA CREATOR",
        color: "border-pink-500 text-pink-400",
        avatar: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-E899E47EC0F284B3EA8EEE01D449F52B-Png/150/150/AvatarHeadshot/Png/noFilter",
        verified: true,
        hasRoblox: true,
        bio: "Creating viral Steal An Egg TikTok reels, pet memes, and rapid hatching montages."
      },
      {
        name: "keeganzignag",
        robloxUsername: "keeganzignag",
        robloxUrl: "https://www.roblox.com/users/78422174/profile",
        channelUrl: "https://www.youtube.com/channel/UCL3mELxovFcSFx6DHpYCnnA",
        platform: "YouTube",
        badge: "🎬 MEDIA CREATOR",
        color: "border-red-500 text-red-400",
        avatar: "https://tr.rbxcdn.com/30DAY-AvatarHeadshot-8527DA51A871263EE94A68EFD863741D-Png/150/150/AvatarHeadshot/Png/noFilter",
        verified: true,
        hasRoblox: true,
        bio: "In-depth Steal An Egg guides, base defensive traps, and pet value updates."
      }
    ]
  },

  faq: [
    {
      q: "How do I steal eggs from other players?",
      a: "Sneak into another player's base when their shields or base defenses are down. Approach their egg nest, interact to pick up the egg, and carry it back to your incubator before they tag you with their bat!"
    },
    {
      q: "How do treadmills make me faster?",
      a: "Hop onto your personal base treadmill to train. As you run, your character gains Speed XP. Upgrade your treadmill in the base shop to unlock faster multiplier gains and outrun enemy chasers!"
    },
    {
      q: "What are Pet Mutations?",
      a: "Hatching eggs has a chance to produce mutated pets with special visual shaders (Rainbow, Neon, Giant, Golden). Mutated pets produce 2x to 5x higher $/sec earning rates!"
    },
    {
      q: "Can other players steal my eggs while I am offline?",
      a: "No! Your base is protected by automated offline stasis shields when you leave the game. Your pets and eggs remain 100% secure."
    },
    {
      q: "How does trading work?",
      a: "Visit the central Trading Hub in the spawn zone. Open the trade request with another player. Both players must lock and confirm the trade with a 5-second countdown to guarantee zero scams or dupes."
    },
    {
      q: "Where can I report bugs or suggest new pets?",
      a: "Join our official Discord server at discord.gg/eggs and post in the #suggestions or #bug-reports channel. Our developer team reviews feedback daily!"
    }
  ]
};
