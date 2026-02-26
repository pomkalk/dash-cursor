import { makeAutoObservable } from 'mobx'

export type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'tw-theme-mode'

class ThemeStore {
  mode: ThemeMode = 'light'
  initialized = false

  constructor() {
    makeAutoObservable(this)
  }

  initialize() {
    if (this.initialized || typeof window === 'undefined') {
      return
    }

    const fromStorage = window.localStorage.getItem(STORAGE_KEY)
    if (fromStorage === 'light' || fromStorage === 'dark') {
      this.mode = fromStorage
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.mode = 'dark'
    }

    this.applyTheme()
    this.initialized = true
  }

  toggleMode() {
    this.mode = this.mode === 'light' ? 'dark' : 'light'
    this.applyTheme()
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, this.mode)
    }
  }

  private applyTheme() {
    if (typeof document === 'undefined') {
      return
    }
    document.documentElement.classList.toggle('dark', this.mode === 'dark')
    document.documentElement.setAttribute('data-theme', this.mode)
  }
}

export const themeStore = new ThemeStore()
