import { useState, useEffect } from 'react';
import { supabase, CourseEnrollment } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

export const useCourseEnrollment = () => {
  const { user } = useAuth();
  const [enrollments, setEnrollments] = useState<CourseEnrollment[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      fetchEnrollments();
    } else {
      setEnrollments([]);
    }
  }, [user]);

  const fetchEnrollments = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('course_enrollments')
        .select('*')
        .eq('user_id', user.id)
        .order('enrolled_at', { ascending: false });

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching enrollments:', error);
      } else {
        setEnrollments(data || []);
      }
    } catch (error) {
      console.error('Error fetching enrollments:', error);
    } finally {
      setLoading(false);
    }
  };

  const enrollInCourse = async (courseId: string) => {
    if (!user) return { error: new Error('User not authenticated') };

    try {
      const { data, error } = await supabase
        .from('course_enrollments')
        .insert({
          user_id: user.id,
          course_id: courseId,
        })
        .select()
        .single();

      if (error) {
        return { error };
      }

      setEnrollments(prev => [data, ...prev]);
      return { data, error: null };
    } catch (error) {
      return { error };
    }
  };

  const updateProgress = async (courseId: string, progress: number) => {
    if (!user) return { error: new Error('User not authenticated') };

    try {
      const { data, error } = await supabase
        .from('course_enrollments')
        .update({
          progress,
          last_accessed: new Date().toISOString(),
          completed_at: progress === 100 ? new Date().toISOString() : null,
        })
        .eq('user_id', user.id)
        .eq('course_id', courseId)
        .select()
        .single();

      if (error) {
        return { error };
      }

      setEnrollments(prev =>
        prev.map(enrollment =>
          enrollment.course_id === courseId ? data : enrollment
        )
      );

      return { data, error: null };
    } catch (error) {
      return { error };
    }
  };

  const isEnrolled = (courseId: string) => {
    return enrollments.some(enrollment => enrollment.course_id === courseId);
  };

  const getEnrollment = (courseId: string) => {
    return enrollments.find(enrollment => enrollment.course_id === courseId);
  };

  return {
    enrollments,
    loading,
    enrollInCourse,
    updateProgress,
    isEnrolled,
    getEnrollment,
    refetch: fetchEnrollments,
  };
};