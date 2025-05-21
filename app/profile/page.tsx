"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  Building,
  Calendar,
  Edit,
  GraduationCap,
  LinkIcon,
  Mail,
  MapPin,
  Phone,
  Plus,
  Save,
  Trash2,
} from "lucide-react"

import { useAuth } from "@/components/auth-provider"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { UserAvatar } from "@/components/user-avatar"
import { useToast } from "@/components/ui/use-toast"

export default function ProfilePage() {
  const { user, updateUser } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    location: "",
    bio: "",
    phone: "",
    website: "",
    skills: [],
    newSkill: "",
  })
  const [experiences, setExperiences] = useState([])
  const [education, setEducation] = useState([])
  const [newExperience, setNewExperience] = useState({
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  })
  const [newEducation, setNewEducation] = useState({
    degree: "",
    school: "",
    field: "",
    year: "",
  })

  useEffect(() => {
    if (!user) {
      router.push("/auth/login")
    } else {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        title: user.title || "",
        location: user.location || "",
        bio: user.bio || "",
        phone: user.phone || "",
        website: user.website || "",
        skills: user.skills || [],
        newSkill: "",
      })
      setExperiences(
        user.experience || [
          {
            title: "Frontend Geliştirici",
            company: "TechCorp",
            startDate: "2020-01",
            endDate: "2022-12",
            description: "Modern web uygulamaları geliştirdim ve kullanıcı deneyimini iyileştirdim.",
          },
          {
            title: "Web Geliştirici",
            company: "WebSolutions",
            startDate: "2018-03",
            endDate: "2019-12",
            description: "Responsive web siteleri ve e-ticaret uygulamaları geliştirdim.",
          },
        ],
      )
      setEducation(
        user.education || [
          {
            degree: "Bilgisayar Mühendisliği",
            school: "İstanbul Teknik Üniversitesi",
            field: "Bilgisayar Bilimleri",
            year: "2018",
          },
        ],
      )
    }
  }, [user, router])

  if (!user) {
    return null
  }

  // Form değişikliklerini işle
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Beceri ekle
  const handleAddSkill = () => {
    if (formData.newSkill.trim() && !formData.skills.includes(formData.newSkill.trim())) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, prev.newSkill.trim()],
        newSkill: "",
      }))
    }
  }

  // Beceri sil
  const handleRemoveSkill = (skillToRemove) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }))
  }

  // Deneyim ekle
  const handleAddExperience = () => {
    if (newExperience.title && newExperience.company && newExperience.startDate) {
      setExperiences((prev) => [...prev, newExperience])
      setNewExperience({
        title: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      })
    }
  }

  // Deneyim sil
  const handleRemoveExperience = (index) => {
    setExperiences((prev) => prev.filter((_, i) => i !== index))
  }

  // Eğitim ekle
  const handleAddEducation = () => {
    if (newEducation.degree && newEducation.school && newEducation.year) {
      setEducation((prev) => [...prev, newEducation])
      setNewEducation({
        degree: "",
        school: "",
        field: "",
        year: "",
      })
    }
  }

  // Eğitim sil
  const handleRemoveEducation = (index) => {
    setEducation((prev) => prev.filter((_, i) => i !== index))
  }

  // Profil güncelle
  const handleSaveProfile = () => {
    const updatedUser = {
      ...formData,
      experience: experiences,
      education: education,
    }

    updateUser(updatedUser)
    setIsEditing(false)

    toast({
      title: "Profil güncellendi",
      description: "Profiliniz başarıyla güncellendi.",
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Profil</h2>
          <div className="flex items-center space-x-2">
            {isEditing ? (
              <>
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  İptal
                </Button>
                <Button onClick={handleSaveProfile}>
                  <Save className="mr-2 h-4 w-4" />
                  Kaydet
                </Button>
              </>
            ) : (
              <Button onClick={() => setIsEditing(true)}>
                <Edit className="mr-2 h-4 w-4" />
                Düzenle
              </Button>
            )}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_3fr]">
          <Card className="md:row-span-2">
            <CardHeader>
              <div className="flex flex-col items-center space-y-2">
                <div className="relative">
                  <UserAvatar user={user} className="h-24 w-24" />
                  {isEditing && (
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute bottom-0 right-0 h-6 w-6 rounded-full bg-background"
                    >
                      <Edit className="h-3 w-3" />
                      <span className="sr-only">Profil fotoğrafını değiştir</span>
                    </Button>
                  )}
                </div>
                <div className="space-y-1 text-center">
                  {isEditing ? (
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor="firstName" className="sr-only">
                          Ad
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Ad"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="sr-only">
                          Soyad
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Soyad"
                        />
                      </div>
                    </div>
                  ) : (
                    <h3 className="text-xl font-bold">
                      {user.firstName} {user.lastName}
                    </h3>
                  )}

                  {isEditing ? (
                    <div>
                      <Label htmlFor="title" className="sr-only">
                        Unvan
                      </Label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Unvan (örn. Frontend Geliştirici)"
                      />
                    </div>
                  ) : (
                    <p className="text-muted-foreground">{user.title || "Unvan belirtilmemiş"}</p>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                  {isEditing ? (
                    <Input
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Konum (örn. İstanbul, Türkiye)"
                    />
                  ) : (
                    <span>{user.location || "Konum belirtilmemiş"}</span>
                  )}
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                  {isEditing ? (
                    <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefon numarası" />
                  ) : (
                    <span>{user.phone || "Telefon belirtilmemiş"}</span>
                  )}
                </div>
                <div className="flex items-center text-sm">
                  <LinkIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                  {isEditing ? (
                    <Input
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="Web sitesi (örn. https://example.com)"
                    />
                  ) : user.website ? (
                    <a
                      href={user.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {user.website}
                    </a>
                  ) : (
                    <span>Web sitesi belirtilmemiş</span>
                  )}
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Beceriler</h4>
                {isEditing ? (
                  <div className="space-y-2">
                    <div className="flex space-x-2">
                      <Input
                        name="newSkill"
                        value={formData.newSkill}
                        onChange={handleChange}
                        placeholder="Yeni beceri ekle"
                      />
                      <Button type="button" size="sm" onClick={handleAddSkill}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.skills.map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
                        >
                          {skill}
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="ml-1 h-3 w-3"
                            onClick={() => handleRemoveSkill(skill)}
                          >
                            <Trash2 className="h-3 w-3" />
                            <span className="sr-only">Beceriyi kaldır</span>
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {user.skills && user.skills.length > 0 ? (
                      user.skills.map((skill, index) => (
                        <span key={index} className="rounded-md bg-muted px-2 py-1 text-xs font-medium">
                          {skill}
                        </span>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground">Henüz beceri eklenmemiş</p>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hakkımda</CardTitle>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <Textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Kendinizi tanıtın..."
                  rows={6}
                />
              ) : (
                <p className="text-sm text-muted-foreground">
                  {user.bio || "Henüz bir biyografi eklenmemiş. Profilinizi düzenleyerek kendinizi tanıtabilirsiniz."}
                </p>
              )}
            </CardContent>
          </Card>

          <Tabs defaultValue="experience">
            <TabsList>
              <TabsTrigger value="experience">Deneyim</TabsTrigger>
              <TabsTrigger value="education">Eğitim</TabsTrigger>
            </TabsList>
            <TabsContent value="experience" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>İş Deneyimi</CardTitle>
                  <CardDescription>Kariyer geçmişiniz ve iş deneyimleriniz</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="space-y-2">
                      {index > 0 && <Separator />}
                      <div className="pt-2 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{exp.title}</h4>
                          {isEditing && (
                            <Button variant="ghost" size="icon" onClick={() => handleRemoveExperience(index)}>
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Deneyimi sil</span>
                            </Button>
                          )}
                        </div>
                        <div className="flex items-center text-sm">
                          <Building className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>
                            {new Date(exp.startDate).toLocaleDateString("tr-TR", { year: "numeric", month: "long" })} -{" "}
                            {exp.endDate
                              ? new Date(exp.endDate).toLocaleDateString("tr-TR", { year: "numeric", month: "long" })
                              : "Devam ediyor"}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
                      </div>
                    </div>
                  ))}

                  {isEditing && (
                    <div className="space-y-4 border rounded-md p-4">
                      <h4 className="font-medium">Yeni Deneyim Ekle</h4>
                      <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="new-title">Pozisyon</Label>
                            <Input
                              id="new-title"
                              value={newExperience.title}
                              onChange={(e) => setNewExperience((prev) => ({ ...prev, title: e.target.value }))}
                              placeholder="Pozisyon adı"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="new-company">Şirket</Label>
                            <Input
                              id="new-company"
                              value={newExperience.company}
                              onChange={(e) => setNewExperience((prev) => ({ ...prev, company: e.target.value }))}
                              placeholder="Şirket adı"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="new-start-date">Başlangıç Tarihi</Label>
                            <Input
                              id="new-start-date"
                              type="month"
                              value={newExperience.startDate}
                              onChange={(e) => setNewExperience((prev) => ({ ...prev, startDate: e.target.value }))}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="new-end-date">Bitiş Tarihi</Label>
                            <Input
                              id="new-end-date"
                              type="month"
                              value={newExperience.endDate}
                              onChange={(e) => setNewExperience((prev) => ({ ...prev, endDate: e.target.value }))}
                              placeholder="Devam ediyorsa boş bırakın"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-description">Açıklama</Label>
                          <Textarea
                            id="new-description"
                            value={newExperience.description}
                            onChange={(e) => setNewExperience((prev) => ({ ...prev, description: e.target.value }))}
                            placeholder="Pozisyondaki sorumluluklarınız ve başarılarınız"
                          />
                        </div>
                        <Button type="button" onClick={handleAddExperience}>
                          <Plus className="mr-2 h-4 w-4" />
                          Deneyim Ekle
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="education" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Eğitim</CardTitle>
                  <CardDescription>Eğitim geçmişiniz ve akademik nitelikleriniz</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="space-y-2">
                      {index > 0 && <Separator />}
                      <div className="pt-2 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{edu.degree}</h4>
                          {isEditing && (
                            <Button variant="ghost" size="icon" onClick={() => handleRemoveEducation(index)}>
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Eğitimi sil</span>
                            </Button>
                          )}
                        </div>
                        <div className="flex items-center text-sm">
                          <GraduationCap className="mr-2 h-4 w-4 text-muted-foreground" />
                          <span>{edu.school}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>{edu.year}</span>
                        </div>
                        {edu.field && <p className="text-sm text-muted-foreground">{edu.field}</p>}
                      </div>
                    </div>
                  ))}

                  {isEditing && (
                    <div className="space-y-4 border rounded-md p-4">
                      <h4 className="font-medium">Yeni Eğitim Ekle</h4>
                      <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="new-degree">Derece</Label>
                            <Input
                              id="new-degree"
                              value={newEducation.degree}
                              onChange={(e) => setNewEducation((prev) => ({ ...prev, degree: e.target.value }))}
                              placeholder="Örn. Lisans, Yüksek Lisans"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="new-school">Okul</Label>
                            <Input
                              id="new-school"
                              value={newEducation.school}
                              onChange={(e) => setNewEducation((prev) => ({ ...prev, school: e.target.value }))}
                              placeholder="Üniversite veya okul adı"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="new-field">Alan</Label>
                            <Input
                              id="new-field"
                              value={newEducation.field}
                              onChange={(e) => setNewEducation((prev) => ({ ...prev, field: e.target.value }))}
                              placeholder="Örn. Bilgisayar Bilimleri"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="new-year">Mezuniyet Yılı</Label>
                            <Input
                              id="new-year"
                              value={newEducation.year}
                              onChange={(e) => setNewEducation((prev) => ({ ...prev, year: e.target.value }))}
                              placeholder="Örn. 2020"
                            />
                          </div>
                        </div>
                        <Button type="button" onClick={handleAddEducation}>
                          <Plus className="mr-2 h-4 w-4" />
                          Eğitim Ekle
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
