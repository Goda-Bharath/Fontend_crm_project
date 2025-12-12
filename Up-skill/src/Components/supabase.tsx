import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://fkyxrmvwaexiqjidszmx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZreXhybXZ3YWV4aXFqaWRzem14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1OTA3ODksImV4cCI6MjA3MzE2Njc4OX0.G55sTDvaHb4fSqOH2E-hYYOh7S5sqm55N4J0sLW547I';
export const supabase = createClient(supabaseUrl, supabaseKey);
