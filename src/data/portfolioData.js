export const portfolioData = {
  devProfile: {
    username: "stealanegg",
    displayName: "Steal An Egg 🥚",
    tagline: "Roblox Game Developer • Luau Scripter • 3D Brainrot Modeler",
    bio: "Chuyên phát triển game Roblox với phong cách rực rỡ (Vibrant), hoài niệm nốt Stud cổ điển và cơ chế gameplay cuốn hút như Steal a Brainrot. Đem lại trải nghiệm vui nhộn, tối ưu hiệu năng tối đa trên mọi thiết bị.",
    level: 99,
    currentExp: 9420,
    maxExp: 10000,
    status: "🟢 Available for Commissions",
    avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=EggBrainrot&backgroundColor=00d2ff,ff007f",
    stats: [
      { label: "Game Visits", value: "15M+", icon: "Gamepad2", color: "text-roblox-cyan" },
      { label: "Assets Created", value: "120+", icon: "Boxes", color: "text-roblox-yellow" },
      { label: "Happy Clients", value: "45+", icon: "Users", color: "text-roblox-green" },
      { label: "Satisfaction", value: "100%", icon: "Star", color: "text-roblox-pink" },
    ],
    skills: [
      { name: "Luau / Luau OOP", level: "Expert", category: "Scripting", icon: "Code" },
      { name: "Roblox Studio", level: "Master", category: "Engine", icon: "Boxes" },
      { name: "Blender 3D", level: "Advanced", category: "Art", icon: "Palette" },
      { name: "Knit & Rojo", level: "Advanced", category: "Workflow", icon: "Cpu" },
      { name: "UI / UX Design", level: "Master", category: "Design", icon: "Layout" },
      { name: "DataStore2 / ProfileService", level: "Expert", category: "Backend", icon: "Database" },
      { name: "Stud & Voxel Art", level: "Master", category: "Style", icon: "Sparkles" },
    ]
  },

  socials: {
    discordUsername: "stealanegg#0001",
    robloxProfile: "https://www.roblox.com",
    talentHub: "https://talent.roblox.com",
    twitter: "https://x.com",
    github: "https://github.com/zhongthi-wq",
    email: "stealanegg.dev@gmail.com"
  },

  categories: [
    { id: "all", name: "🌟 All Vault", count: 6 },
    { id: "brainrot", name: "🥚 Brainrot & Viral", count: 2 },
    { id: "games", name: "🎮 Games & Mechanics", count: 2 },
    { id: "3d", name: "🦊 3D Pets & Studs", count: 2 },
    { id: "ui", name: "🖼️ Vibrant UI Systems", count: 2 },
    { id: "scripts", name: "⚡ Core Luau Code", count: 2 },
  ],

  projects: [
    {
      id: "pet-index-system",
      title: "Pet Index & Collection Vault",
      subtitle: "Hệ thống Pet Index phong cách Steal a Brainrot",
      category: "brainrot",
      rarity: "brainrot", // common, rare, legendary, brainrot
      rarityName: "GODLY BRAINROT",
      image: "/assets/pet-index-showcase.png",
      featured: true,
      description: "Hệ thống Pet Index trực quan lấy cảm hứng từ 'Steal a Brainrot' với lưới hiển thị pet mở khóa (58/106), hiệu ứng ẩn bóng (silhouette discovery), âm thanh claim tiền thưởng và tốc độ chạy (+420 Speed). Được xây dựng tối ưu mượt mà cho hơn 150 loại thú cưng.",
      role: "Full UI Design & Backend Luau Architecture",
      tech: ["Luau", "Roblox Studio UI", "ProfileStore", "TweenService", "SoundService"],
      stats: { unlocked: "58 / 106 Pets", performance: "60 FPS Verified", replication: "Optimized Netcode" },
      links: {
        play: "https://www.roblox.com",
        video: null,
      },
      perks: ["Chống lag khi nhiều người mở kho đồ", "Dễ dàng thêm thú cưng mới qua ModuleScript", "Hiệu ứng nút CLAIM 3D nảy khối sống động"]
    },
    {
      id: "steal-the-egg-arena",
      title: "Steal An Egg: Chaos Arena",
      subtitle: "Tựa game hành động cướp trứng và rượt đuổi nảy lửa",
      category: "games",
      rarity: "legendary",
      rarityName: "LEGENDARY",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60",
      featured: true,
      description: "Game hành động nhiều người chơi với lối chơi cướp trứng từ căn cứ đối thủ bằng gậy bóng chày, tích lũy tiền nâng cấp giày chạy tốc độ và phòng thủ tổ chim bằng bẫy stud cổ điển.",
      role: "Solo Developer (Scripter, Builder, UI)",
      tech: ["Luau", "Knit Framework", "Blender Stud Assets", "Custom Ragdoll Physics"],
      stats: { visits: "2.4M Visits", rating: "94% Positive", peakCCU: "1,200 CCU" },
      links: {
        play: "https://www.roblox.com",
      },
      perks: ["Hệ thống combat gậy bóng chày mượt mà", "Bản đồ Stud Retro rực rỡ sắc màu", "Shop nâng cấp vũ khí & bẫy tự động"]
    },
    {
      id: "brainrot-pets-pack",
      title: "Voxel & Stud Brainrot Pets Pack",
      subtitle: "Gói 30+ mô hình thú cưng meme chuẩn đồ họa Stud",
      category: "3d",
      rarity: "brainrot",
      rarityName: "MYTHIC VOXEL",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
      featured: true,
      description: "Bộ sưu tập các mẫu pet dạng khối nốt gạch Roblox (Classic Studs) như Brr Brr Patapim, Cú mèo Burrowing Owl, Cáo lửa Fox, Trứng thần bí... Tối ưu polygon siêu nhẹ, không gây tụt FPS cho game di động.",
      role: "3D Modeler & Rigger",
      tech: ["Blender", "Stud Shader", "Roblox MeshPart", "FBX Animation"],
      stats: { models: "32 Custom Models", avgTris: "< 450 Tris / Pet", animations: "Idle & Run Ready" },
      links: {
        play: "https://www.roblox.com",
      },
      perks: ["Độ phân giải texture chuẩn stud không vỡ hạt", "Có sẵn animation lạch bạch đáng yêu", "Dễ dàng tích hợp vào hệ thống Pet Follow"]
    },
    {
      id: "trading-dupe-proof",
      title: "Anti-Dupe Trading & Auction Engine",
      subtitle: "Hệ thống giao dịch vật phẩm an toàn tuyệt đối",
      category: "scripts",
      rarity: "legendary",
      rarityName: "LEGENDARY CODE",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60",
      featured: false,
      description: "Hệ thống trao đổi vật phẩm 2 chiều với cơ chế Server-side Two-Phase Commit, khóa giao dịch chống dupe khi người chơi thoát game đột ngột hoặc spam remote.",
      role: "Backend Security Scripter",
      tech: ["Luau OOP", "ProfileService Transaction Lock", "MemoryStoreService"],
      stats: { exploitProof: "100% Verified", latency: "< 30ms Sync", volume: "500k Trades" },
      links: {
        play: "https://www.roblox.com",
      },
      perks: ["Không thể dupe qua phương pháp Lag Switch", "Giao diện xác nhận đếm ngược 5 giây bảo vệ người chơi", "Tự động ghi Log giao dịch vào Discord Webhook"]
    },
    {
      id: "vibrant-shop-ui",
      title: "Cartoon 3D Shop & Gacha Spin UI",
      subtitle: "Bộ giao diện cửa hàng và quay thưởng sống động",
      category: "ui",
      rarity: "rare",
      rarityName: "RARE ASSET",
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop&q=60",
      featured: false,
      description: "Bộ UI game cửa hàng với nút bấm 3D chunky tactile, âm thanh vui nhộn khi bấm nút, bánh xe quay thưởng may mắn Lucky Wheel và bảng nạp Robux chuẩn kích thước trên mọi màn hình điện thoại, iPad, PC.",
      role: "UI/UX Designer",
      tech: ["Roblox Studio UI", "Figma", "TweenService"],
      stats: { resolution: "Scales to 4K", platforms: "Mobile & Console Ready", soundFx: "Built-in SFX" },
      links: {
        play: "https://www.roblox.com",
      },
      perks: ["Auto-scaling tỉ lệ 16:9, 18:9, 4:3 không méo", "Hiệu ứng pháo hoa khi trúng pet hiếm", "Tệp .rbxm kéo thả vào game là chạy ngay"]
    },
    {
      id: "classic-stud-forest",
      title: "Classic Stud World & Obby Parkour",
      subtitle: "Map thế giới mở và mê cung Obby đồ họa Stud hoài niệm",
      category: "3d",
      rarity: "rare",
      rarityName: "RARE BUILD",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=60",
      featured: false,
      description: "Bản đồ rừng cây rực rỡ với ánh sáng Neon huyền ảo, các bậc nhảy Obby thử thách, đường chạy tăng tốc độ và các bí mật ẩn sau thác nước.",
      role: "Environment Builder",
      tech: ["Roblox Studio", "Voxel Lighting", "Atmosphere Bloom"],
      stats: { mapSize: "1024 x 1024 Studs", partsCount: "Tối ưu StreamingEnabled", checkpoints: "25 Stages" },
      links: {
        play: "https://www.roblox.com",
      },
      perks: ["Hỗ trợ thiết bị cấu hình yếu mượt mà", "Checkpoint tự động lưu màn chơi", "Ánh sáng rực rỡ tạo cảm giác tươi vui kích thích thị giác"]
    }
  ],

  commissions: {
    available: true,
    currencyRates: "Nhận thanh toán qua Robux (Group Funds), PayPal (USD) hoặc Chuyển khoản Ngân hàng (VND)",
    packages: [
      {
        id: "starter",
        name: "STARTER ASSET",
        tier: "COMMON",
        icon: "Egg",
        color: "border-blue-400 text-blue-400",
        btnColor: "bg-blue-500 hover:bg-blue-400",
        priceRobux: "2,500 R$",
        priceFiat: "$15 - $25 USD (~350k - 600k VNĐ)",
        deliveryTime: "1 - 3 Ngày",
        features: [
          "1 - 3 Mô hình Pet 3D chuẩn Stud / Voxel",
          "Hoặc 1 hệ thống Luau cơ bản (Shop / Tool / Leaderstats)",
          "Bảo hành sửa lỗi kỹ thuật 7 ngày",
          "Hỗ trợ import và test trực tiếp vào game của bạn"
        ]
      },
      {
        id: "popular",
        name: "FULL SYSTEM / MECHANIC",
        tier: "BRAINROT GODLY",
        popular: true,
        icon: "Sparkles",
        color: "border-roblox-pink text-roblox-pink",
        btnColor: "bg-gradient-to-r from-roblox-pink to-roblox-cyan hover:opacity-95",
        priceRobux: "15,000 - 35,000 R$",
        priceFiat: "$75 - $150 USD (~1.8tr - 3.8tr VNĐ)",
        deliveryTime: "3 - 7 Ngày",
        features: [
          "Hệ thống hoàn chỉnh như Pet Index / Trading / Gacha / Combat",
          "Giao diện Cartoon UI 3D Chunky chuẩn mobile & PC",
          "Âm thanh SFX + Hiệu ứng Tween hoạt họa mượt mà",
          "Lưu trữ dữ liệu ProfileService chống roll-back / dupe",
          "Bảo hành & bảo trì 30 ngày miễn phí"
        ]
      },
      {
        id: "custom",
        name: "CUSTOM GAME / STUDIO",
        tier: "LEGENDARY",
        icon: "Crown",
        color: "border-roblox-yellow text-roblox-yellow",
        btnColor: "bg-yellow-500 hover:bg-yellow-400 text-black",
        priceRobux: "50,000+ R$",
        priceFiat: "$250+ USD (~6tr+ VNĐ)",
        deliveryTime: "1 - 3 Tuần",
        features: [
          "Xây dựng trọn gói Core Game Loop (Lối chơi chính)",
          "Thiết kế toàn bộ Map thế giới + Cơ chế Steal / Brainrot",
          "Tích hợp Gamepass, DevProducts kích cầu doanh thu",
          "Tư vấn tối ưu hoá thuật toán chống exploit",
          "Hỗ trợ phát hành và cập nhật Event lớn"
        ]
      }
    ],
    termsOfService: [
      "Đặt cọc trước 50% trước khi bắt đầu dự án; thanh toán 50% còn lại sau khi nghiệm thu qua video/demo place.",
      "Cập nhật tiến độ liên tục qua Discord mỗi 24 - 48 giờ.",
      "Miễn phí chỉnh sửa tối đa 3 lần cho những yêu cầu nằm trong thỏa thuận ban đầu.",
      "Cam kết bảo hành code và sửa lỗi phát sinh hoàn toàn miễn phí."
    ]
  },

  vouches: [
    {
      author: "BloxMemeStudios",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=BloxBoss",
      role: "Roblox Studio Owner (8M Visits)",
      comment: "Làm việc cực nhanh và chuyên nghiệp! Hệ thống Pet Index và cơ chế gậy bóng chày chạy siêu mượt không hề bị giật lag trên mobile.",
      rating: 5,
      date: "Tháng trước"
    },
    {
      author: "NoobMaster_99",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=NoobPro",
      role: "Lead Game Designer",
      comment: "Style stud và đồ họa màu sắc rất bắt mắt đúng xu hướng Brainrot hiện nay. Đã tăng tỉ lệ giữ chân người chơi lên thêm 25%!",
      rating: 5,
      date: "2 tuần trước"
    },
    {
      author: "PixelCrafter_VN",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=PixelVN",
      role: "Roblox Builder",
      comment: "Code sạch, tổ chức Module rõ ràng theo chuẩn Knit/OOP. Rất uy tín và đúng hẹn, chắc chắn sẽ tiếp tục đặt hàng thêm!",
      rating: 5,
      date: "Vừa xong"
    }
  ]
};
