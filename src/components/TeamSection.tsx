const TeamSection = () => {
    return (
        <section id="team" className="py-20 text-center">
            <h3 className="text-4xl font-bold mb-12 font-display">DEVELOPERS</h3>
            <div className="max-w-3xl mx-auto">
                <p className="text-lg mb-4">
                    私たちはデジタルカルチャー研究室です。
                    2022年4月にスタートした新しい研究室で、伝統文化や文化財を活用するためのデジタルコンテンツ開発や、地域課題解決のためのデータの利活用、分析などキーワードにして研究開発を行っています。
                </p>
                <a href="https://ogurilab.org/" target="_blank" rel="noopener noreferrer" 
                   className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors">
                    研究室ホームページはこちら
                </a>
            </div>
        </section>
    )
}
export default TeamSection;