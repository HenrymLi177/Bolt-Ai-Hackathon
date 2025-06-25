import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if we have valid Supabase credentials
const hasValidCredentials = supabaseUrl && supabaseAnonKey && 
  supabaseUrl !== 'your_supabase_project_url' && 
  supabaseAnonKey !== 'your_supabase_anon_key' &&
  supabaseUrl.includes('supabase.co');

// Create a mock client for development when credentials are missing
const createMockClient = () => ({
  auth: {
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    signUp: () => Promise.resolve({ error: { message: 'Supabase not configured' } }),
    signInWithPassword: () => Promise.resolve({ error: { message: 'Supabase not configured' } }),
    signOut: () => Promise.resolve({ error: null }),
    getUser: () => Promise.resolve({ data: { user: null }, error: null })
  },
  from: () => ({
    select: () => ({
      eq: () => ({
        single: () => Promise.resolve({ data: null, error: { code: 'PGRST116' } }),
        maybeSingle: () => Promise.resolve({ data: null, error: null }),
        order: () => Promise.resolve({ data: [], error: null }),
        limit: () => ({
          maybeSingle: () => Promise.resolve({ data: null, error: null })
        })
      }),
      order: () => ({
        limit: () => ({
          maybeSingle: () => Promise.resolve({ data: null, error: null })
        }),
        ascending: () => Promise.resolve({ data: [], error: null })
      })
    }),
    insert: () => ({
      select: () => ({
        single: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } })
      })
    }),
    update: () => ({
      eq: () => ({
        select: () => ({
          single: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } })
        })
      })
    }),
    delete: () => ({
      eq: () => Promise.resolve({ error: null })
    })
  })
});

export const supabase = hasValidCredentials 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createMockClient() as any;

// Types for our database tables
export interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  learning_level: 'Beginner' | 'Intermediate' | 'Advanced';
  created_at: string;
  updated_at: string;
}

export interface CourseEnrollment {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string;
  progress: number;
  completed_at?: string;
  last_accessed: string;
}

export interface UserAchievement {
  id: string;
  user_id: string;
  achievement_type: string;
  achievement_data: Record<string, any>;
  earned_at: string;
}