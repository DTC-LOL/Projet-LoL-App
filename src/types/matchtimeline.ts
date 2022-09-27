
export interface Metadata {
    dataVersion: string;
    matchId: string;
    participants: string[];
}

export interface Position {
    x: number;
    y: number;
}

export interface VictimDamageDealt {
    basic: boolean;
    magicDamage: number;
    name: string;
    participantId: number;
    physicalDamage: number;
    spellName: string;
    spellSlot: number;
    trueDamage: number;
    type: string;
}

export interface VictimDamageReceived {
    basic: boolean;
    magicDamage: number;
    name: string;
    participantId: number;
    physicalDamage: number;
    spellName: string;
    spellSlot: number;
    trueDamage: number;
    type: string;
}

export interface Event {
    realTimestamp?: any;
    timestamp?: number;
    type?: string;
    levelUpType?: string;
    participantId?: number;
    skillSlot?: number;
    itemId?: number;
    afterId?: number;
    beforeId?: number;
    goldGain?: number;
    creatorId?: number;
    wardType?: string;
    level?: number;
    bounty?: number;
    killStreakLength?: number;
    killerId?: number;
    position?: Position;
    shutdownBounty?: number;
    victimDamageDealt?: VictimDamageDealt[];
    victimDamageReceived?: VictimDamageReceived[];
    victimId?: number;
    killType?: string;
    assistingParticipantIds?: number[];
    multiKillLength?: number;
    laneType?: string;
    teamId?: number;
    killerTeamId?: number;
    monsterSubType?: string;
    monsterType?: string;
    buildingType?: string;
    towerType?: string;
    actualStartTime?: number;
    gameId?: number;
    winningTeam?: number;
}

export interface Champion {
    championStats: ChampionStats;
    currentGold: number;
    damageStats: DamageStats;
    goldPerSecond: number;
    jungleMinionsKilled: number;
    level: number;
    minionsKilled: number;
    participantId: number;
    position: Position;
    timeEnemySpentControlled: number;
    totalGold: number;
    xp: number;
}

export interface ChampionStats {
    abilityHaste: number;
    abilityPower: number;
    armor: number;
    armorPen: number;
    armorPenPercent: number;
    attackDamage: number;
    attackSpeed: number;
    bonusArmorPenPercent: number;
    bonusMagicPenPercent: number;
    ccReduction: number;
    cooldownReduction: number;
    health: number;
    healthMax: number;
    healthRegen: number;
    lifesteal: number;
    magicPen: number;
    magicPenPercent: number;
    magicResist: number;
    movementSpeed: number;
    omnivamp: number;
    physicalVamp: number;
    power: number;
    powerMax: number;
    powerRegen: number;
    spellVamp: number;
}

export interface DamageStats {
    magicDamageDone: number;
    magicDamageDoneToChampions: number;
    magicDamageTaken: number;
    physicalDamageDone: number;
    physicalDamageDoneToChampions: number;
    physicalDamageTaken: number;
    totalDamageDone: number;
    totalDamageDoneToChampions: number;
    totalDamageTaken: number;
    trueDamageDone: number;
    trueDamageDoneToChampions: number;
    trueDamageTaken: number;
}

export interface ParticipantFrames {
    championStats: ChampionStats;
    currentGold: number;
    damageStats: DamageStats;
    goldPerSecond: number;
    jungleMinionsKilled: number;
    level: number;
    minionsKilled: number;
    participantId: number;
    position: Position;
    timeEnemySpentControlled: number;
    totalGold: number;
    xp: number;
}

export interface Frame {
    events: Event[];
    participantFrames: {
        1: ParticipantFrames;
        2: ParticipantFrames;
        3: ParticipantFrames;
        4: ParticipantFrames;
        5: ParticipantFrames;
        6: ParticipantFrames;
        7: ParticipantFrames;
        8: ParticipantFrames;
        9: ParticipantFrames;
        10: ParticipantFrames;

    };
    timestamp: number;
}

export interface Participant {
    participantId: number;
    puuid: string;
}

export interface Info {
    frameInterval: number;
    frames: Frame[];
    gameId: number;
    participants: Participant[];
}

export interface MatchTimeline {
    metadata: Metadata;
    info: Info;
}
