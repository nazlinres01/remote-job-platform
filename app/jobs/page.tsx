"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpDown, Briefcase, Filter, Search } from "lucide-react"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("all")
  const [jobType, setJobType] = useState("all")

  // Örnek iş ilanları verisi
  const jobs = [
    {
      id: 1,
      title: "Frontend Geliştirici",
      company: "TechCorp",
      location: "Uzaktan",
      type: "Tam Zamanlı",
      category: "Yazılım Geliştirme",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      salary: "₺30,000 - ₺45,000",
      description: "Modern web uygulamaları geliştirmek için deneyimli bir frontend geliştiricisi arıyoruz.",
      postedAt: "2 gün önce",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      title: "Backend Geliştirici",
      company: "InnoTech",
      location: "Uzaktan",
      type: "Tam Zamanlı",
      category: "Yazılım Geliştirme",
      tags: ["Node.js", "Express", "MongoDB"],
      salary: "₺35,000 - ₺50,000",
      description: "Ölçeklenebilir API'ler ve mikroservisler geliştirmek için backend uzmanı arıyoruz.",
      postedAt: "3 gün önce",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      title: "UX/UI Tasarımcı",
      company: "DesignHub",
      location: "Uzaktan",
      type: "Yarı Zamanlı",
      category: "Tasarım",
      tags: ["Figma", "Adobe XD", "UI/UX"],
      salary: "₺25,000 - ₺40,000",
      description: "Kullanıcı deneyimini iyileştirecek yaratıcı tasarımlar oluşturacak bir tasarımcı arıyoruz.",
      postedAt: "1 hafta önce",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      title: "DevOps Mühendisi",
      company: "CloudTech",
      location: "Uzaktan",
      type: "Tam Zamanlı",
      category: "DevOps",
      tags: ["AWS", "Docker", "Kubernetes"],
      salary: "₺40,000 - ₺60,000",
      description: "CI/CD süreçlerini yönetecek ve bulut altyapısını optimize edecek bir DevOps uzmanı arıyoruz.",
      postedAt: "5 gün önce",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      title: "Mobil Uygulama Geliştirici",
      company: "AppWorks",
      location: "Uzaktan",
      type: "Tam Zamanlı",
      category: "Mobil Geliştirme",
      tags: ["React Native", "Flutter", "iOS/Android"],
      salary: "₺35,000 - ₺50,000",
      description: "Çapraz platform mobil uygulamalar geliştirecek deneyimli bir mobil geliştirici arıyoruz.",
      postedAt: "1 gün önce",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      title: "Veri Bilimci",
      company: "DataInsight",
      location: "Uzaktan",
      type: "Tam Zamanlı",
      category: "Veri Bilimi",
      tags: ["Python", "Machine Learning", "SQL"],
      salary: "₺45,000 - ₺65,000",
      description:
        "Büyük veri setlerini analiz edecek ve makine öğrenimi modelleri geliştirecek bir veri bilimci arıyoruz.",
      postedAt: "4 gün önce",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 7,
      title: "Ürün Yöneticisi",
      company: "ProductLabs",
      location: "Uzaktan",
      type: "Tam Zamanlı",
      category: "Ürün Yönetimi",
      tags: ["Agile", "Product Strategy", "User Research"],
      salary: "₺40,000 - ₺60,000",
      description: "Dijital ürünlerin geliştirilmesini yönetecek deneyimli bir ürün yöneticisi arıyoruz.",
      postedAt: "6 gün önce",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 8,
      title: "İçerik Yazarı",
      company: "ContentHub",
      location: "Uzaktan",
      type: "Serbest Çalışma",
      category: "İçerik",
      tags: ["Copywriting", "SEO", "Blog"],
      salary: "Proje Bazlı",
      description: "Teknoloji ve yazılım konularında içerik üretecek yetenekli bir içerik yazarı arıyoruz.",
      postedAt: "3 gün önce",
      logo: "/placeholder.svg?height=40&width=40",
    },
  ]

  // Filtreleme fonksiyonu
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = category === "all" || job.category === category
    const matchesType = jobType === "all" || job.type === jobType

    return matchesSearch && matchesCategory && matchesType
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            <span className="text-gradient-primary">İş İlanları</span>
          </h2>
        </div>
        <Separator />
        <div className="grid gap-4 md:grid-cols-[250px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="space-y-4">
            <div className="rounded-lg border p-4 shadow-sm bg-card">
              <h3 className="mb-4 text-lg font-medium">Filtreler</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="category" className="text-sm font-medium">
                    Kategori
                  </label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger id="category" className="w-full">
                      <SelectValue placeholder="Tüm Kategoriler" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tüm Kategoriler</SelectItem>
                      <SelectItem value="Yazılım Geliştirme">Yazılım Geliştirme</SelectItem>
                      <SelectItem value="Tasarım">Tasarım</SelectItem>
                      <SelectItem value="DevOps">DevOps</SelectItem>
                      <SelectItem value="Mobil Geliştirme">Mobil Geliştirme</SelectItem>
                      <SelectItem value="Veri Bilimi">Veri Bilimi</SelectItem>
                      <SelectItem value="Ürün Yönetimi">Ürün Yönetimi</SelectItem>
                      <SelectItem value="İçerik">İçerik</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="jobType" className="text-sm font-medium">
                    İş Tipi
                  </label>
                  <Select value={jobType} onValueChange={setJobType}>
                    <SelectTrigger id="jobType" className="w-full">
                      <SelectValue placeholder="Tüm İş Tipleri" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tüm İş Tipleri</SelectItem>
                      <SelectItem value="Tam Zamanlı">Tam Zamanlı</SelectItem>
                      <SelectItem value="Yarı Zamanlı">Yarı Zamanlı</SelectItem>
                      <SelectItem value="Serbest Çalışma">Serbest Çalışma</SelectItem>
                      <SelectItem value="Staj">Staj</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setSearchTerm("")
                      setCategory("all")
                      setJobType("all")
                    }}
                  >
                    Filtreleri Temizle
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2 bg-card rounded-lg p-2 shadow-sm">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="İş unvanı, şirket veya anahtar kelime ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button variant="outline" size="icon" className="shrink-0">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filtrele</span>
              </Button>
              <Button variant="outline" size="icon" className="shrink-0">
                <ArrowUpDown className="h-4 w-4" />
                <span className="sr-only">Sırala</span>
              </Button>
            </div>
            <div className="grid gap-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <Card key={job.id} className="card-hover overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <img
                              alt={job.company}
                              className="rounded-full object-cover"
                              height="40"
                              src={job.logo || "/placeholder.svg"}
                              width="40"
                            />
                          </div>
                          <div className="space-y-1">
                            <h3 className="font-semibold text-lg">{job.title}</h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <span className="font-medium text-foreground">{job.company}</span>
                              <span className="mx-1">•</span>
                              <span>{job.location}</span>
                              <span className="mx-1">•</span>
                              <span>{job.postedAt}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-primary">{job.salary}</p>
                          <p className="text-sm text-muted-foreground">{job.type}</p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-muted-foreground">{job.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {job.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-6 pt-0 bg-card">
                      <div className="flex items-center">
                        <Briefcase className="mr-1 h-4 w-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{job.category}</span>
                      </div>
                      <Link href={`/jobs/${job.id}`}>
                        <Button className="bg-gradient-primary hover-lift shadow-sm shadow-primary/20">
                          İlana Başvur
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Search className="h-10 w-10" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">İlan Bulunamadı</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Arama kriterlerinize uygun iş ilanı bulunamadı. Lütfen filtrelerinizi değiştirin.
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
