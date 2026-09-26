export type CueStatus = 'pending' | 'confirmed' | 'followup'
export type TabId = 'live' | 'backstage' | 'terms' | 'offline'

export interface Speaker {
  id: string
  name: string
  title: string
  language: string
  color: string
}

export interface Session {
  id: string
  order: number
  time: string
  title: string
  speakerId: string
  room: string
  status: 'upcoming' | 'live' | 'done'
}

export interface Term {
  id: string
  source: string
  target: string
  note: string
  speakerId: string
  priority: 'normal' | 'high'
}

export interface Announcement {
  id: string
  level: 'info' | 'warning' | 'urgent'
  text: string
  visibleOnStage: boolean
  createdAt: string
}

export interface Correction {
  id: string
  /** 该次纠正之前舞台上显示的内容 */
  fromText: string
  /** 译员提交的正稿 */
  toText: string
  /** 纠正原因（口误 / 术语纠正等） */
  reason: string
  /** 操作人 */
  operator: string
  /** 操作时间 */
  createdAt: number
}

export interface Cue {
  id: string
  speakerId: string
  text: string
  receivedAt: number
  status: CueStatus
  manual: boolean
  offline: boolean
  delaySeconds: number
  duplicateOf: string | null
  followupText: string
  tags: string[]
  /** 已确认段落的正文纠正记录，按时间顺序逐版保留；舞台只显示最后一版 */
  corrections: Correction[]
}

export interface Reminder {
  id: string
  termId: string
  cueId: string
  target: string
  createdAt: number
  acknowledged: boolean
}

export interface DeskState {
  speakers: Speaker[]
  sessions: Session[]
  terms: Term[]
  announcements: Announcement[]
  cues: Cue[]
  reminders: Reminder[]
  activeCueId: string
  fontScale: number
  /** 当前操作人，记录在纠正版本中 */
  operator: string
  online: boolean
  liveSimulation: boolean
  updatedAt: string
}
