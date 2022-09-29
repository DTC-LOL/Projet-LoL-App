export type IGameData = {
  id: number
  uuid: string
  timeline: {
    metadata: {
      dataVersion: string
      matchId: string
      participants: Array<string>
    }
    info: {
      frameInterval: number
      frames: Array<{
        events: Array<{
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
        }>
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
            magicResist: number
            movementSpeed: number
            omnivamp: number
            physicalVamp: number
            power: number
            powerMax: number
            powerRegen: number
            spellVamp: number
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
      }>
      gameId: number
      participants: Array<{
        participantId: number
        puuid: string
      }>
    }
  }
  players: Array<number>
  recap: {
    game_duration: number
    game_creation: number
    game_mode: string
	participants: Array<string>
  }
  createdAt: string
  updatedAt: any
}
