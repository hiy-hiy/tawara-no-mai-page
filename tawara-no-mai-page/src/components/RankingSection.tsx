const RankingSection = () => {
  // 後でFirebaseから取得するダミーデータ
  const dummyRanking = [
    { rank: 1, name: "TGS_PLAYER_01", score: 999990 },
    { rank: 2, name: "GEMINI_DEV", score: 985240 },
    { rank: 3, name: "HIKARU_N", score: 852360 },
    { rank: 4, name: "AI_CHALLENGER", score: 789120 },
    { rank: 5, name: "TOKYO_GAMER", score: 654320 },
  ];

  return (
    <section id="ranking" className="py-20">
      <h3 className="text-4xl font-bold text-center mb-4 font-display">HIGH SCORE RANKING</h3>
      <p className="text-center text-gray-400 mb-8">神様のお恵みはスコアとなって</p>
      <div className="max-w-2xl mx-auto bg-black bg-opacity-50 p-6 rounded-lg">
        <div className="grid grid-cols-3 text-lg font-bold border-b border-gray-600 pb-2 mb-4">
          <span>RANK</span>
          <span>NAME</span>
          <span className="text-right">SCORE</span>
        </div>
        <ul className="space-y-3">
          {dummyRanking.map((player) => (
            <li key={player.rank} className="grid grid-cols-3 text-xl items-center">
              <span className="font-display font-bold text-2xl">
                {player.rank}
              </span>
              <span>{player.name}</span>
              <span className="text-right font-mono">{player.score.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default RankingSection;