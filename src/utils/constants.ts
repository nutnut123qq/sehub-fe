// Application constants

export const APP_CONFIG = {
  name: 'SEHUB',
  version: '1.0.0',
  description: 'SEHUB Frontend Application',
  author: 'SEHUB Team',
} as const

export const API_ENDPOINTS = {
  base: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    refresh: '/auth/refresh',
  },
  users: {
    profile: '/users/profile',
    update: '/users/update',
  },
} as const

export const ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  dashboard: '/dashboard',
  profile: '/profile',
  settings: '/settings',
} as const

export const STORAGE_KEYS = {
  token: 'sehub_token',
  user: 'sehub_user',
  theme: 'sehub_theme',
  language: 'sehub_language',
} as const

export const VALIDATION_RULES = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: {
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true,
  },
  username: {
    minLength: 3,
    maxLength: 20,
    pattern: /^[a-zA-Z0-9_]+$/,
  },
} as const
