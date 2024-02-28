import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jxdyxaoiqjnzjphbqtfu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4ZHl4YW9pcWpuempwaGJxdGZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5MzA4OTUsImV4cCI6MjAyNDUwNjg5NX0.Q-gEehaOJFl-7yGH5k83koP2RRt44bB_TLX3KFNQlD8";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
