export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  institution: string;
  content: string;
  highlight: string;
  category: "all" | "scopus" | "buku" | "hki";
  badge: string;
  rating: number;
  image: string;
}

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Dr. Budi Santoso, M.Si",
    role: "Dosen & Peneliti Senior",
    institution: "Universitas Indonesia",
    highlight: "Artikel Tembus Scopus Q2",
    category: "scopus",
    badge: "Scopus Q2",
    content: "Layanan yang luar biasa profesional. Artikel saya berhasil tembus Scopus Q2 berkat pendampingan yang intensif dari tim Triaksara Publisher. Proses komunikasi sangat responsif dan transparan dari awal hingga LoA terbit.",
    rating: 5,
    image: "/images/testimonials/pria1.png"
  },
  {
    id: 2,
    name: "Prof. Siti Aminah, Ph.D",
    role: "Guru Besar",
    institution: "Universitas Gadjah Mada (UGM)",
    highlight: "Sertifikat HKI Terbit Kilat & Resmi",
    category: "hki",
    badge: "HKI Resmi Kemenkumham",
    content: "Pengurusan HKI untuk produk penelitian saya sangat cepat dan transparan. Tidak perlu pusing mengurus administrasi yang rumit. Tim Triaksara sangat membantu hingga sertifikat resmi HKI terbit.",
    rating: 5,
    image: "/images/testimonials/wanita.png"
  },
  {
    id: 3,
    name: "Andi Wijaya, M.Kom",
    role: "Peneliti Independen",
    institution: "Peneliti Bidang AI",
    highlight: "Konversi Tesis ke Buku Ber-ISBN",
    category: "buku",
    badge: "Buku Ber-ISBN",
    content: "Konversi tesis menjadi buku ber-ISBN dikerjakan dengan sangat rapi. Tata letak, indexing, dan desain covernya sangat elegan dan modern. Naskah langsung siap didistribusikan ke perpustakaan.",
    rating: 5,
    image: "/images/testimonials/pria2.png"
  },
  {
    id: 4,
    name: "Dr. Rina Purnamasari, M.Pd",
    role: "Dosen & Ketua Lab Riset",
    institution: "Institut Teknologi Bandung (ITB)",
    highlight: "Accepted Tanpa Major Revision",
    category: "scopus",
    badge: "Scopus Q1",
    content: "Sangat terbantu dengan layanan proofreading dan alignment kaidah ilmiahnya. Bahasa Inggris di paper saya menjadi natural dan standar akademik internasional. Paper langsung diterima reviewer!",
    rating: 5,
    image: "/images/testimonials/wanita1.png"
  },
  {
    id: 5,
    name: "Rahmat Hidayat, S.T., M.T",
    role: "Dosen Teknik Mesin",
    institution: "Universitas Brawijaya",
    highlight: "Buku Teks Kuliah Resmi",
    category: "buku",
    badge: "Buku Ajar ISBN",
    content: "Proses penerbitan buku teks kuliah saya berjalan sangat lancar. Tim editorial bekerja profesional, cepat tanggap, dan hasilnya melampaui ekspektasi. Sangat recommended untuk para akademisi.",
    rating: 5,
    image: "/images/testimonials/pria3.png"
  },
  {
    id: 6,
    name: "Dewi Kusumawati, M.Hum",
    role: "Peneliti Bidang Sosial Humaniora",
    institution: "BRIN / Eks-LIPI",
    highlight: "Kualitas Publikasi Berstandar Tinggi",
    category: "scopus",
    badge: "SINTA 2 & WoS",
    content: "Saya sangat terkesan dengan ketelitian tim Triaksara. Naskah penelitian saya yang sempat tertunda akhirnya selesai direview, diformat rapi, dan diterbitkan dengan reputasi terbaik.",
    rating: 5,
    image: "/images/testimonials/wanita2.png"
  },
  {
    id: 7,
    name: "Prof. Hendra Gunawan, Ph.D",
    role: "Guru Besar Ilmu Kedokteran",
    institution: "Universitas Hasanuddin",
    highlight: "Tembus Jurnal Internasional Scopus Q1",
    category: "scopus",
    badge: "Scopus Q1 Medis",
    content: "Triaksara Publisher benar-benar memahami kebutuhan para akademisi. Layanan submit jurnal internasional mereka sangat membantu saya dalam menembus jurnal bereputasi tinggi.",
    rating: 5,
    image: "/images/testimonials/pria4.png"
  },
  {
    id: 8,
    name: "Nurul Fadhilah, M.Sc",
    role: "Dosen Sains & Bioteknologi",
    institution: "Universitas Airlangga",
    highlight: "Terbit di Jurnal Terindeks WoS",
    category: "scopus",
    badge: "Web of Science (WoS)",
    content: "Tim Triaksara sangat sabar dan metodologis dalam membimbing saya dari awal persiapan hingga artikel dinyatakan terbit. Penjelasannya jelas dan naskah terbit di jurnal Web of Science.",
    rating: 5,
    image: "/images/testimonials/wanita3.png"
  },
  {
    id: 9,
    name: "Yusuf Abdurrahman, S.H., M.H",
    role: "Peneliti Hukum & Dosen",
    institution: "Universitas Padjadjaran",
    highlight: "Pendampingan Jurnal Hukum SINTA 2",
    category: "scopus",
    badge: "SINTA 2",
    content: "Layanan konsultasi jurnal di sini sangat membantu. Tim sangat paham etika publikasi dan standar akreditasi, membimbing naskah hukum saya hingga terbit tepat waktu untuk syarat BKD.",
    rating: 5,
    image: "/images/testimonials/pria5.png"
  },
  {
    id: 10,
    name: "Sri Wahyuni, M.Kes",
    role: "Dosen Ilmu Kesehatan",
    institution: "Poltekkes Kemenkes",
    highlight: "Buku Monograf & HKI Selesai Tuntas",
    category: "buku",
    badge: "Buku Monograf + HKI",
    content: "Luar biasa! Naskah buku referensi saya dikerjakan dengan sangat teliti dan hasilnya sangat memuaskan. Biaya terjangkau namun kualitas profesional dan sertifikat hak ciptanya terjamin resmi.",
    rating: 5,
    image: "/images/testimonials/wanita4.png"
  }
];
