import React, { useState, useEffect } from 'react';

interface Match {
  home_team: { name: string };
  away_team: { name: string };
  score: string;
}

interface TeamData {
  team_name: string;
  matches: Match[];
}

const TeamScoresAndFixtures: React.FC = () => {
  const [teamData, setTeamData] = useState<TeamData | null>(null);
  const teamId = 60007; // Replace with your team's ID

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch(`https://betsapi.com/t/${teamId}/Homenetmen`);
        if (!response.ok) {
          throw new Error('Failed to fetch team data');
        }
        const data: TeamData = await response.json();
        setTeamData(data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeamData();
  }, [teamId]);

  return (
    <div>
      <h1>{teamData ? teamData.team_name : 'Loading...'} Scores and Fixtures</h1>
      {teamData && teamData.matches ? (
        <ul>
          {teamData.matches.map((match, index) => (
            <li key={index}>
              {match.home_team.name} vs {match.away_team.name} - {match.score}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default TeamScoresAndFixtures;
