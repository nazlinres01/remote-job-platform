"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import {
  ArrowLeft,
  Briefcase,
  Building,
  CalendarIcon,
  CheckCircleIcon,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CompanyDetailPage() {
  const params = useParams()
  const companyId = Number(params.id)

  // Örnek şirket verisi
  const company = {
    id: companyId,
    name: "TechCorp",
    logo: "/placeholder.svg?height=120&width=120",
    industry: "Yazılım Geliştirme",
    location: "İstanbul, Türkiye",
    size: "50-100",
    website: "https://example.com",
    email: "info@techcorp.com",
    phone: "+90 212 123 4567",
    founded: "2015",
    description:
      "TechCorp, kullanıcı odaklı web ve mobil uygulamalar geliştiren yenilikçi bir teknoloji şirketidir. 2015 yılında kurulan şirketimiz, müşterilerimize en iyi dijital deneyimi sunmak için çalışmaktadır. Modern teknolojileri kullanarak işletmelerin dijital dönüşüm süreçlerinde yanlarında oluyoruz. Ekibimiz, yazılım geliştirme, kullanıcı deneyimi tasarımı ve proje yönetimi konularında uzman profesyonellerden oluşmaktadır.",
    mission:
      "Müşterilerimizin dijital varlıklarını güçlendirmek ve teknoloji ile iş süreçlerini optimize etmelerine yardımcı olmak.",
    vision:
      "Teknoloji dünyasında öncü bir şirket olarak, yenilikçi çözümlerle işletmelerin dijital geleceğini şekillendirmek.",
    benefits: [
      "Esnek çalışma saatleri",
      "Uzaktan çalışma imkanı",
      "Rekabetçi maaş paketi",
      "Sağlık sigortası",
      "Yıllık eğitim bütçesi",
      "Düzenli ekip etkinlikleri",
      "Kariyer gelişim fırsatları",
    ],
    culture: [
      "Yenilikçilik ve sürekli öğrenme",
      "İşbirliği ve takım çalışması",
      "Müşteri odaklılık",
      "Açık iletişim",
      "İş-yaşam dengesi",
    ],
    openPositions: [
      {
        id: 1,
        title: "Frontend Geliştirici",
        type: "Tam Zamanlı",
        location: "Uzaktan",
        postedAt: "2 gün önce",
      },
      {
        id: 2,
        title: "Backend Geliştirici",
        type: "Tam Zamanlı",
        location: "Uzaktan",
        postedAt: "3 gün önce",
      },
      {
        id: 3,
        title: "UI/UX Tasarımcı",
        type: "Yarı Zamanlı",
        location: "Uzaktan",
        postedAt: "1 hafta önce",
      },
      {
        id: 4,
        title: "DevOps Mühendisi",
        type: "Tam Zamanlı",
        location: "Uzaktan",
        postedAt: "5 gün önce",
      },
      {
        id: 5,
        title: "Ürün Yöneticisi",
        type: "Tam Zamanlı",
        location: "Uzaktan",
        postedAt: "6 gün önce",
      },
    ],
    photos: [
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
      "/placeholder.svg?height=200&width=300",
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center mb-6">
          <Link href="/companies" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Şirketlere Dön
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex h-24 w-24 items-center justify-center rounded-md bg-muted">
                    <img
                      alt={company.name}
                      className="rounded-md object-cover"
                      height="120"
                      src={company.logo || "/placeholder.svg"}
                      width="120"
                    />
                  </div>
                  <div className="space-y-1 flex-1">
                    <h1 className="text-2xl font-bold">{company.name}</h1>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Building className="mr-1 h-4 w-4" />
                        <span>{company.industry}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        <span>{company.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-1 h-4 w-4" />
                        <span>{company.size} çalışan</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="mr-1 h-4 w-4" />
                        <span>{company.founded} yılında kuruldu</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-primary hover:underline"
                      >
                        <Globe className="mr-1 h-4 w-4" />
                        <span>{company.website}</span>
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-4 md:mt-0">
                    <Button>
                      <Mail className="mr-2 h-4 w-4" />
                      İletişime Geç
                    </Button>
                    <Button variant="outline">
                      <Briefcase className="mr-2 h-4 w-4" />
                      İş İlanlarını Gör
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="about">
              <TabsList>
                <TabsTrigger value="about">Hakkında</TabsTrigger>
                <TabsTrigger value="jobs">Açık Pozisyonlar</TabsTrigger>
                <TabsTrigger value="culture">Şirket Kültürü</TabsTrigger>
                <TabsTrigger value="photos">Fotoğraflar</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Şirket Hakkında</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{company.description}</p>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <h3 className="font-semibold">Misyonumuz</h3>
                        <p className="text-sm text-muted-foreground">{company.mission}</p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold">Vizyonumuz</h3>
                        <p className="text-sm text-muted-foreground">{company.vision}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>İletişim Bilgileri</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{company.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{company.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{company.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {company.website}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="jobs" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Açık Pozisyonlar</CardTitle>
                    <CardDescription>
                      {company.name} şirketinde şu anda {company.openPositions.length} açık pozisyon bulunmaktadır
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {company.openPositions.map((position) => (
                      <Link key={position.id} href={`/jobs/${position.id}`}>
                        <div className="flex items-center justify-between p-4 rounded-md border hover:border-primary/50 transition-colors">
                          <div className="space-y-1">
                            <h3 className="font-semibold">{position.title}</h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Briefcase className="mr-1 h-3 w-3" />
                              <span>{position.type}</span>
                              <span className="mx-1">•</span>
                              <MapPin className="mr-1 h-3 w-3" />
                              <span>{position.location}</span>
                              <span className="mx-1">•</span>
                              <CalendarIcon className="mr-1 h-3 w-3" />
                              <span>{position.postedAt}</span>
                            </div>
                          </div>
                          <Button size="sm">Başvur</Button>
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="culture" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Şirket Kültürü</CardTitle>
                    <CardDescription>
                      {company.name} şirketinde çalışmanın avantajları ve şirket değerleri
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-semibold">Değerlerimiz</h3>
                      <ul className="grid gap-2 md:grid-cols-2">
                        {company.culture.map((value, index) => (
                          <li key={index} className="flex items-center">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary mr-2">
                              {index + 1}
                            </div>
                            <span>{value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <h3 className="font-semibold">Çalışan Avantajları</h3>
                      <ul className="grid gap-2 md:grid-cols-2">
                        {company.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircleIcon className="mr-2 h-5 w-5 text-primary" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="photos" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Şirket Fotoğrafları</CardTitle>
                    <CardDescription>{company.name} şirketinin ofis ve etkinlik fotoğrafları</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {company.photos.map((photo, index) => (
                        <div key={index} className="overflow-hidden rounded-md">
                          <img
                            src={photo || "/placeholder.svg"}
                            alt={`${company.name} - Fotoğraf ${index + 1}`}
                            className="h-auto w-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Benzer Şirketler</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((id) => (
                  <Link key={id} href={`/companies/${id}`}>
                    <div className="flex items-start space-x-4 p-2 rounded-md hover:bg-muted/50 transition-colors">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                        <img
                          alt="Company"
                          className="rounded-md object-cover"
                          height="40"
                          src="/placeholder.svg?height=40&width=40"
                          width="40"
                        />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium">
                          {id === 1 ? "InnoTech" : id === 2 ? "WebSolutions" : "DesignHub"}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {id === 1 ? "Yazılım Geliştirme" : id === 2 ? "Web Geliştirme" : "Tasarım"}
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <MapPin className="mr-1 h-3 w-3" />
                          <span>
                            {id === 1 ? "Ankara, Türkiye" : id === 2 ? "İzmir, Türkiye" : "İstanbul, Türkiye"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Öne Çıkan İş İlanları</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {company.openPositions.slice(0, 3).map((position) => (
                  <Link key={position.id} href={`/jobs/${position.id}`}>
                    <div className="space-y-1 p-2 rounded-md hover:bg-muted/50 transition-colors">
                      <h4 className="font-medium">{position.title}</h4>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Briefcase className="mr-1 h-3 w-3" />
                        <span>{position.type}</span>
                        <span className="mx-1">•</span>
                        <MapPin className="mr-1 h-3 w-3" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <CalendarIcon className="mr-1 h-3 w-3" />
                        <span>{position.postedAt}</span>
                      </div>
                    </div>
                  </Link>
                ))}
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#jobs" onClick={() => document.querySelector('[data-value="jobs"]')?.click()}>
                    Tüm İlanları Gör
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
