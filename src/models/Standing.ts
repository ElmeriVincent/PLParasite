export interface IStanding {
    team: ITeam;
    stats: IStats[];
};

export interface ITeam {
    id: string;
    uid: string;
    location: string;
    name: string;
    abbreviation: string;
    displayName: string;
    shortDisplayName: string;
    isActive: boolean;
    logos: {
        href: string;
        width: number;
        height: number;
        alt: string;
        rel: string[];
        lastUpdated: string;
    }[];
    isNational: boolean;
};

export interface IStats {
    summary: any;
    name: string;
    displayName: string;
    shortDisplayName: string;
    description: string;
    abbreviation: string;
    value: number;
    displayValue: string;
}

export interface IRank {
    value: number;
}

export interface IOverall {
    summary: string;
}

{/* ALL THAT INVOLVE POINTS IN THE JSON */}

export interface IPoints {
    value: number;
}

export interface IPointsAgainst { 
    value: number;
}

export interface IPointsFor { 
    value: number;
}

export interface IPointDifferential {
    value: number;
}