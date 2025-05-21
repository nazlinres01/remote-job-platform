"use client"

import { useState } from "react"
import Link from "next/link"
import { Building, Filter, MapPin, Search } from "lucide-react"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [industry, setIndustry] = useState("all")
  const [size, setSize] = useState("all")

  // Örnek şirketler verisi
  const companies = [
    {
      id: 1,
      name: "TechCorp",
      logo: "/placeholder.svg?height=80&width=80",
      industry: "Yazılım Geliştirme",
      location: "İstanbul, Türkiye",
      size: "50-100",
      website: "https://example.com",
      description:
        "TechCorp, kullanıcı odaklı web ve mobil uygulamalar geliştiren yenilikçi bir teknoloji şirketidir. 2015 yılında kurulan şirketimiz, müşterilerimize en iyi dijital deneyimi sunmak için çalışmaktadır.",
      openPositions: 5,
    },
    {
      id: 2,
      name: "InnoTech",
      logo: "/placeholder.svg?height=80&width=80",
      industry: "Yazılım Geliştirme",
      location: "Ankara, Türkiye",
      size: "100-250",
      website: "https://example.com",
      description:
        "InnoTech, kurumsal yazılım çözümleri ve bulut hizmetleri sunan bir teknoloji şirketidir. Müşterilerimizin dijital dönüşüm süreçlerinde yanlarında olarak rekabet avantajı sağlıyoruz.",
      openPositions: 8,
    },
    {
      id: 3,
      name: "DesignHub",
      logo: "/placeholder.svg?height=80&width=80",
      industry: "Tasarım",
      location: "İzmir, Türkiye",
      size: "10-50",
      website: "https://example.com",
      description:
        "DesignHub, kullanıcı deneyimi ve arayüz tasarımı konusunda uzmanlaşmış yaratıcı bir ajans. Markaların dijital varlıklarını güçlendirmek için yenilikçi tasarım çözümleri sunuyoruz.",
      openPositions: 3,
    },
    {
      id: 4,
      name: "CloudTech",
      logo: "/placeholder.svg?height=80&width=80",
      industry: "Bulut Hizmetleri",
      location: "İstanbul, Türkiye",
      size: "100-250",
      website: "https://example.com",
      description:
        "CloudTech, işletmelere ölçeklenebilir ve güvenli bulut altyapısı çözümleri sunan bir teknoloji şirketidir. DevOps ve bulut mimarisi konularında uzman ekibimizle müşterilerimizin ihtiyaçlarına özel çözümler geliştiriyoruz.",
      openPositions: 6,
    },
    {
      id: 5,
      name: "DataInsight",
      logo: "/placeholder.svg?height=80&width=80",
      industry: "Veri Analizi",
      location: "İstanbul, Türkiye",
      size: "50-100",
      website: "https://example.com",
      description:
        "DataInsight, büyük veri analizi ve yapay zeka çözümleri sunan bir teknoloji şirketidir. İşletmelerin veriye dayalı kararlar almasına yardımcı olarak iş süreçlerini optimize ediyoruz.",
      openPositions: 4,
    },
    {
      id: 6,
      name: "AppWorks",
      logo: "/placeholder.svg?height=80&width=80",
      industry: "Mobil Uygulama",
      location: "Ankara, Türkiye",
      size: "10-50",
      website: "https://example.com",
      description:
        "AppWorks, iOS ve Android platformları için yenilikçi mobil uygulamalar geliştiren bir yazılım şirketidir. Kullanıcı deneyimini ön planda tutarak müşterilerimizin dijital varlığını güçlendiriyoruz.",
      openPositions: 3,
    },
    {
      id: 7,
      name: "WebSolutions",
      logo: "/placeholder.svg?height=80&width=80",
      industry: "Web Geliştirme",
      location: "İzmir, Türkiye",
      size: "10-50",
      website: "https://example.com",
      description:
        "WebSolutions, modern web teknolojileri kullanarak işletmelere özel web siteleri ve uygulamalar geliştiren bir dijital ajans. E-ticaret çözümlerinden kurumsal web sitelerine kadar geniş bir yelpazede hizmet sunuyoruz.",
      openPositions: 2,
    },
    {
      id: 8,
      name: "ProductLabs",
      logo: "/placeholder.svg?height=80&width=80",
      industry: "Ürün Geliştirme",
      location: "İstanbul, Türkiye",
      size: "50-100",
      website: "https://example.com",
      description:
        "ProductLabs, dijital ürün geliştirme ve inovasyon konusunda uzmanlaşmış bir teknoloji şirketidir. Fikir aşamasından pazara sunuma kadar tüm ürün geliştirme süreçlerinde müşterilerimize destek oluyoruz.",
      openPositions: 5,
    },
  ]

  // Filtreleme fonksiyonu
  const filteredCompanies = companies.filter((company) => {
    const matchesSearch =
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesIndustry = industry === "all" || company.industry === industry
    const matchesSize = size === "all" || company.size === size

    return matchesSearch && matchesIndustry && matchesSize
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Şirketler</h2>
        </div>
        <Separator />
        <div className="grid gap-4 md:grid-cols-[250px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-lg font-medium">Filtreler</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="industry" className="text-sm font-medium">
                    Sektör
                  </label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Tüm Sektörler" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tüm Sektörler</SelectItem>
                      <SelectItem value="Yazılım Geliştirme">Yazılım Geliştirme</SelectItem>
                      <SelectItem value="Tasarım">Tasarım</SelectItem>
                      <SelectItem value="Bulut Hizmetleri">Bulut Hizmetleri</SelectItem>
                      <SelectItem value="Veri Analizi">Veri Analizi</SelectItem>
                      <SelectItem value="Mobil Uygulama">Mobil Uygulama</SelectItem>
                      <SelectItem value="Web Geliştirme">Web Geliştirme</SelectItem>
                      <SelectItem value="Ürün Geliştirme">Ürün Geliştirme</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="size" className="text-sm font-medium">
                    Şirket Büyüklüğü
                  </label>
                  <Select value={size} onValueChange={setSize}>
                    <SelectTrigger id="size">
                      <SelectValue placeholder="Tüm Büyüklükler" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tüm Büyüklükler</SelectItem>
                      <SelectItem value="10-50">10-50 çalışan</SelectItem>
                      <SelectItem value="50-100">50-100 çalışan</SelectItem>
                      <SelectItem value="100-250">100-250 çalışan</SelectItem>
                      <SelectItem value="250-500">250-500 çalışan</SelectItem>
                      <SelectItem value="500+">500+ çalışan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setSearchTerm("")
                      setIndustry("all")
                      setSize("all")
                    }}
                  >
                    Filtreleri Temizle
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Şirket adı veya anahtar kelime ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <Button variant="outline" size="icon" className="shrink-0">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filtrele</span>
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredCompanies.length > 0 ? (
                filteredCompanies.map((company) => (
                  <Link key={company.id} href={`/companies/${company.id}`}>
                    <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center space-y-3">
                          <div className="flex h-20 w-20 items-center justify-center rounded-md bg-muted">
                            <img
                              alt={company.name}
                              className="rounded-md object-cover"
                              height="80"
                              src={company.logo || "/placeholder.svg"}
                              width="80"
                            />
                          </div>
                          <div className="space-y-1">
                            <h3 className="font-semibold">{company.name}</h3>
                            <div className="flex items-center justify-center text-sm text-muted-foreground">
                              <Building className="mr-1 h-3 w-3" />
                              <span>{company.industry}</span>
                            </div>
                            <div className="flex items-center justify-center text-sm text-muted-foreground">
                              <MapPin className="mr-1 h-3 w-3" />
                              <span>{company.location}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-3">{company.description}</p>
                          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            {company.openPositions} Açık Pozisyon
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                    <Building className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Şirket Bulunamadı</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Arama kriterlerinize uygun şirket bulunamadı. Lütfen filtrelerinizi değiştirin.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
