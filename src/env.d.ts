// <reference types="vite/client"></reference> </reference>

interface ImportMetaEnv {
  readonly MODE: string,
  readonly VITE_BASE_URL: string,
  readonly VITE_TIME_OUT: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}