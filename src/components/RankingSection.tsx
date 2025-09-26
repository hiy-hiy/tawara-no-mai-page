"use client"
import { useState, useEffect } from 'react';

// Player型からnameを削除
type ScoreEntry = {
  rank: number;
  score: number;
};

const RankingSection = () => {
  const [ranking, setRanking] = useState<ScoreEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        // 環境変数からAPIのURLを取得。なければローカルのURLを使う
        const apiUrl = 'https://tawara-no-mai-ranking.onrender.com/';
        const response = await fetch(`${apiUrl}/get_ranking`);
        if (!response.ok) {
          throw new Error('サーバーからの応答がありませんでした。');
        }
        const data = await response.json();
        setRanking(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('予期せぬエラーが発生しました。');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchRanking();
  }, []);

  if (loading) return <p className="text-center text-white py-10">ランキングを読み込み中...</p>;
  if (error) return <p className="text-center text-red-500 py-10">エラー: {error}</p>;

  return (
    <section id="ranking" className="py-20">
      <h3 className="text-4xl font-bold text-center mb-4 font-display">HIGH SCORE RANKING</h3>
      <p className="text-center text-gray-400 mb-8">神様のお恵みはスコアとなって</p>
      <div className="max-w-md mx-auto bg-black bg-opacity-50 p-6 rounded-lg"> {/* 横幅をmdに変更 */}
        {/* grid-cols-2に変更し、NAMEを削除 */}
        <div className="grid grid-cols-2 text-lg font-bold border-b border-gray-600 pb-2 mb-4">
          <span>RANK</span>
          <span className="text-right">SCORE</span>
        </div>
        <ul className="space-y-3">
          {ranking.map((entry) => (
            // grid-cols-2に変更し、NAMEを削除
            <li key={entry.rank} className="grid grid-cols-2 text-xl items-center">
              <span className="font-display font-bold text-2xl">
                {entry.rank}
              </span>
              <span className="text-right font-mono">{entry.score.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RankingSection;