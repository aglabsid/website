export type Locale = 'en' | 'id'

export const locales: Locale[] = ['id', 'en']
export const defaultLocale: Locale = 'id'

const en = {
  meta: {
    title: 'Aglabs — Software Lab & Experiment',
    description:
      'Aglabs is an independent software lab. We experiment with ideas, build tools, and ship what works.',
  },
  nav: {
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    toggleMenu: 'Toggle menu',
  },
  hero: {
    tagline: 'Where ideas become experiments, and experiments become software.',
    getInTouch: 'Get In Touch',
    whatsapp: 'WhatsApp',
    viewProjects: 'View Projects',
  },
  about: {
    headingPre: 'What is ',
    headingAccent: 'Aglabs',
    headingPost: '?',
    intro:
      'Aglabs is an independent software lab. We experiment with ideas, build tools for ourselves and others, and ship what works. Think of it as a playground where code meets curiosity.',
    founderPre: 'Founded and managed by ',
    founderLink: 'a software engineer',
    founderPost: ' with 4+ years of experience.',
    pillars: [
      {
        title: 'Build',
        description:
          'We craft tools, apps, and systems from scratch. Every project starts as a raw idea that gets shaped into working software.',
      },
      {
        title: 'Experiment',
        description:
          'We explore unconventional approaches, test new tech stacks, and push boundaries. Not everything ships — and that is the point.',
      },
      {
        title: 'Ship',
        description:
          'When an experiment proves itself, we ship it. Real users, real feedback, real iteration. From lab to production.',
      },
    ],
  },
  projects: {
    headingPre: '',
    headingAccent: 'Projects',
    headingPost: ' Lab',
    subtitle: 'A selection of experiments that made it out of the lab.',
    visit: 'Visit',
  },
  footer: {
    headingPre: "Let's ",
    headingAccent: 'Connect',
    headingPost: '',
    copy: 'Have an idea, a question, or just want to say hi? Drop us an email or message us on WhatsApp.',
    rights: 'All rights reserved.',
  },
}

const id: typeof en = {
  meta: {
    title: 'Aglabs — Software Lab & Experiment',
    description:
      'Aglabs itu lab software independen. Kita suka ngulik ide, bikin tools, dan merilis yang beneran jalan.',
  },
  nav: {
    about: 'Tentang',
    projects: 'Proyek',
    contact: 'Kontak',
    toggleMenu: 'Buka menu',
  },
  hero: {
    tagline: 'Tempat ide jadi eksperimen, dan eksperimen jadi software.',
    getInTouch: 'Ngobrol Yuk',
    whatsapp: 'WhatsApp',
    viewProjects: 'Intip Proyek',
  },
  about: {
    headingPre: 'Apa itu ',
    headingAccent: 'Aglabs',
    headingPost: '?',
    intro:
      'Aglabs itu lab software independen. Kita suka ngulik ide, bikin tools buat sendiri maupun orang lain, dan merilis yang beneran jalan. Anggap aja playground tempat kode ketemu rasa penasaran.',
    founderPre: 'Didirikan dan diurus langsung oleh ',
    founderLink: 'seorang software engineer',
    founderPost: ' yang punya pengalaman 4+ tahun.',
    pillars: [
      {
        title: 'Build',
        description:
          'Kita bikin tools, aplikasi, dan sistem dari nol. Setiap proyek berawal dari ide mentah yang diracik jadi software yang beneran jalan.',
      },
      {
        title: 'Experiment',
        description:
          'Kita suka nyoba pendekatan yang nggak biasa, ngulik tech stack baru, dan dorong batasan. Nggak semua dirilis — dan justru itu serunya.',
      },
      {
        title: 'Ship',
        description:
          'Kalau eksperimen terbukti oke, langsung kita rilis. Pengguna nyata, feedback nyata, iterasi nyata. Dari lab ke production.',
      },
    ],
  },
  projects: {
    headingPre: 'Lab ',
    headingAccent: 'Proyek',
    headingPost: '',
    subtitle: 'Kumpulan eksperimen yang berhasil lolos dari lab.',
    visit: 'Kunjungi',
  },
  footer: {
    headingPre: 'Yuk ',
    headingAccent: 'Ngobrol',
    headingPost: '',
    copy: 'Punya ide, pertanyaan, atau cuma mau nyapa? Kirim email atau chat kita di WhatsApp.',
    rights: 'Hak cipta dilindungi.',
  },
}

export const ui = { en, id }

export function useTranslations(locale: Locale) {
  return ui[locale]
}

export function localePath(locale: Locale) {
  return locale === defaultLocale ? '/' : `/${locale}/`
}
