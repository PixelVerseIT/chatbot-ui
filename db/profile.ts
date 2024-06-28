import { supabase } from "@/lib/supabase/browser-client"
import { Profile, TablesInsert, TablesUpdate } from "@/supabase/types"

export const getProfileByUserId = async (userId: string): Promise<Profile> => {
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", userId)
    .single()

  if (error || !profile) {
    throw new Error(error?.message || "Profile not found")
  }

  return profile as Profile
}

export const getProfilesByUserId = async (userId: string): Promise<Profile[]> => {
  const { data: profiles, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", userId)

  if (error || !profiles) {
    throw new Error(error?.message || "Profiles not found")
  }

  return profiles as Profile[]
}

export const createProfile = async (profile: TablesInsert<"profiles">): Promise<Profile> => {
  const { data: createdProfile, error } = await supabase
    .from("profiles")
    .insert([{ ...profile, usage: JSON.stringify({ count: 0, lastReset: new Date().toISOString() }) }])
    .select("*")
    .single()

  if (error || !createdProfile) {
    throw new Error(error?.message || "Failed to create profile")
  }

  return createdProfile as Profile
}

export const updateProfile = async (
  profileId: string,
  profile: TablesUpdate<"profiles">
): Promise<Profile> => {
  const { data: updatedProfile, error } = await supabase
    .from("profiles")
    .update(profile)
    .eq("id", profileId)
    .select("*")
    .single()

  if (error || !updatedProfile) {
    throw new Error(error?.message || "Failed to update profile")
  }

  return updatedProfile as Profile
}

export const deleteProfile = async (profileId: string): Promise<boolean> => {
  const { error } = await supabase.from("profiles").delete().eq("id", profileId)

  if (error) {
    throw new Error(error.message)
  }

  return true
}

export const incrementUsageCount = async (profileId: string): Promise<number> => {
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("usage")
    .eq("id", profileId)
    .single()

  if (error || !profile) {
    throw new Error(error?.message || "Failed to fetch profile")
  }

  const usage = JSON.parse(profile.usage || '{"count": 0, "lastReset": ""}')
  const now = new Date()
  const lastReset = new Date(usage.lastReset)

  if (now.getTime() - lastReset.getTime() > 5 * 60 * 60 * 1000) {
    // More than 5 hours have passed, reset the count
    usage.count = 1
    usage.lastReset = now.toISOString()
  } else {
    usage.count += 1
  }

  const { error: updateError } = await supabase
    .from("profiles")
    .update({ usage: JSON.stringify(usage) })
    .eq("id", profileId)

  if (updateError) {
    throw new Error(updateError.message)
  }

  return usage.count
}

export const checkRateLimit = async (profileId: string): Promise<boolean> => {
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("usage")
    .eq("id", profileId)
    .single()

  if (error || !profile) {
    throw new Error(error?.message || "Failed to fetch profile")
  }

  const usage = JSON.parse(profile.usage || '{"count": 0, "lastReset": ""}')
  const now = new Date()
  const lastReset = new Date(usage.lastReset)

  if (now.getTime() - lastReset.getTime() > 5 * 60 * 60 * 1000) {
    // More than 5 hours have passed, reset the count
    return true
  }

  return usage.count < 8
}