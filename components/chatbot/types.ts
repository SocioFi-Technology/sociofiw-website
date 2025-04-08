export type MessageType = "bot" | "user" | "system"

export interface Message {
  id: string
  type: MessageType
  text: string
  options?: ChatOption[]
}

export interface ChatOption {
  id: string
  text: string
  action: string
}

export interface UserInfo {
  name: string
  email: string
  profession: string
  designation: string
}

export type ChatStep =
  | "closed"
  | "greeting"
  | "name"
  | "email"
  | "profession"
  | "designation"
  | "confirmation"
  | "conversation"

