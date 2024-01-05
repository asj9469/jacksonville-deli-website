export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      avatar: {
        Row: {
          id: number
          name: string | null
          url: string | null
        }
        Insert: {
          id?: number
          name?: string | null
          url?: string | null
        }
        Update: {
          id?: number
          name?: string | null
          url?: string | null
        }
        Relationships: []
      }
      club: {
        Row: {
          admin: string | null
          contact_email: string | null
          created_at: string
          id: string
          leader: string | null
          logo: string | null
          name: string | null
          organization: string | null
          photo_url: string | null
        }
        Insert: {
          admin?: string | null
          contact_email?: string | null
          created_at?: string
          id?: string
          leader?: string | null
          logo?: string | null
          name?: string | null
          organization?: string | null
          photo_url?: string | null
        }
        Update: {
          admin?: string | null
          contact_email?: string | null
          created_at?: string
          id?: string
          leader?: string | null
          logo?: string | null
          name?: string | null
          organization?: string | null
          photo_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "club_admin_fkey"
            columns: ["admin"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "club_leader_fkey"
            columns: ["leader"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "club_organization_fkey"
            columns: ["organization"]
            isOneToOne: false
            referencedRelation: "organization"
            referencedColumns: ["uuid"]
          }
        ]
      }
      club_profile: {
        Row: {
          club: string | null
          created_at: string
          id: number
          profile: string | null
        }
        Insert: {
          club?: string | null
          created_at?: string
          id?: number
          profile?: string | null
        }
        Update: {
          club?: string | null
          created_at?: string
          id?: number
          profile?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "club_profile_club_fkey"
            columns: ["club"]
            isOneToOne: false
            referencedRelation: "club"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "club_profile_profile_fkey"
            columns: ["profile"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          }
        ]
      }
      curriculum: {
        Row: {
          created_at: string | null
          id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
        }
        Update: {
          created_at?: string | null
          id?: number
        }
        Relationships: []
      }
      flightlog: {
        Row: {
          created_at: string
          date: string
          duration: number
          id: number
          note: string
          profile_id: string
        }
        Insert: {
          created_at?: string
          date: string
          duration: number
          id?: number
          note: string
          profile_id: string
        }
        Update: {
          created_at?: string
          date?: string
          duration?: number
          id?: number
          note?: string
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "flightlog_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          }
        ]
      }
      invite: {
        Row: {
          code: string | null
          created_at: string | null
          id: number
          note: string | null
          organization: string | null
          role: string | null
        }
        Insert: {
          code?: string | null
          created_at?: string | null
          id?: number
          note?: string | null
          organization?: string | null
          role?: string | null
        }
        Update: {
          code?: string | null
          created_at?: string | null
          id?: number
          note?: string | null
          organization?: string | null
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invite_organization_fkey"
            columns: ["organization"]
            isOneToOne: false
            referencedRelation: "organization"
            referencedColumns: ["uuid"]
          }
        ]
      }
      license: {
        Row: {
          clubLimit: number
          clubProfileLimit: number
          created_at: string | null
          expires: string | null
          id: number
          organization: string | null
          orgProfileLimit: number | null
          teamLimit: number
          teamProfileLimit: number
        }
        Insert: {
          clubLimit?: number
          clubProfileLimit?: number
          created_at?: string | null
          expires?: string | null
          id?: number
          organization?: string | null
          orgProfileLimit?: number | null
          teamLimit?: number
          teamProfileLimit?: number
        }
        Update: {
          clubLimit?: number
          clubProfileLimit?: number
          created_at?: string | null
          expires?: string | null
          id?: number
          organization?: string | null
          orgProfileLimit?: number | null
          teamLimit?: number
          teamProfileLimit?: number
        }
        Relationships: [
          {
            foreignKeyName: "license_organization_fkey"
            columns: ["organization"]
            isOneToOne: false
            referencedRelation: "organization"
            referencedColumns: ["uuid"]
          }
        ]
      }
      organization: {
        Row: {
          address: string | null
          city: string | null
          created_at: string | null
          description: string | null
          financial_admin: string | null
          name: string | null
          photo_url: string | null
          reporting_admin: string | null
          state: string | null
          type: number | null
          uuid: string
          website: string | null
          zip: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          created_at?: string | null
          description?: string | null
          financial_admin?: string | null
          name?: string | null
          photo_url?: string | null
          reporting_admin?: string | null
          state?: string | null
          type?: number | null
          uuid?: string
          website?: string | null
          zip?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          created_at?: string | null
          description?: string | null
          financial_admin?: string | null
          name?: string | null
          photo_url?: string | null
          reporting_admin?: string | null
          state?: string | null
          type?: number | null
          uuid?: string
          website?: string | null
          zip?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "organization_financial_admin_fkey"
            columns: ["financial_admin"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organization_type_fkey"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "organization_type"
            referencedColumns: ["id"]
          }
        ]
      }
      organization_type: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      profile: {
        Row: {
          avatar: string
          created_at: string | null
          email: string | null
          id: string
          learnDashId: number | null
          nickname: string | null
          organization: string | null
          role: string | null
          tshirt_size: string | null
          waiver_id: number | null
          waiver_signed: boolean
        }
        Insert: {
          avatar?: string
          created_at?: string | null
          email?: string | null
          id: string
          learnDashId?: number | null
          nickname?: string | null
          organization?: string | null
          role?: string | null
          tshirt_size?: string | null
          waiver_id?: number | null
          waiver_signed?: boolean
        }
        Update: {
          avatar?: string
          created_at?: string | null
          email?: string | null
          id?: string
          learnDashId?: number | null
          nickname?: string | null
          organization?: string | null
          role?: string | null
          tshirt_size?: string | null
          waiver_id?: number | null
          waiver_signed?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "profile_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profile_organization_fkey"
            columns: ["organization"]
            isOneToOne: false
            referencedRelation: "organization"
            referencedColumns: ["uuid"]
          }
        ]
      }
      race: {
        Row: {
          channels: Json | null
          club: string | null
          course_size: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          end_time: string | null
          host: string | null
          id: string
          name: string
          organization: string | null
          private: string | null
          start_time: string | null
          status: string | null
          team: string | null
          track: string | null
          type: number | null
        }
        Insert: {
          channels?: Json | null
          club?: string | null
          course_size?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_time?: string | null
          host?: string | null
          id?: string
          name: string
          organization?: string | null
          private?: string | null
          start_time?: string | null
          status?: string | null
          team?: string | null
          track?: string | null
          type?: number | null
        }
        Update: {
          channels?: Json | null
          club?: string | null
          course_size?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_time?: string | null
          host?: string | null
          id?: string
          name?: string
          organization?: string | null
          private?: string | null
          start_time?: string | null
          status?: string | null
          team?: string | null
          track?: string | null
          type?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "race_club_fkey"
            columns: ["club"]
            isOneToOne: false
            referencedRelation: "club"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "race_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "race_organization_fkey"
            columns: ["organization"]
            isOneToOne: false
            referencedRelation: "organization"
            referencedColumns: ["uuid"]
          },
          {
            foreignKeyName: "race_team_fkey"
            columns: ["team"]
            isOneToOne: false
            referencedRelation: "team"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "race_track_fkey"
            columns: ["track"]
            isOneToOne: false
            referencedRelation: "track"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "race_type_fkey"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "race_type"
            referencedColumns: ["id"]
          }
        ]
      }
      race_profile: {
        Row: {
          created_at: string | null
          id: number
          profile: string | null
          race: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          profile?: string | null
          race?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          profile?: string | null
          race?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "race_profile_profile_fkey"
            columns: ["profile"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "race_profile_race_fkey"
            columns: ["race"]
            isOneToOne: false
            referencedRelation: "race"
            referencedColumns: ["id"]
          }
        ]
      }
      race_result: {
        Row: {
          created_at: string
          id: number
          position: number | null
          profile_id: string | null
          race_id: string | null
          result: string | null
          round_type: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          position?: number | null
          profile_id?: string | null
          race_id?: string | null
          result?: string | null
          round_type?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          position?: number | null
          profile_id?: string | null
          race_id?: string | null
          result?: string | null
          round_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "race_result_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "race_result_race_id_fkey"
            columns: ["race_id"]
            isOneToOne: false
            referencedRelation: "race"
            referencedColumns: ["id"]
          }
        ]
      }
      race_type: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      team: {
        Row: {
          admin: string | null
          contact_email: string | null
          created_at: string | null
          description: string | null
          id: string
          leader: string | null
          name: string | null
          organization: string | null
          photo_url: string | null
          show_public: boolean | null
          youtube_channel_url: string | null
        }
        Insert: {
          admin?: string | null
          contact_email?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          leader?: string | null
          name?: string | null
          organization?: string | null
          photo_url?: string | null
          show_public?: boolean | null
          youtube_channel_url?: string | null
        }
        Update: {
          admin?: string | null
          contact_email?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          leader?: string | null
          name?: string | null
          organization?: string | null
          photo_url?: string | null
          show_public?: boolean | null
          youtube_channel_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_admin_fkey"
            columns: ["admin"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_leader_fkey"
            columns: ["leader"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_organization_fkey"
            columns: ["organization"]
            isOneToOne: false
            referencedRelation: "organization"
            referencedColumns: ["uuid"]
          }
        ]
      }
      team_profile: {
        Row: {
          created_at: string | null
          id: number
          profile: string | null
          team: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          profile?: string | null
          team?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          profile?: string | null
          team?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_profile_profile_fkey"
            columns: ["profile"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_profile_team_fkey"
            columns: ["team"]
            isOneToOne: false
            referencedRelation: "team"
            referencedColumns: ["id"]
          }
        ]
      }
      track: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
