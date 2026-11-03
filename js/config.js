// Configuración central de Supabase.
// La "anon key" está diseñada para ser pública: la seguridad real vive en RLS + RPC.
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm'

export const SUPABASE_URL = 'https://fdkdzyjrrtuaotiumbym.supabase.co'
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZka2R6eWpycnR1YW90aXVtYnltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE0MDc1MzAsImV4cCI6MjEwNjk4MzUzMH0.RC_ueLB8le0c95RMemtkQf4Yj-bFTrfYLaAcbdRDbXs'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false
  }
})
