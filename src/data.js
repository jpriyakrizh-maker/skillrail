// Every image below is a direct URL. Swap any link with your own.
const u = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const navLinks = [
  { label: 'Subjects', href: '#lines' },
  { label: 'Courses', href: '#courses' },
  { label: 'Mentors', href: '#mentors' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const heroImage = u('photo-1522202176988-66273c2fd55f', 1200)

export const ticketLines = [
  { id: 'web', name: 'Web development', duration: '6 months' },
  { id: 'data', name: 'Data and AI', duration: '7 months' },
  { id: 'design', name: 'UI and UX design', duration: '4 months' },
  { id: 'security', name: 'Cyber security', duration: '6 months' },
]

export const companies = ['Zoho', 'Infosys', 'TCS', 'Freshworks', 'Wipro', 'HCL']

export const stats = [
  { value: '1M+', label: 'Students' },
  { value: '500+', label: 'Mentors' },
  { value: '120', label: 'Courses' },
  { value: '4.8', label: 'Average rating' },
]

export const browseLines = [
  { name: 'Web development', stations: 24, img: u('photo-1461749280684-dccba630e2f6') },
  { name: 'Data and AI', stations: 18, img: u('photo-1551288049-bebda4e38f71') },
  { name: 'UI and UX design', stations: 15, img: u('photo-1561070791-2526d30994b5') },
  { name: 'Business', stations: 12, img: u('photo-1454165804606-c3d57bc86b40') },
  { name: 'Photography', stations: 9, img: u('photo-1452587925148-ce544e77e70d') },
  { name: 'Languages', stations: 14, img: u('photo-1546410531-bb4caa6b424d') },
  { name: 'Music', stations: 8, img: u('photo-1511379938547-c1f69419868d') },
  { name: 'Cyber security', stations: 11, img: u('photo-1550751827-4bd374c3f58b') },
]

export const courses = [
  { title: 'Full-stack React', level: 'Beginner', hours: 42, rating: 4.9, price: '₹45,000', by: 'Priya S.', img: u('photo-1498050108023-c5249f4df085') },
  { title: 'Python for data', level: 'Beginner', hours: 30, rating: 4.8, price: '₹38,000', by: 'Arun K.', img: u('photo-1551288049-bebda4e38f71') },
  { title: 'UI and UX basics', level: 'Intermediate', hours: 24, rating: 4.9, price: '₹35,000', by: 'Meera R.', img: u('photo-1561070791-2526d30994b5') },
  { title: 'Machine learning', level: 'Advanced', hours: 55, rating: 4.7, price: '₹55,000', by: 'Arun K.', img: u('photo-1555949963-ff9fe0c870eb') },
]

export const steps = [
  { title: 'Choose a path', text: 'Tell us the job you want and we show the courses in order.' },
  { title: 'Learn and build', text: 'Watch short videos, then do a project after each course.' },
  { title: 'Meet your mentor', text: 'One live session every week to clear your doubts.' },
  { title: 'Get your certificate', text: 'Finish the path and download it. Add it to LinkedIn.' },
]

export const departures = [
  { line: 'Web development', time: 'Mon 09:00', platform: 3, status: 'Enrolling', tone: 'ok' },
  { line: 'Data analysis', time: 'Wed 18:30', platform: 1, status: '12 seats left', tone: 'wait' },
  { line: 'UI and UX design', time: 'Fri 10:00', platform: 5, status: 'Almost full', tone: 'full' },
  { line: 'Cyber security', time: 'Sat 11:00', platform: 2, status: 'Open', tone: 'ok' },
]

export const why = [
  { title: 'Learn by building', img: u('photo-1517694712202-14dd9538aa97'), text: 'You build real projects, not just watch videos.', color: '#c8f169', big: true },
  { title: 'Live mentors', img: u('photo-1522071820081-009f0129c71c'), text: 'Talk to a mentor every week.', color: '#ff7f93' },
  { title: 'Learn anywhere', img: u('photo-1488190211105-8b0e65b80b4e'), text: 'Works on phone and laptop.', color: '#6fe3c1' },
  { title: 'Interview practice', img: u('photo-1521791136064-7986c2920216'), text: 'Portfolio help and mock interviews.', color: '#c4a8ff' },
  { title: 'Lifetime access', img: u('photo-1456513080510-7bf3a84b82f8'), text: 'Watch the videos again anytime.', color: '#e2dde7' },
]

export const mentors = [
  { name: 'Priya S.', role: 'Senior engineer', img: u('photo-1494790108377-be9c29b29330', 600) },
  { name: 'Arun K.', role: 'Data scientist', img: u('photo-1507003211169-0a1dd7228f2d', 600) },
  { name: 'Meera R.', role: 'Product designer', img: u('photo-1438761681033-6461ffad8d80', 600) },
  { name: 'Vikram N.', role: 'Security lead', img: u('photo-1500648767791-00dcc994a43e', 600) },
]

export const reviews = [
  { text: 'Got a job at a small startup in Coimbatore after 5 months. The weekly mentor call helped the most.', name: 'Karthik', city: 'Coimbatore' },
  { text: 'I tried YouTube before and kept quitting. Here the order is fixed, so I just followed it.', name: 'Divya', city: 'Chennai' },
  { text: 'I showed my projects in interviews and they asked about them. Got 3 calls in a month.', name: 'Naveen', city: 'Madurai' },
]

export const tickets = [
  { name: 'Free trial', note: 'Try it first', price: 'Free', perks: ['7 days free', 'First lessons of every course', 'No card needed'] },
  { name: 'Monthly', note: 'Most popular', price: '₹799/mo', perks: ['All courses', 'Weekly live mentor call', 'Certificates'], featured: true },
  { name: 'Yearly', note: 'Best value', price: '₹5,999/yr', perks: ['Everything in Monthly', 'Resume help and mock interviews', 'Keep project files forever'] },
]

export const faqs = [
  { q: 'Do I need any experience to start?', a: 'No. Each path starts from zero. If you already know the basics, you can skip to a later course.' },
  { q: 'How long does a path take?', a: 'Most paths take 4 to 7 months if you study about 6 hours a week.' },
  { q: 'Will I get a certificate?', a: 'Yes, one for each course and one more when you finish the whole path.' },
  { q: 'Can I switch paths later?', a: 'Yes. Your progress is saved, and courses shared between paths count for both.' },
]

export const footerCols = [
  { title: 'Learn', links: ['All lines', 'Courses', 'Pricing'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog'] },
  { title: 'Support', links: ['Help centre', 'Contact', 'Terms'] },
]
