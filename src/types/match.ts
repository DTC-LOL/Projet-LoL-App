export interface IGameTimeLineFrameEvent {
  realTimestamp?: number
  timestamp: number
  type: string
  level?: number
  participantId?: number
  levelUpType?: string
  skillSlot?: number
  itemId?: number
  afterId?: number
  beforeId?: number
  goldGain?: number
  assistingParticipantIds?: Array<number>
  bounty?: number
  killStreakLength?: number
  killerId?: number
  monsterSubType?: string
  monsterType?: string
  position?: {
    x: number
    y: number
  }
  shutdownBounty?: number
  victimDamageDealt?: Array<{
    basic: boolean
    magicDamage: number
    name: string
    participantId: number
    physicalDamage: number
    spellName: string
    spellSlot: number
    trueDamage: number
    type: string
  }>
  victimDamageReceived?: Array<{
    basic: boolean
    magicDamage: number
    name: string
    participantId: number
    physicalDamage: number
    spellName: string
    spellSlot: number
    trueDamage: number
    type: string
  }>
  victimId?: number
  killType?: string
  creatorId?: number
  wardType?: string
  multiKillLength?: number
  buildingType?: string
  laneType?: string
  teamId?: number
  towerType?: string
  gameId?: number
  winningTeam?: number
}

export interface IGameTimeLineParticipants {
  participantId: number;
  puuid: string;
}


export interface IGameTimeLineFrame {
  events: Array<IGameTimeLineFrameEvent>
  participantFrames: Array<{
    championStats: {
      abilityHaste: number
      abilityPower: number
      armor: number
      armorPen: number
      armorPenPercent: number
      attackDamage: number
      attackSpeed: number
      bonusArmorPenPercent: number
      bonusMagicPenPercent: number
      ccReduction: number
      cooldownReduction: number
      health: number
      healthMax: number
      healthRegen: number
      lifesteal: number
      magicPen: number
      magicPenPercent: number
      magicResist: number;
      movementSpeed: number;
      omnivamp: number;
      physicalVamp: number;
      power: number;
      powerMax: number;
      powerRegen: number;
      spellVamp: number;
    }
    currentGold: number
    damageStats: {
      magicDamageDone: number
      magicDamageDoneToChampions: number
      magicDamageTaken: number
      physicalDamageDone: number
      physicalDamageDoneToChampions: number
      physicalDamageTaken: number
      totalDamageDone: number
      totalDamageDoneToChampions: number
      totalDamageTaken: number
      trueDamageDone: number
      trueDamageDoneToChampions: number
      trueDamageTaken: number
    }
    goldPerSecond: number
    jungleMinionsKilled: number
    level: number
    minionsKilled: number
    participantId: number
    position: {
      x: number
      y: number
    }
    timeEnemySpentControlled: number
    totalGold: number
    xp: number

  }>
  timestamp: number
}

export interface IGameTimeLineInfo {
  frameInterval: number
  frames: Array<IGameTimeLineFrame>
  gameId: number
  participants: Array<{
    participantId: number
    puuid: string
  }>
}

export interface IGameTimeLine {
  metadata: {
    dataVersion: string
    matchId: string
    participants: Array<string>
  }
  info: IGameTimeLineInfo
}

export interface IParticipant {
  [key: string]: any;
  summonerName: string
  teamId: number
  championId: number
  championName: string
  champlevel: number
  role: string
  kills: number
  deaths: number
  assists: number
  totalMinionsKilled: number
  item0: number
  item1: number
  item2: number
  item3: number
  item4: number
  item5: number
  item6: number
  visionScore: number
  summoner2Id: number
  summoner1Id: number
  goldEarned: number
  goldSpent: number
}

export interface IGameRecap {
  game_duration: number
  game_creation: number
  game_mode: string
  participants: Array<IParticipant>
}

export type IGameData = {
  id: number
  uuid: string
  timeline: IGameTimeLine;
  players: Array<number>
  recap: IGameRecap;
  createdAt: string
  updatedAt: any
}
