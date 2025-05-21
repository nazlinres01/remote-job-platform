import Link from "next/link"
import {
  ArrowRight,
  Building,
  CheckCircle,
  Globe,
  HeartHandshake,
  LifeBuoy,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Users,
} from "lucide-react"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  // Takım üyeleri
  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      role: "Kurucu & CEO",
      image: "/placeholder.svg?height=200&width=200",
      bio: "10+ yıllık teknoloji ve insan kaynakları deneyimine sahip. Daha önce birçok başarılı girişimde yer aldı.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Ayşe Kaya",
      role: "CTO",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Yazılım geliştirme ve teknoloji stratejisi konusunda uzman. Büyük ölçekli teknoloji şirketlerinde liderlik deneyimi.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Mehmet Demir",
      role: "Ürün Direktörü",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Kullanıcı odaklı ürün geliştirme konusunda uzman. Birçok başarılı dijital ürünün arkasındaki isim.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Zeynep Şahin",
      role: "İK & Operasyon Direktörü",
      image: "/placeholder.svg?height=200&width=200",
      bio: "İnsan kaynakları ve şirket operasyonları konusunda deneyimli. Ekip kültürü ve çalışan deneyimi odaklı çalışır.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ]

  // Değerler
  const values = [
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Kalite",
      description: "Her zaman en yüksek kalitede hizmet sunmayı taahhüt ediyoruz.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Topluluk",
      description: "Güçlü bir uzaktan çalışan topluluğu oluşturmak için çalışıyoruz.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Erişilebilirlik",
      description: "Dünyanın her yerinden yeteneklere ve fırsatlara erişim sağlıyoruz.",
    },
    {
      icon: <HeartHandshake className="h-8 w-8" />,
      title: "Güven",
      description: "Şeffaflık ve dürüstlük temel değerlerimizdir.",
    },
  ]

  // Şirket istatistikleri
  const stats = [
    { value: "50+", label: "Ülke" },
    { value: "100K+", label: "Kullanıcı" },
    { value: "1000+", label: "Şirket" },
    { value: "5000+", label: "İş İlanı" },
  ]

  // Zaman çizelgesi
  const timeline = [
    {
      year: "2020",
      title: "Başlangıç",
      description:
        "RemoteHub, uzaktan çalışmanın hızla yaygınlaştığı bir dönemde, bu alandaki boşluğu doldurmak amacıyla kuruldu.",
    },
    {
      year: "2021",
      title: "İlk Büyüme",
      description:
        "İlk yılımızda, platformumuz hızla büyüyerek binlerce kullanıcıya ve yüzlerce şirkete ev sahipliği yapmaya başladı.",
    },
    {
      year: "2022",
      title: "Genişleme",
      description:
        "Yeni özellikler ve hizmetler ekleyerek platformumuzu genişlettik ve uzaktan çalışma alanında lider konuma geldik.",
    },
    {
      year: "2023",
      title: "Global Erişim",
      description:
        "50'den fazla ülkede hizmet vermeye başladık ve global uzaktan çalışma ekosisteminde önemli bir oyuncu haline geldik.",
    },
    {
      year: "2024",
      title: "Bugün",
      description:
        "Bugün RemoteHub, dünya genelinde 100.000'in üzerinde kullanıcıya ve 1.000'in üzerinde şirkete hizmet veren kapsamlı bir platform.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Bölümü */}
        <section className="relative overflow-hidden bg-gradient-to-b from-accent to-background py-20 md:py-28 lg:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-secondary/10 blur-3xl"></div>
          </div>
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Uzaktan Çalışma Platformu
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  <span className="text-gradient-primary">RemoteHub</span> Hakkında
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Uzaktan çalışma dünyasında işverenler ve yetenekleri bir araya getiriyoruz.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button className="bg-gradient-primary hover-lift shadow-lg shadow-primary/25">
                  <Link href="/jobs" className="flex items-center gap-2">
                    İş İlanlarını Keşfet
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="hover-lift">
                  <Link href="/contact">Bizimle İletişime Geç</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* İstatistikler */}
        <section className="bg-card py-12 shadow-sm">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-center">
                  <div className="text-3xl font-bold text-primary md:text-4xl lg:text-5xl">{stat.value}</div>
                  <div className="mt-2 text-sm font-medium text-muted-foreground md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Misyon ve Vizyon */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Misyonumuz
                </div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Uzaktan Çalışmanın <span className="text-gradient-primary">Geleceğini</span> Şekillendiriyoruz
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  RemoteHub olarak misyonumuz, uzaktan çalışma dünyasında işverenler ve yetenekleri bir araya getirerek
                  herkesin istediği yerden çalışabildiği bir dünya yaratmaktır. Coğrafi sınırları ortadan kaldırarak
                  şirketlerin en iyi yeteneklere, yeteneklerin ise en iyi fırsatlara erişmesini sağlıyoruz.
                </p>
                <ul className="space-y-2 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Global yeteneklere erişim</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Uzaktan çalışma kültürünü yaygınlaştırma</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>İş-yaşam dengesini destekleme</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                  Vizyonumuz
                </div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Uzaktan Çalışmanın <span className="text-gradient-primary">Merkezi</span> Olmak
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Vizyonumuz, uzaktan çalışmanın norm haline geldiği bir dünyada, bu alandaki en güvenilir ve kapsamlı
                  platform olmaktır. İşverenler için en iyi yetenekleri, iş arayanlar için en iyi fırsatları sunarak
                  uzaktan çalışma ekosisteminin merkezinde yer almayı hedefliyoruz.
                </p>
                <ul className="space-y-2 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Yenilikçi uzaktan çalışma çözümleri</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Güvenilir ve şeffaf platform</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>Sürdürülebilir büyüme modeli</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Değerler */}
        <section className="bg-accent py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Değerlerimiz
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  RemoteHub'ı <span className="text-gradient-primary">Yönlendiren</span> Temel Değerler
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                  Her kararımızda ve eylemimizde bizi yönlendiren temel değerlerimiz
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="card-hover overflow-hidden border-none bg-card shadow-md transition-all duration-300"
                >
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full ${
                        index % 2 === 0 ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                      } mb-4`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hikayemiz / Zaman Çizelgesi */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Hikayemiz
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  RemoteHub'ın <span className="text-gradient-primary">Yolculuğu</span>
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                  Kuruluşumuzdan bugüne kadar olan yolculuğumuz
                </p>
              </div>
            </div>

            <div className="relative mx-auto mt-12 max-w-3xl">
              {/* Orta çizgi */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>

              {/* Zaman çizelgesi öğeleri */}
              {timeline.map((item, index) => (
                <div key={index} className="relative mb-12">
                  {/* Yıl işaretçisi */}
                  <div
                    className={`absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-white shadow-lg`}
                  >
                    {item.year}
                  </div>

                  {/* İçerik */}
                  <div
                    className={`relative ml-0 mt-6 md:ml-${
                      index % 2 === 0 ? "0" : "auto"
                    } w-full rounded-lg border bg-card p-6 shadow-sm md:w-[calc(50%-20px)] md:${
                      index % 2 === 0 ? "mr-auto" : "ml-auto"
                    } card-hover`}
                  >
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ekibimiz */}
        <section className="bg-accent py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Ekibimiz
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  RemoteHub'ı <span className="text-gradient-primary">Oluşturan</span> Harika İnsanlar
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                  Vizyonumuzu gerçeğe dönüştüren tutkulu ekibimizle tanışın
                </p>
              </div>
            </div>

            <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-card shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm font-medium text-primary">{member.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                    <div className="mt-4 flex space-x-3">
                      <a
                        href={member.social.linkedin}
                        className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                      <a
                        href={member.social.twitter}
                        className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary hover:text-white"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* İletişim ve Bize Katılın */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
              {/* İletişim */}
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  İletişim
                </div>
                <h2 className="text-3xl font-bold tracking-tight">
                  <span className="text-gradient-primary">Bizimle</span> İletişime Geçin
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Sorularınız, önerileriniz veya işbirliği fırsatları için bizimle iletişime geçebilirsiniz. Ekibimiz
                  size yardımcı olmaktan mutluluk duyacaktır.
                </p>

                <div className="space-y-4 rounded-xl border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">E-posta</h3>
                      <p className="text-muted-foreground">info@remotehub.com</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Telefon</h3>
                      <p className="text-muted-foreground">+90 212 123 4567</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Adres</h3>
                      <p className="text-muted-foreground">İstanbul, Türkiye</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="bg-gradient-primary hover-lift shadow-sm shadow-primary/20">
                    <Link href="/contact" className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Mesaj Gönder
                    </Link>
                  </Button>
                  <Button variant="outline" className="hover-lift">
                    <Link href="/faq" className="flex items-center gap-2">
                      <LifeBuoy className="h-4 w-4" />
                      SSS
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Bize Katılın */}
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                  Kariyer
                </div>
                <h2 className="text-3xl font-bold tracking-tight">
                  <span className="text-gradient-primary">Bize</span> Katılın
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  RemoteHub'da çalışmak ister misiniz? Uzaktan çalışma dünyasını şekillendiren ekibimize katılın ve
                  geleceğin çalışma modelini birlikte inşa edelim.
                </p>

                <div className="rounded-xl border bg-card p-6 shadow-sm">
                  <h3 className="mb-4 text-xl font-bold">Açık Pozisyonlar</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg bg-accent p-4 transition-colors hover:bg-accent/70">
                      <div>
                        <h4 className="font-medium">Yazılım Geliştirici</h4>
                        <p className="text-sm text-muted-foreground">Tam Zamanlı • Uzaktan</p>
                      </div>
                      <Button variant="outline" size="sm" className="hover-lift">
                        <Link href="/jobs/1" className="flex items-center gap-1">
                          Detaylar
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-accent p-4 transition-colors hover:bg-accent/70">
                      <div>
                        <h4 className="font-medium">Ürün Yöneticisi</h4>
                        <p className="text-sm text-muted-foreground">Tam Zamanlı • Uzaktan</p>
                      </div>
                      <Button variant="outline" size="sm" className="hover-lift">
                        <Link href="/jobs/2" className="flex items-center gap-1">
                          Detaylar
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-accent p-4 transition-colors hover:bg-accent/70">
                      <div>
                        <h4 className="font-medium">Pazarlama Uzmanı</h4>
                        <p className="text-sm text-muted-foreground">Tam Zamanlı • Uzaktan</p>
                      </div>
                      <Button variant="outline" size="sm" className="hover-lift">
                        <Link href="/jobs/3" className="flex items-center gap-1">
                          Detaylar
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary hover-lift shadow-sm shadow-primary/20">
                  <Link href="/careers" className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Kariyer Sayfamızı Ziyaret Edin
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Bölümü */}
        <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Uzaktan Çalışma Yolculuğunuza Bugün Başlayın
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                İster iş arıyor olun, ister yetenek arıyor olun, RemoteHub sizin için doğru platform.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button
                  className="bg-white text-primary hover:bg-white/90 hover-lift shadow-lg shadow-black/10"
                  size="lg"
                >
                  <Link href="/auth/register">Hemen Ücretsiz Kaydolun</Link>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 hover-lift" size="lg">
                  <Link href="/jobs">İş İlanlarını Keşfedin</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-card py-8 px-4 md:px-6">
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link className="flex items-center" href="/">
              <Globe className="h-6 w-6 mr-2 text-primary" />
              <span className="font-bold text-gradient-primary">RemoteHub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Uzaktan çalışma dünyasında işverenler ve yetenekleri bir araya getiriyoruz.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/jobs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  İş İlanları
                </Link>
              </li>
              <li>
                <Link href="/companies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Şirketler
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Yasal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Kullanım Şartları
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Çerez Politikası
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Bize Ulaşın</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                info@remotehub.com
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                İstanbul, Türkiye
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-8 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">© 2025 RemoteHub. Tüm hakları saklıdır.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
