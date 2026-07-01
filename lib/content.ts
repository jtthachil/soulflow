// Site content for SoulFlow India, ported verbatim from the Claude Design prototype.

export type Service = {
  no: string;
  name: string;
  desc: string;
  long: string;
  interest: string;
};

export const services: Service[] = [
  {
    no: "01",
    name: "Therapy",
    desc: "One-on-one online sessions in a confidential, judgement-free space.",
    long: "Personalised, evidence-based one-on-one therapy, online and confidential. Work through anxiety, relationships, life transitions and more, at your own pace.",
    interest: "Therapy session",
  },
  {
    no: "02",
    name: "Workshops",
    desc: "Themed group sessions on healing, growth and everyday wellbeing.",
    long: "Interactive group workshops on themes like self-compassion, boundaries, anxiety and mindful living, with practical tools you can carry into daily life.",
    interest: "Workshop",
  },
  {
    no: "03",
    name: "Support Groups",
    desc: "Safe, facilitated circles to share, connect and feel less alone.",
    long: "Facilitated peer circles where you can share openly and find community. A gentle reminder that you are never alone in what you carry.",
    interest: "Support group",
  },
  {
    no: "04",
    name: "Internships",
    desc: "Hands-on experience for aspiring mental health professionals.",
    long: "Structured, mentored internships giving psychology students real exposure to clinical and community work, and a meaningful start to their careers.",
    interest: "Internship",
  },
  {
    no: "05",
    name: "Training",
    desc: "Skill-building programmes for students and practitioners.",
    long: "Professional training and skill-building programmes, from foundational psychology bootcamps to advanced practitioner workshops.",
    interest: "Training programme",
  },
  {
    no: "06",
    name: "Psychology Bootcamp",
    desc: "An intensive introduction to the world of psychology.",
    long: "An immersive bootcamp covering core concepts, real-world applications and career pathways, perfect for anyone curious about psychology.",
    interest: "Psychology Bootcamp",
  },
];

export type Testimonial = {
  quote: string;
  initials: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I finally felt heard without being judged. The sessions gave me tools I still use every day.",
    initials: "A",
    name: "Anonymous",
    role: "Therapy client",
  },
  {
    quote:
      "The workshop was such a warm, safe space. I left feeling lighter and genuinely understood.",
    initials: "R",
    name: "Anonymous",
    role: "Workshop attendee",
  },
  {
    quote:
      "My internship at SoulFlow shaped how I see this field: compassionate, real and human.",
    initials: "S",
    name: "Anonymous",
    role: "Former intern",
  },
];

export type Value = {
  sym: string;
  title: string;
  desc: string;
};

export const values: Value[] = [
  {
    sym: "✿",
    title: "Compassion first",
    desc: "We lead with warmth and meet you exactly where you are, no judgement, ever.",
  },
  {
    sym: "✦",
    title: "Grounded in science",
    desc: "Every session and programme is rooted in evidence-based psychology.",
  },
  {
    sym: "❋",
    title: "Built for everyone",
    desc: "Accessible, stigma-free support designed for real people and real lives.",
  },
];

export type Founder = {
  id: string;
  src: string;
  name: string;
  role: string;
  bio: string;
};

export const founders: Founder[] = [
  {
    id: "sf-founder-1",
    src: "/assets/founder-yuktika.png",
    name: "Yuktika Pilania",
    role: "Psychologist & Corporate Consultant · Co-Founder",
    bio: "Yuktika works with young adults, couples and families navigating personal, emotional and relational concerns, as well as professionals and organizations, drawing on her corporate background. Bringing both professional training and lived experience, she creates spaces where people feel safe enough to slow down, be, and reconnect with themselves.",
  },
  {
    id: "sf-founder-2",
    src: "/assets/founder-achintt.png",
    name: "Achintt Kaur",
    role: "Psychologist & Socio-Emotional Skills Trainer · Co-Founder",
    bio: "Achintt works with children, adolescents, young adults and adults, supporting them through emotional, academic and career transitions, with a warm and skills-focused approach.",
  },
];

export type ScheduleEntry = {
  date: string;
  my: string;
  day: string;
  title: string;
  meta: string;
};

export const schedule: ScheduleEntry[] = [
  {
    date: "13",
    my: "Jul 2026",
    day: "Monday",
    title: "Mindful Mondays: Support Group",
    meta: "7:00 PM IST · Online · Free",
  },
  {
    date: "15",
    my: "Jul 2026",
    day: "Wednesday",
    title: "Understanding Anxiety: Workshop",
    meta: "6:30 PM IST · Online",
  },
  {
    date: "17",
    my: "Jul 2026",
    day: "Friday",
    title: "Psychology Bootcamp 2026: New batch begins",
    meta: "5:00 PM IST · Online",
  },
  {
    date: "18",
    my: "Jul 2026",
    day: "Saturday",
    title: "Inner Child Healing: Workshop",
    meta: "11:00 AM IST · Online",
  },
];

