"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

// Kullanıcı tipi tanımı
export type UserType = {
  id: string
  firstName: string
  lastName: string
  email: string
  accountType: "jobseeker" | "employer"
  company?: string
  title?: string
  location?: string
  bio?: string
  skills?: string[]
  experience?: {
    title: string
    company: string
    startDate: string
    endDate?: string
    description: string
  }[]
  education?: {
    degree: string
    school: string
    field: string
    year: string
  }[]
  avatar?: string
  createdAt: Date
}

// Context tipi tanımı
type AuthContextType = {
  user: UserType | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (userData: Partial<UserType>, password: string) => Promise<boolean>
  logout: () => void
  updateUser: (userData: Partial<UserType>) => void
}

// Context oluşturma
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Provider bileşeni
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Sayfa yüklendiğinde localStorage'dan kullanıcı bilgilerini al
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Kullanıcı bilgileri yüklenirken hata oluştu:", error)
        localStorage.removeItem("user")
      }
    }
    setIsLoading(false)
  }, [])

  // Kullanıcı bilgilerini localStorage'a kaydet
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user))
    }
  }, [user])

  // Giriş yapma fonksiyonu
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    try {
      // Gerçek bir API çağrısı yerine localStorage kontrolü
      const users = JSON.parse(localStorage.getItem("users") || "[]")
      const foundUser = users.find((u: any) => u.email === email)

      if (foundUser && foundUser.password === password) {
        // Şifreyi kullanıcı nesnesinden çıkar
        const { password: _, ...userWithoutPassword } = foundUser
        setUser(userWithoutPassword)
        router.push("/dashboard")
        return true
      }

      return false
    } catch (error) {
      console.error("Giriş yapılırken hata oluştu:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  // Kayıt olma fonksiyonu
  const register = async (userData: Partial<UserType>, password: string): Promise<boolean> => {
    setIsLoading(true)

    try {
      // Gerçek bir API çağrısı yerine localStorage'a kaydet
      const users = JSON.parse(localStorage.getItem("users") || "[]")

      // E-posta adresi zaten kullanılıyor mu kontrol et
      if (users.some((u: any) => u.email === userData.email)) {
        return false
      }

      // Yeni kullanıcı oluştur
      const newUser = {
        id: `user-${Date.now()}`,
        ...userData,
        createdAt: new Date(),
        password, // Gerçek uygulamada şifre asla plain text olarak saklanmamalı!
      }

      // Kullanıcıyı kaydet
      users.push(newUser)
      localStorage.setItem("users", JSON.stringify(users))

      // Şifreyi kullanıcı nesnesinden çıkar
      const { password: _, ...userWithoutPassword } = newUser
      setUser(userWithoutPassword as UserType)

      router.push("/dashboard")
      return true
    } catch (error) {
      console.error("Kayıt olunurken hata oluştu:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  // Çıkış yapma fonksiyonu
  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/")
  }

  // Kullanıcı bilgilerini güncelleme fonksiyonu
  const updateUser = (userData: Partial<UserType>) => {
    if (user) {
      const updatedUser = { ...user, ...userData }
      setUser(updatedUser)

      // Kullanıcılar listesini de güncelle
      const users = JSON.parse(localStorage.getItem("users") || "[]")
      const updatedUsers = users.map((u: any) => (u.id === user.id ? { ...u, ...userData } : u))
      localStorage.setItem("users", JSON.stringify(updatedUsers))
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

// Context hook'u
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
