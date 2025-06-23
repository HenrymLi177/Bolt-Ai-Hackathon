/*
  # Disable email confirmation for testing

  This migration disables email confirmation to allow immediate sign-in after registration.
  This is useful for testing and development environments.
*/

-- Update auth settings to disable email confirmation
UPDATE auth.config 
SET 
  enable_signup = true,
  enable_confirmations = false
WHERE id = 1;

-- If the config table doesn't exist or is empty, we'll handle this in the application
-- The main configuration should be done through Supabase dashboard