export type Specialization = {
  title: string;
  items: string[];
};

export const specializations: Specialization[] = [
  {
    title: "Individual Therapy",
    items: [
      "Anxiety, depression & ADHD",
      "Emotional overwhelm, shutdown & numbness",
      "Self-esteem, shame & inner criticism",
      "Perfectionism, people-pleasing & stalled trajectories",
    ],
  },
  {
    title: "Trauma, Attachment & Relational Patterns",
    items: [
      "Childhood emotional neglect & abandonment",
      "Relational trauma",
      "Repeating dynamics in relationships",
      "Difficulty trusting or feeling emotionally safe",
    ],
  },
  {
    title: "Identity & Meaning-Making",
    items: [
      "Identity confusion or exploration",
      "Reproductive decision-making",
      "Personal values vs family & societal expectations",
      "Intergenerational, cultural & inherited roles",
    ],
  },
  {
    title: "Couples & Family Counselling",
    items: [
      "Communication & unresolved conflict",
      "Emotional safety & trust",
      "Boundaries, roles & unmet relational needs",
      "Family dynamics & pre-marital counselling",
    ],
  },
  {
    title: "Workplace Consulting",
    items: [
      "Burnout, stress & high-functioning distress",
      "Psychological safety & workplace trauma",
      "Communication, boundaries & role overload",
      "Leadership, team interventions & POSH",
    ],
  },
  {
    title: "My Approach",
    items: [
      "Understanding emotional patterns & early experiences",
      "How experiences live in the body & nervous system",
      "Integrative, adapted to you rather than a fixed model",
      "Both professional training and lived experience",
    ],
  },
];

// Achintt's specialization areas, from her "Meet Achintt" carousel.
export const achinttAreas: Specialization[] = [
  {
    title: "Adolescent & Adult Wellbeing",
    items: [
      "Emotional regulation & self-esteem",
      "Peer relationships & social challenges",
      "Exam anxiety & academic pressure",
      "Identity development",
    ],
  },
  {
    title: "Career & Direction",
    items: [
      "Career confusion & decision-making",
      "Confidence building",
      "Life & academic transitions",
      "Navigating uncertainty about what's next",
    ],
  },
  {
    title: "Skill & Personality Development",
    items: [
      "Communication & interpersonal skills",
      "Interview preparedness",
      "Workplace etiquette",
      "Relationships & problem-solving",
    ],
  },
  {
    title: "School & Training Spaces",
    items: [
      "Counselling for students",
      "Workshops & capacity-building",
      "Support for educators",
      "Student wellbeing sessions",
    ],
  },
  {
    title: "My Approach",
    items: [
      "Emotional safety comes first",
      "Integrative & person-centred",
      "Blends therapy with creative, art-based practices",
      "Building self-awareness, confidence & skills",
    ],
  },
];

export type Therapist = {
  id: string;
  src: string;
  name: string;
  role: string;
  intro: string;
  draft?: boolean;
  areas: Specialization[];
};

export const therapists: Therapist[] = [
  {
    id: "sf-therapist-yuktika",
    src: "/assets/founder-yuktika.png",
    name: "Yuktika Pilania",
    role: "Psychologist & Corporate Consultant",
    intro:
      "Works with young adults, couples and families, plus professionals and organizations.",
    areas: specializations,
  },
  {
    id: "sf-therapist-achintt",
    src: "/assets/founder-achintt.png",
    name: "Achintt Kaur",
    role: "Psychologist & Socio-Emotional Skills Trainer",
    intro:
      "Works with school students, adolescents, young adults and adults across emotional, academic, career and life transitions.",
    areas: achinttAreas,
  },
];

export type QuickLink = {
  no: string;
  title: string;
  sub: string;
  href: string;
  target?: string;
};

const linktree = "https://linktr.ee/soulflowindia";

export const quicklinks: QuickLink[] = [
  {
    no: "01",
    title: "Psychology Bootcamp 2026 · Brochure",
    sub: "Dates, modules & pricing",
    href: linktree,
    target: "_blank",
  },
  {
    no: "02",
    title: "Bootcamp Registration",
    sub: "Reserve your spot for the next cohort",
    href: linktree,
    target: "_blank",
  },
  {
    no: "03",
    title: "Book Your Session",
    sub: "Begin with a gentle discovery call",
    href: "/contact",
    target: "_self",
  },
  {
    no: "04",
    title: "Make a Payment",
    sub: "Pay securely online via Razorpay",
    href: "https://razorpay.me/@Soulflow",
    target: "_blank",
  },
];

export const gallery = Array.from({ length: 8 }, (_, i) => ({
  id: `sf-ig-${i + 1}`,
  src: `/assets/sf-ig-${i + 1}.png`,
}));

export const navItems = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "services", label: "Services", href: "/services" },
  { key: "gallery", label: "Gallery", href: "/gallery" },
  { key: "contact", label: "Contact", href: "/contact" },
] as const;
