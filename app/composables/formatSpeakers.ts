export const formatSpeakers = (speakers: string[], affiliation?: string | null) => {
    const label = speakers.length > 1 ? 'Speakers' : 'Speaker';
    const names = speakers.join(', ');
    return affiliation ? `${label}: ${names} (${affiliation})` : `${label}: ${names}`;
}
