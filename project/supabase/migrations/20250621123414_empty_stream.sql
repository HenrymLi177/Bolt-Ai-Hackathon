/*
  # Create users and course management schema

  1. New Tables
    - `user_profiles`
      - `id` (uuid, references auth.users)
      - `email` (text)
      - `full_name` (text)
      - `avatar_url` (text, optional)
      - `learning_level` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `course_enrollments`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references user_profiles)
      - `course_id` (text)
      - `enrolled_at` (timestamp)
      - `progress` (integer, 0-100)
      - `completed_at` (timestamp, optional)
      - `last_accessed` (timestamp)
    
    - `user_achievements`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references user_profiles)
      - `achievement_type` (text)
      - `achievement_data` (jsonb)
      - `earned_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
    - Add policies for reading public course data