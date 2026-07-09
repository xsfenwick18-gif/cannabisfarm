// SEARCH_INDEX — every searchable item on cannabisfarm.co.za
// To add a new item later (e.g. once a topic article is published), just add
// another object to this array: { title, section, type, url, desc }
// - section: shows as the small badge next to the result
// - type: "page" | "topic" | "guide" | "glossary" (only used for styling/grouping)
// - url: where clicking the result takes you (can include a #anchor)

const SEARCH_INDEX = [
  // ===== PAGES =====
  { title: "Home", section: "Cannabis Farm", type: "page", url: "index.html", desc: "How much do you actually know about cannabis? Six areas of honest, straightforward cannabis education." },
  { title: "Growing", section: "Cannabis Farm", type: "page", url: "growing.html", desc: "Grow smarter. Understand deeper. From your first seed to the science behind terpenes." },
  { title: "Medical", section: "Cannabis Farm", type: "page", url: "medical.html", desc: "Conditions, uses, and dosing basics — clear, honest medical cannabis education. Coming soon." },
  { title: "Science & Lab", section: "Cannabis Farm", type: "page", url: "science-lab.html", desc: "Cannabinoids, terpenes, lab testing, and the research behind the plant. Coming soon." },
  { title: "History & Culture", section: "Cannabis Farm", type: "page", url: "history.html", desc: "From ancient use to modern law — cannabis across cultures and continents." },
  { title: "Strains", section: "Cannabis Farm", type: "page", url: "strains.html", desc: "Genetics, lineage, and effects — know what makes one cultivar different from another." },
  { title: "Blog", section: "Cannabis Farm", type: "page", url: "blog.html", desc: "News, updates, and ongoing writing on the cannabis world. Coming soon." },

  // ===== GROWING — TOPICS =====
  { title: "Getting Started", section: "Growing · Topics", type: "topic", url: "growing.html#topics", desc: "Seeds, germination, choosing your first strain. The essential first steps without the overwhelm." },
  { title: "Lighting Explained", section: "Growing · Topics", type: "topic", url: "growing.html#topics", desc: "LED vs HPS, DLI, photoperiods, light schedules — understand what your plant actually needs from light." },
  { title: "Soil & Growing Media", section: "Growing · Topics", type: "topic", url: "growing.html#topics", desc: "Living soil, coco, perlite ratios, pH, and why your grow medium shapes everything downstream." },
  { title: "Nutrients & Feeding", section: "Growing · Topics", type: "topic", url: "growing.html#topics", desc: "NPK ratios, deficiencies vs toxicities, organic vs synthetic — feeding your plant without guessing." },
  { title: "Training Techniques", section: "Growing · Topics", type: "topic", url: "growing.html#topics", desc: "LST, topping, SCROGs, mainlining — shape your plant to maximise yield and bud quality." },
  { title: "Terpenes & Cannabinoids", section: "Growing · Topics", type: "topic", url: "growing.html#topics", desc: "The chemistry behind flavour, aroma, and effect. What THC, CBD, and terpenes actually do." },
  { title: "Flowering & Harvest", section: "Growing · Topics", type: "topic", url: "growing.html#topics", desc: "Reading trichomes, flush timing, when to chop — get the harvest timing right every time." },
  { title: "Drying & Curing", section: "Growing · Topics", type: "topic", url: "growing.html#topics", desc: "Why the cure matters as much as the grow. Temperature, humidity, jars, and patience." },
  { title: "Pests & Diseases", section: "Growing · Topics", type: "topic", url: "growing.html#topics", desc: "Identifying and treating common threats — spider mites, fungus gnats, powdery mildew, and more." },
  { title: "Climate & Environment", section: "Growing · Topics", type: "topic", url: "growing.html#topics", desc: "VPD, temperature, humidity, airflow — creating the environment your plant thrives in." },
  { title: "Autoflowers vs Photos", section: "Growing · Topics", type: "topic", url: "growing.html#topics", desc: "The key differences, which to choose for your setup, and how to grow each correctly." },
  { title: "SA Legal Landscape", section: "Growing · Topics", type: "topic", url: "growing.html#topics", desc: "What you may legally do in South Africa today — personal use, home cultivation, and the current law." },

  // ===== GROWING — GUIDE STEPS =====
  { title: "Choose Your Strain", section: "Growing · Guide", type: "guide", url: "growing.html#step-choose-your-strain", desc: "Autoflower or photoperiod? Indica, sativa, or hybrid? Your choice here shapes everything else." },
  { title: "Germinate Your Seed", section: "Growing · Guide", type: "guide", url: "growing.html#step-germinate-your-seed", desc: "Paper towel, glass of water, or straight to soil — getting the taproot out safely." },
  { title: "Set Up Your Environment", section: "Growing · Guide", type: "guide", url: "growing.html#step-set-up-your-environment", desc: "Light, airflow, temperature, and humidity — hit your targets before the plant goes in." },
  { title: "Seedling Stage", section: "Growing · Guide", type: "guide", url: "growing.html#step-seedling-stage", desc: "Gentle light, high humidity, minimal water. Do less, not more." },
  { title: "Vegetative Growth", section: "Growing · Guide", type: "guide", url: "growing.html#step-vegetative-growth", desc: "Your plant builds its structure here. More light, more water, optional training." },
  { title: "Flowering Stage", section: "Growing · Guide", type: "guide", url: "growing.html#step-flowering-stage", desc: "Buds form and fatten over 7–11 weeks. Environment stability matters most." },
  { title: "Harvest at the Right Time", section: "Growing · Guide", type: "guide", url: "growing.html#step-harvest-at-the-right-time", desc: "Read the trichomes under a loupe. Milky and amber on the buds tell you when to chop." },
  { title: "Dry, Cure & Enjoy", section: "Growing · Guide", type: "guide", url: "growing.html#step-dry-cure-enjoy", desc: "A slow dry and a 4–8 week cure in sealed glass jars transforms good buds into exceptional ones." },

  // ===== GROWING — GLOSSARY =====
  { title: "Autoflower", section: "Growing · Glossary", type: "glossary", url: "growing.html#glossary-autoflower", desc: "A cannabis plant that flowers based on age rather than light cycle — typically day 30–40." },
  { title: "Canopy", section: "Growing · Glossary", type: "glossary", url: "growing.html#glossary-canopy", desc: "The uppermost layer of leaves and bud sites on a plant." },
  { title: "Curing", section: "Growing · Glossary", type: "glossary", url: "growing.html#glossary-curing", desc: "Storing trimmed buds in sealed glass jars to stabilise terpenes and improve flavour over 4–8 weeks." },
  { title: "DLI", section: "Growing · Glossary", type: "glossary", url: "growing.html#glossary-dli", desc: "Daily Light Integral — total photosynthetically active light received over 24 hours." },
  { title: "Flush", section: "Growing · Glossary", type: "glossary", url: "growing.html#glossary-flush", desc: "Running plain, pH-adjusted water through your medium in the final weeks of flower." },
  { title: "LST", section: "Growing · Glossary", type: "glossary", url: "growing.html#glossary-lst", desc: "Low Stress Training — bending and tying branches for a flatter, wider canopy." },
  { title: "Photoperiod", section: "Growing · Glossary", type: "glossary", url: "growing.html#glossary-photoperiod", desc: "A plant that switches to flowering in response to a change in the daily light cycle." },
  { title: "Perlite", section: "Growing · Glossary", type: "glossary", url: "growing.html#glossary-perlite", desc: "A volcanic glass material added to soil to improve aeration and drainage." },
  { title: "Terpenes", section: "Growing · Glossary", type: "glossary", url: "growing.html#glossary-terpenes", desc: "Aromatic compounds in cannabis that create its distinct flavours and aromas." },
  { title: "Trichomes", section: "Growing · Glossary", type: "glossary", url: "growing.html#glossary-trichomes", desc: "The tiny crystal-like structures that produce and store cannabinoids and terpenes." },
  { title: "VPD", section: "Growing · Glossary", type: "glossary", url: "growing.html#glossary-vpd", desc: "Vapour Pressure Deficit — how hard your plant is working to push moisture through its leaves." },
  { title: "Worm Castings", section: "Growing · Glossary", type: "glossary", url: "growing.html#glossary-worm-castings", desc: "The excrement of earthworms — a slow-release organic fertiliser." },

  // ===== HISTORY — TOPICS =====
  { title: "Ancient Origins & Traditional Use", section: "History · Topics", type: "topic", url: "history.html#topics", desc: "Early cultivation in Central Asia, and its spread through medicine, textiles, and ritual." },
  { title: "Cannabis Across Cultures & Religion", section: "History · Topics", type: "topic", url: "history.html#topics", desc: "From Hindu and Rastafari spiritual use to traditional African and Asian medicine traditions." },
  { title: "How It Became Illegal", section: "History · Topics", type: "topic", url: "history.html#topics", desc: "The early 20th-century shift from accepted medicine to criminalised substance." },
  { title: "The War on Drugs", section: "History · Topics", type: "topic", url: "history.html#topics", desc: "How mid-to-late 20th-century policy shaped decades of global enforcement and stigma." },
  { title: "The Global Legalisation Wave", section: "History · Topics", type: "topic", url: "history.html#topics", desc: "How public opinion and policy shifted from the 1990s onward — medical first, then recreational." },
  { title: "South Africa's Cannabis History", section: "History · Topics", type: "topic", url: "history.html#topics", desc: "From colonial-era criminalisation to the 2018 Constitutional Court ruling and today's law." },

  // ===== HISTORY — GUIDE (TIMELINE) =====
  { title: "Ancient Use", section: "History · Timeline", type: "guide", url: "history.html#step-ancient-use", desc: "Cannabis cultivation traces back thousands of years in Central Asia." },
  { title: "Trade Routes & Spread", section: "History · Timeline", type: "guide", url: "history.html#step-trade-routes-spread", desc: "Cannabis moved along ancient trade routes into the Middle East, Africa, and India." },
  { title: "Early Medical Use", section: "History · Timeline", type: "guide", url: "history.html#step-early-medical-use", desc: "By the 1800s, cannabis extracts were common in Western pharmacies." },
  { title: "Criminalisation", section: "History · Timeline", type: "guide", url: "history.html#step-criminalisation", desc: "The early-to-mid 20th century saw cannabis criminalised across much of the world." },
  { title: "The War on Drugs (Timeline)", section: "History · Timeline", type: "guide", url: "history.html#step-the-war-on-drugs", desc: "From the 1970s onward, aggressive enforcement policy led to mass incarceration." },
  { title: "Legalisation & South Africa Today", section: "History · Timeline", type: "guide", url: "history.html#step-legalisation-south-africa-today", desc: "The 2018 Prince judgment and the 2024 Cannabis for Private Purposes Act." },

  // ===== HISTORY — GLOSSARY =====
  { title: "Prohibition", section: "History · Glossary", type: "glossary", url: "history.html#glossary-prohibition", desc: "The period during which cannabis was made illegal, enforced through criminal law." },
  { title: "Decriminalisation", section: "History · Glossary", type: "glossary", url: "history.html#glossary-decriminalisation", desc: "Removing criminal penalties for personal possession/use." },
  { title: "Legalisation", section: "History · Glossary", type: "glossary", url: "history.html#glossary-legalisation", desc: "Full removal of legal prohibition, typically with a regulated framework." },
  { title: "Prince Judgment (2018)", section: "History · Glossary", type: "glossary", url: "history.html#glossary-prince-judgment-2018", desc: "The SA Constitutional Court ruling that decriminalised private use, possession, and cultivation." },
  { title: "Cannabis for Private Purposes Act", section: "History · Glossary", type: "glossary", url: "history.html#glossary-cannabis-for-private-purposes-act", desc: "SA legislation (2024) formalising the legal framework for private use and home cultivation." },
  { title: "Single Convention on Narcotic Drugs", section: "History · Glossary", type: "glossary", url: "history.html#glossary-single-convention-on-narcotic-drugs", desc: "A 1961 UN treaty that classified cannabis as a controlled substance." },
  { title: "Hemp", section: "History · Glossary", type: "glossary", url: "history.html#glossary-hemp", desc: "Cannabis grown for fibre, seed, or low-THC industrial use — legally distinct in many jurisdictions." },
  { title: "Rastafari & Ganja", section: "History · Glossary", type: "glossary", url: "history.html#glossary-rastafari-ganja", desc: "Cannabis holds sacramental significance in the Rastafari faith." },
  { title: "Schedule I / Schedule 7", section: "History · Glossary", type: "glossary", url: "history.html#glossary-schedule-i-schedule-7", desc: "Drug classification categories historically placing cannabis among the most restricted substances." },
  { title: "Marijuana Tax Act (1937)", section: "History · Glossary", type: "glossary", url: "history.html#glossary-marijuana-tax-act-1937", desc: "Early US federal legislation seen as the start of formal US prohibition." },

  // ===== STRAINS — TOPICS =====
  { title: "Indica vs Sativa vs Hybrid", section: "Strains · Topics", type: "topic", url: "strains.html#topics", desc: "Why this label tells you far less than you think — and what actually drives the effect." },
  { title: "Genetics & Lineage", section: "Strains · Topics", type: "topic", url: "strains.html#topics", desc: "Landrace strains, hybrid breeding, and how a cultivar's family tree shapes what it becomes." },
  { title: "Terpene Profiles & Effects", section: "Strains · Topics", type: "topic", url: "strains.html#topics", desc: "The aromatic compounds that shape flavour and effect far more than THC% alone." },
  { title: "THC/CBD Ratios Explained", section: "Strains · Topics", type: "topic", url: "strains.html#topics", desc: "Reading a lab sheet properly — what the numbers mean and what they don't tell you." },
  { title: "Reading a Strain Datasheet", section: "Strains · Topics", type: "topic", url: "strains.html#topics", desc: "Breeder claims vs verified lab data — knowing what to trust before you buy seeds." },
  { title: "Choosing for Your Setup", section: "Strains · Topics", type: "topic", url: "strains.html#topics", desc: "Autoflower vs photoperiod genetics, and matching a strain to your actual grow space." },

  // ===== STRAINS — GUIDE =====
  { title: "Define Your Goal", section: "Strains · Guide", type: "guide", url: "strains.html#step-define-your-goal", desc: "Effect, yield, or grow time? Be honest before you fall for marketing names." },
  { title: "Check the Genetics", section: "Strains · Guide", type: "guide", url: "strains.html#step-check-the-genetics", desc: "Is it a stable line, or an unstable new cross?" },
  { title: "Read the Terpene Profile", section: "Strains · Guide", type: "guide", url: "strains.html#step-read-the-terpene-profile", desc: "Terpenes predict the actual smell and feel far better than the strain name." },
  { title: "Check THC/CBD Ratio", section: "Strains · Guide", type: "guide", url: "strains.html#step-check-thc-cbd-ratio", desc: "Look for verified lab data, not just the breeder's marketing claim." },
  { title: "Match to Your Setup", section: "Strains · Guide", type: "guide", url: "strains.html#step-match-to-your-setup", desc: "Autoflower or photoperiod, indoor height limits, outdoor climate tolerance." },
  { title: "Verify the Breeder", section: "Strains · Guide", type: "guide", url: "strains.html#step-verify-the-breeder", desc: "Reputable seedbanks with a track record beat an unknown source every time." },

  // ===== STRAINS — GLOSSARY =====
  { title: "Cultivar", section: "Strains · Glossary", type: "glossary", url: "strains.html#glossary-cultivar", desc: "A cultivated variety of cannabis bred and selected for specific traits." },
  { title: "Landrace", section: "Strains · Glossary", type: "glossary", url: "strains.html#glossary-landrace", desc: "A cannabis population that developed naturally in a specific region over generations." },
  { title: "Phenotype", section: "Strains · Glossary", type: "glossary", url: "strains.html#glossary-phenotype", desc: "The observable traits an individual plant expresses." },
  { title: "Genotype", section: "Strains · Glossary", type: "glossary", url: "strains.html#glossary-genotype", desc: "The underlying genetic code of a plant." },
  { title: "F1 Hybrid", section: "Strains · Glossary", type: "glossary", url: "strains.html#glossary-f1-hybrid", desc: "The first-generation offspring of two distinct parent lines." },
  { title: "IBL", section: "Strains · Glossary", type: "glossary", url: "strains.html#glossary-ibl", desc: "Inbred Line — a strain stabilised over many generations to breed true." },
  { title: "Terpene Profile", section: "Strains · Glossary", type: "glossary", url: "strains.html#glossary-terpene-profile", desc: "The specific combination and ratio of aromatic compounds in a strain." },
  { title: "Entourage Effect", section: "Strains · Glossary", type: "glossary", url: "strains.html#glossary-entourage-effect", desc: "The theory that cannabinoids and terpenes work together synergistically." },
  { title: "Hybrid Vigour", section: "Strains · Glossary", type: "glossary", url: "strains.html#glossary-hybrid-vigour", desc: "The tendency for a cross to outperform either parent in yield or resilience." },
  { title: "Chemovar", section: "Strains · Glossary", type: "glossary", url: "strains.html#glossary-chemovar", desc: "A classification based on a plant's chemical profile rather than its name." },
];
