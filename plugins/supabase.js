import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ahfaaiphrwruobeavdqq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoZmFhaXBocndydW9iZWF2ZHFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxMTk5MTUsImV4cCI6MjA0NTY5NTkxNX0.V2v2RPtBApxJl8jDnFDRnzNOwuZSzy5LGfw2mGvI_rY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("supabase", supabase);
});
