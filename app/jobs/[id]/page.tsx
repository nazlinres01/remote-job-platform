"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Briefcase, Building, Calendar, Clock, Globe, MapPin, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const [isApplying, setIsApplying] = useState(false)

  // Örnek iş ilanı verisi
  const job = {
    id: Number.parseInt(params.id),
    title: "Frontend Geliştirici",
    company: "TechCorp",
    location: "Uzaktan",
    type: "Tam Zamanlı",
    category: "Yazılım Geliştirme",
    tags: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux"],
    salary: "₺30,000 - ₺45,000",
    description: "Modern web uygulamaları geliştirmek için deneyimli bir frontend geliştiricisi arıyoruz.",
    postedAt: "2 gün önce",
    logo: "/placeholder.svg?height=80&width=80",
    about:
      "TechCorp, kullanıcı odaklı web ve mobil uygulamalar geliştiren yenilikçi bir teknoloji şirketidir. 2015 yılında kurulan şirketimiz, müşterilerimize en iyi dijital deneyimi sunmak için çalışmaktadır.",
    responsibilities: [
      "Modern JavaScript framework'leri (React, Next.js) kullanarak web uygulamaları geliştirmek",
      "Responsive ve kullanıcı dostu arayüzler tasarlamak ve uygulamak",
      "Backend ekibiyle işbirliği yaparak API entegrasyonlarını gerçekleştirmek",
      "Performans optimizasyonu ve kod kalitesini sağlamak",
      "Teknik dokümantasyon oluşturmak ve sürdürmek",
    ],
    requirements: [
      "En az 3 yıl React.js deneyimi",
      "TypeScript ve modern JavaScript (ES6+) konusunda güçlü bilgi",
      "CSS, SASS/SCSS ve Tailwind CSS gibi stil teknolojileri konusunda deneyim",
      "Responsive tasarım prensipleri konusunda bilgi",
      "Git versiyon kontrol sistemi konusunda deneyim",
      "İyi derecede İngilizce",
    ],
    benefits: [
      "Rekabetçi maaş paketi",
      "Tamamen uzaktan çalışma imkanı",
      "Esnek çalışma saatleri",
      "Sağlık sigortası",
      "Yıllık eğitim bütçesi",
      "Düzenli ekip etkinlikleri",
    ],
  }

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault()
    // Başvuru işlemi burada gerçekleştirilecek
    alert("Başvurunuz alındı! Teşekkür ederiz.")
    setIsApplying(false)
  }

  return (
    <div className="container mx-auto py-6 px-4 md:px-6 max-w-6xl">
      <div className="flex items-center mb-6">
        <Link href="/jobs" className="flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          İş İlanlarına Dön
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-start gap-4 pb-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-md bg-muted">
                <img
                  alt={job.company}
                  className="rounded-md object-cover"
                  height="80"
                  src={job.logo || "/placeholder.svg"}
                  width="80"
                />
              </div>
              <div className="grid gap-1">
                <CardTitle className="text-2xl">{job.title}</CardTitle>
                <CardDescription className="flex flex-wrap items-center gap-2 text-base">
                  <span className="font-medium text-foreground">{job.company}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="flex items-center">
                    <MapPin className="mr-1 h-3 w-3" />
                    {job.location}
                  </span>
                  <span className="text-muted-foreground">•</span>
                  <span className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {job.postedAt}
                  </span>
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm font-medium">
                  <Briefcase className="mr-1 h-3 w-3" />
                  {job.type}
                </div>
                <div className="inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm font-medium">
                  <Calendar className="mr-1 h-3 w-3" />
                  Hemen Başlayabilir
                </div>
                <div className="inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm font-medium">
                  <Globe className="mr-1 h-3 w-3" />
                  Türkiye
                </div>
              </div>

              <Tabs defaultValue="description">
                <TabsList className="mb-4">
                  <TabsTrigger value="description">İş Tanımı</TabsTrigger>
                  <TabsTrigger value="company">Şirket</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">İş Tanımı</h3>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Sorumluluklar</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {job.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Gereksinimler</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {job.requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Yan Haklar</h3>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      {job.benefits.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Beceriler</h3>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="company" className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-md bg-muted">
                      <img
                        alt={job.company}
                        className="rounded-md object-cover"
                        height="64"
                        src={job.logo || "/placeholder.svg"}
                        width="64"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{job.company}</h3>
                      <p className="text-sm text-muted-foreground">Teknoloji</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-md font-semibold mb-2">Şirket Hakkında</h4>
                    <p className="text-muted-foreground">{job.about}</p>
                  </div>

                  <div>
                    <h4 className="text-md font-semibold mb-2">Şirket Bilgileri</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span>50-100 çalışan</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <a href="https://example.com" className="text-primary hover:underline">
                          https://example.com
                        </a>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>İş Özeti</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Maaş</p>
                  <p className="font-medium">{job.salary}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">İş Tipi</p>
                  <p className="font-medium">{job.type}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Kategori</p>
                  <p className="font-medium">{job.category}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">İlan Tarihi</p>
                  <p className="font-medium">{job.postedAt}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Dialog open={isApplying} onOpenChange={setIsApplying}>
                <DialogTrigger asChild>
                  <Button className="w-full">Şimdi Başvur</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>İş Başvurusu</DialogTitle>
                    <DialogDescription>{job.title} pozisyonu için başvurunuzu tamamlayın.</DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleApply}>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Ad</Label>
                          <Input id="firstName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Soyad</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-posta</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input id="phone" type="tel" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="resume">CV Linki</Label>
                        <Input id="resume" placeholder="CV'nizin bulunduğu link" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="coverLetter">Ön Yazı</Label>
                        <Textarea
                          id="coverLetter"
                          placeholder="Kendinizi tanıtın ve neden bu pozisyon için uygun olduğunuzu belirtin"
                          rows={5}
                          required
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Başvuruyu Gönder</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
              <Button variant="outline" className="w-full">
                <Share2 className="mr-2 h-4 w-4" />
                İlanı Paylaş
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Benzer İlanlar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2, 3].map((id) => (
                <div key={id} className="flex items-start space-x-4">
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
                    <h4 className="text-sm font-medium leading-none">
                      <Link href={`/jobs/${id}`} className="hover:underline">
                        {id === 1 ? "Backend Geliştirici" : id === 2 ? "Full Stack Geliştirici" : "UI/UX Tasarımcı"}
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {id === 1 ? "InnoTech" : id === 2 ? "WebSolutions" : "DesignHub"}
                    </p>
                    <p className="text-xs text-muted-foreground">Uzaktan • Tam Zamanlı</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
