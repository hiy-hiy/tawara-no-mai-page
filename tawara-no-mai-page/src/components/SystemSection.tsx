const SystemSection = () => {
    return (
        <section id="system" className="py-20">
            <h3 className="text-4xl font-bold text-center mb-12 font-display">SYSTEM</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <div>
                    <h4 className="text-3xl font-bold mb-4">画像処理システム</h4>
                    <p className="text-lg leading-relaxed">
                        本作の核となるのが「たわらの検出」になりますが、たわら内にセンサー等は使っておりません。独自の画像処理システムにより、無線の混線の恐れなく、ゲームをお楽しみいただるようになっております。
                    </p>
                </div>
                {/* ここにシステムのイメージ画像やGIFを入れると良い */}
                <div className="bg-gray-800 h-64 rounded-lg flex items-center justify-center">
                   <p>System Image or GIF</p>
                </div>
            </div>
        </section>
    );
}
export default SystemSection;