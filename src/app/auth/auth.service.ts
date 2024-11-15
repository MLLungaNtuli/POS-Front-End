import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabase: SupabaseClient = createClient('https://kiohtfrkhllpebnsofyl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtpb2h0ZnJraGxscGVibnNvZnlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2MDk0MTAsImV4cCI6MjA0NzE4NTQxMH0.cikMAdi27y3Dt-8HZxaZ9UWJyK6YpYU69mqk0mrgz80');

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  async login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  }

  async signup(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    return { data, error };
  }

  async logout() {
    const { error } = await supabase.auth.signOut();
    return error;
  }

  async getSession() {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error('Error fetching session', error);
      return null;
    }
    return data?.session;
  }
}
