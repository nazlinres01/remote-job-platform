"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  BarChart3,
  Bookmark,
  Briefcase,
  Building,
  Calendar,
  Clock,
  FileText,
  Filter,
  LayoutDashboard,
  Search,
  Users,
} from "lucide-react"

import { useAuth } from "@/components/auth-provider"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserAvatar } from "@/components/user-avatar"

export default function DashboardPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  // Kullanıcı giriş yapmamışsa login sayfasına yönlendir
  if (!user) {
    router.push("/auth/login")
    return null
  }

  // Örnek başvurular
  const applications = [
    {
      id: 1,
      position: "Frontend Geliştirici",
      company: "TechCorp",
      status: "Değerlendiriliyor",
      appliedDate: "2 gün önce",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      position: "UI/UX Tasarımcı",
      company: "DesignHub",
      status: "Mülakat",
      appliedDate: "1 hafta önce",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      position: "Full Stack Geliştirici",
      company: "WebSolutions",
      status: "Reddedildi",
      appliedDate: "2 hafta önce",
      logo: "/placeholder.svg?height=40&width=40",
    },
  ]

  // Örnek kaydedilen ilanlar
  const savedJobs = [
    {
      id: 1,
      title: "Backend Geliştirici",
      company: "InnoTech",
      location: "Uzaktan",
      type: "Tam Zamanlı",
      salary: "₺35,000 - ₺50,000",
      postedAt: "3 gün önce",
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      title: "DevOps Mühendisi",
      company: "CloudTech",
      location: "Uzaktan",
      type: "Tam Zamanlı",
      salary: "₺40,000 - ₺60,000",
      postedAt: "5 gün önce",
      logo: "/placeholder.svg?height=40&width=40",
    },
  ]

  // Örnek önerilen ilanlar
  const recommendedJobs = [
    {
      id: 1,
      title: "Frontend Geliştirici",
      company: "TechCorp",
      location: "Uzaktan",
      type: "Tam Zamanlı",
      salary: "₺30,000 - ₺45,000",
      postedAt: "2 gün önce",
      logo: "/placeholder.svg?height=40&width=40",
      match: 95,
    },
    {
      id: 2,
      title: "React Geliştirici",
      company: "AppWorks",
      location: "Uzaktan",
      type: "Tam Zamanlı",
      salary: "₺35,000 - ₺50,000",
      postedAt: "1 gün önce",
      logo: "/placeholder.svg?height=40&width=40",
      match: 90,
    },
    {
      id: 3,
      title: "Full Stack Geliştirici",
      company: "WebSolutions",
      location: "Uzaktan",
      type: "Tam Zamanlı",
      salary: "₺40,000 - ₺55,000",
      postedAt: "3 gün önce",
      logo: "/placeholder.svg?height=40&width=40",
      match: 85,
    },
  ]

  // Profil tamamlama yüzdesi
  const profileCompletionPercentage = 65

  // Kullanıcı tipine göre içerik
  const isEmployer = user.accountType === "employer"

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 bg-accent/30">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            <span className="text-gradient-primary">Dashboard</span>
          </h2>
          <div className="flex items-center space-x-2">
            <Button className="bg-gradient-primary hover-lift shadow-sm shadow-primary/20">
              {isEmployer ? "İlan Yayınla" : "CV Yükle"}
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{isEmployer ? "Toplam İlanlar" : "Başvurular"}</CardTitle>
              <div className="rounded-md bg-primary/10 p-2 text-primary">
                {isEmployer ? <FileText className="h-4 w-4" /> : <Briefcase className="h-4 w-4" />}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{isEmployer ? "12" : applications.length}</div>
              <p className="text-xs text-muted-foreground">{isEmployer ? "+2 bu ay" : "+1 bu hafta"}</p>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {isEmployer ? "Toplam Başvurular" : "Kaydedilen İlanlar"}
              </CardTitle>
              <div className="rounded-md bg-secondary/10 p-2 text-secondary">
                {isEmployer ? <Users className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{isEmployer ? "48" : savedJobs.length}</div>
              <p className="text-xs text-muted-foreground">{isEmployer ? "+18 bu ay" : "+1 bu hafta"}</p>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {isEmployer ? "Görüntülenmeler" : "Görüntülenen Profil"}
              </CardTitle>
              <div className="rounded-md bg-primary/10 p-2 text-primary">
                <BarChart3 className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{isEmployer ? "1,234" : "28"}</div>
              <p className="text-xs text-muted-foreground">{isEmployer ? "+21% bu ay" : "+12% bu hafta"}</p>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profil Tamamlama</CardTitle>
              <div className="rounded-md bg-secondary/10 p-2 text-secondary">
                <LayoutDashboard className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{profileCompletionPercentage}%</div>
                <Link href="/profile">
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    Tamamla
                  </Button>
                </Link>
              </div>
              <Progress
                value={profileCompletionPercentage}
                className="mt-2 h-2"
                indicatorClassName="bg-gradient-primary"
              />
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue={isEmployer ? "ilanlar" : "basvurular"} className="bg-background rounded-lg p-4 shadow-sm">
          <TabsList className="grid w-full md:w-auto grid-cols-2 md:inline-flex mb-4">
            {isEmployer ? (
              <>
                <TabsTrigger value="ilanlar">İlanlarım</TabsTrigger>
                <TabsTrigger value="basvurular">Başvurular</TabsTrigger>
              </>
            ) : (
              <>
                <TabsTrigger value="basvurular">Başvurularım</TabsTrigger>
                <TabsTrigger value="kaydedilenler">Kaydedilenler</TabsTrigger>
                <TabsTrigger value="oneriler">Önerilen İşler</TabsTrigger>
              </>
            )}
          </TabsList>

          {isEmployer ? (
            <>
              <TabsContent value="ilanlar" className="space-y-4">
                <div className="flex items-center gap-2 bg-card rounded-lg p-2 shadow-sm">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="İlan ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filtrele</span>
                  </Button>
                </div>

                <div className="grid gap-4">
                  {[1, 2, 3].map((id) => (
                    <Card key={id} className="card-hover overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <h3 className="font-semibold text-lg">
                              {id === 1 ? "Frontend Geliştirici" : id === 2 ? "Backend Geliştirici" : "UI/UX Tasarımcı"}
                            </h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Building className="mr-1 h-4 w-4" />
                              <span>{user.company || "Şirketiniz"}</span>
                              <span className="mx-1">•</span>
                              <span>Uzaktan</span>
                              <span className="mx-1">•</span>
                              <span>Tam Zamanlı</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div
                              className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                                id === 3 ? "bg-muted text-muted-foreground" : "bg-primary/10 text-primary"
                              }`}
                            >
                              {id === 1 ? "Aktif" : id === 2 ? "Aktif" : "Taslak"}
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">
                                {id === 1 ? "2 gün önce" : id === 2 ? "1 hafta önce" : "Taslak"}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Briefcase className="mr-1 h-4 w-4 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">
                                {id === 1 ? "12 başvuru" : id === 2 ? "8 başvuru" : "0 başvuru"}
                              </span>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="hover-lift">
                              Düzenle
                            </Button>
                            <Button variant="outline" size="sm" className="hover-lift">
                              {id === 3 ? "Yayınla" : "Kapat"}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="basvurular" className="space-y-4">
                <div className="flex items-center gap-2 bg-card rounded-lg p-2 shadow-sm">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Başvuru ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filtrele</span>
                  </Button>
                </div>

                <div className="grid gap-4">
                  {[1, 2, 3, 4].map((id) => (
                    <Card key={id} className="card-hover overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                              <UserAvatar
                                user={{
                                  id: `user-${id}`,
                                  firstName: ["Ali", "Ayşe", "Mehmet", "Zeynep"][id - 1],
                                  lastName: ["Yılmaz", "Kaya", "Demir", "Şahin"][id - 1],
                                  email: "",
                                  accountType: "jobseeker",
                                  createdAt: new Date(),
                                }}
                                className="h-12 w-12"
                              />
                            </div>
                            <div className="space-y-1">
                              <h3 className="font-semibold text-lg">
                                {["Ali Yılmaz", "Ayşe Kaya", "Mehmet Demir", "Zeynep Şahin"][id - 1]}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {id === 1 || id === 3
                                  ? "Frontend Geliştirici pozisyonu için başvuru"
                                  : "Backend Geliştirici pozisyonu için başvuru"}
                              </p>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Clock className="mr-1 h-3 w-3" />
                                <span>{["2 gün önce", "3 gün önce", "1 hafta önce", "2 hafta önce"][id - 1]}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div
                              className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                                id === 1
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                  : id === 2
                                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                                    : id === 3
                                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                      : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                              }`}
                            >
                              {id === 1 ? "Yeni" : id === 2 ? "İnceleniyor" : id === 3 ? "Mülakat" : "Reddedildi"}
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end space-x-2">
                          <Button variant="outline" size="sm" className="hover-lift">
                            CV Görüntüle
                          </Button>
                          <Button size="sm" className="bg-gradient-primary hover-lift shadow-sm shadow-primary/20">
                            İşlem Yap
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </>
          ) : (
            <>
              <TabsContent value="basvurular" className="space-y-4">
                <div className="flex items-center gap-2 bg-card rounded-lg p-2 shadow-sm">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Başvuru ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filtrele</span>
                  </Button>
                </div>

                <div className="grid gap-4">
                  {applications.map((application) => (
                    <Card key={application.id} className="card-hover overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                              <img
                                alt={application.company}
                                className="rounded-full object-cover"
                                height="40"
                                src={application.logo || "/placeholder.svg"}
                                width="40"
                              />
                            </div>
                            <div className="space-y-1">
                              <h3 className="font-semibold text-lg">{application.position}</h3>
                              <p className="text-sm text-muted-foreground">{application.company}</p>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Clock className="mr-1 h-3 w-3" />
                                <span>Başvuru: {application.appliedDate}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div
                              className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                                application.status === "Değerlendiriliyor"
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                  : application.status === "Mülakat"
                                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                    : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                              }`}
                            >
                              {application.status}
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end space-x-2">
                          <Button variant="outline" size="sm" className="hover-lift">
                            Detaylar
                          </Button>
                          {application.status !== "Reddedildi" && (
                            <Button variant="outline" size="sm" className="hover-lift">
                              İptal Et
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="kaydedilenler" className="space-y-4">
                <div className="flex items-center gap-2 bg-card rounded-lg p-2 shadow-sm">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Kaydedilen ilanları ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filtrele</span>
                  </Button>
                </div>

                <div className="grid gap-4">
                  {savedJobs.map((job) => (
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
                                <span>{job.company}</span>
                                <span className="mx-1">•</span>
                                <span>{job.location}</span>
                                <span className="mx-1">•</span>
                                <span>{job.type}</span>
                              </div>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Clock className="mr-1 h-3 w-3" />
                                <span>İlan: {job.postedAt}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-primary">{job.salary}</p>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end space-x-2">
                          <Button variant="outline" size="sm" className="hover-lift">
                            Kaldır
                          </Button>
                          <Link href={`/jobs/${job.id}`}>
                            <Button size="sm" className="bg-gradient-primary hover-lift shadow-sm shadow-primary/20">
                              Başvur
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="oneriler" className="space-y-4">
                <div className="flex items-center gap-2 bg-card rounded-lg p-2 shadow-sm">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Önerilen işleri ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filtrele</span>
                  </Button>
                </div>

                <div className="grid gap-4">
                  {recommendedJobs.map((job) => (
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
                              <div className="flex items-center">
                                <h3 className="font-semibold text-lg">{job.title}</h3>
                                <div className="ml-2 inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                  %{job.match} Eşleşme
                                </div>
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <span>{job.company}</span>
                                <span className="mx-1">•</span>
                                <span>{job.location}</span>
                                <span className="mx-1">•</span>
                                <span>{job.type}</span>
                              </div>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Clock className="mr-1 h-3 w-3" />
                                <span>İlan: {job.postedAt}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-primary">{job.salary}</p>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-end space-x-2">
                          <Button variant="outline" size="sm" className="hover-lift">
                            Kaydet
                          </Button>
                          <Link href={`/jobs/${job.id}`}>
                            <Button size="sm" className="bg-gradient-primary hover-lift shadow-sm shadow-primary/20">
                              Başvur
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>
    </div>
  )
}
