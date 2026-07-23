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
      'Aglabs adalah lab software independen. Kami bereksperimen dengan ide, membangun tools, dan merilis yang berhasil.',
  },
  nav: {
    about: 'Tentang',
    projects: 'Proyek',
    contact: 'Kontak',
    toggleMenu: 'Buka menu',
  },
  hero: {
    tagline: 'Tempat ide menjadi eksperimen, dan eksperimen menjadi software.',
    getInTouch: 'Hubungi Kami',
    whatsapp: 'WhatsApp',
    viewProjects: 'Lihat Proyek',
  },
  about: {
    headingPre: 'Apa itu ',
    headingAccent: 'Aglabs',
    headingPost: '?',
    intro:
      'Aglabs adalah lab software independen. Kami bereksperimen dengan ide, membangun tools untuk kami sendiri dan orang lain, serta merilis yang berhasil. Anggap saja playground tempat kode bertemu rasa penasaran.',
    founderPre: 'Didirikan dan dikelola oleh ',
    founderLink: 'seorang software engineer',
    founderPost: ' dengan pengalaman 4+ tahun.',
    pillars: [
      {
        title: 'Build',
        description:
          'Kami membuat tools, aplikasi, dan sistem dari nol. Setiap proyek berawal dari ide mentah yang dibentuk menjadi software yang berfungsi.',
      },
      {
        title: 'Experiment',
        description:
          'Kami menjelajahi pendekatan tak biasa, mencoba tech stack baru, dan mendorong batasan. Tidak semuanya dirilis — dan justru itu intinya.',
      },
      {
        title: 'Ship',
        description:
          'Saat eksperimen terbukti berhasil, kami merilisnya. Pengguna nyata, feedback nyata, iterasi nyata. Dari lab ke production.',
      },
    ],
  },
  projects: {
    headingPre: 'Lab ',
    headingAccent: 'Proyek',
    headingPost: '',
    subtitle: 'Pilihan eksperimen yang berhasil keluar dari lab.',
    visit: 'Kunjungi',
  },
  footer: {
    headingPre: 'Mari ',
    headingAccent: 'Terhubung',
    headingPost: '',
    copy: 'Punya ide, pertanyaan, atau sekadar ingin menyapa? Kirim email atau hubungi kami lewat WhatsApp.',
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
