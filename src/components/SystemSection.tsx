const SystemSection = () => {
    return (
        <section id="system" className="py-20">
            <h3 className="text-4xl font-bold text-center mb-12 font-display">SYSTEM</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <div>
                    <h4 className="text-3xl font-bold mb-4">画像処理システム</h4>
                    <p className="text-lg leading-relaxed">
                        本作の核となるのが「たわらの位置検出」ですが、たわらにセンサー等は使っておらず、画像処理のみでの実装になっております。カメラのブレによりマーカーが認識できなくても、補正をすることができるプログラムを開発したことにより、より円滑にお楽しみいただけます。
                    </p>
                </div>
                {/* ここにシステムのイメージ画像やGIFを入れると良い */}
                <div className="bg-gray-800 rounded-lg flex items-center justify-center w-fit h-fit p-4">
                   <img src="/tawara-system.gif" alt="GIF image" className="h-full object-cover" />
                </div>
            </div>
        </section>
    );
}
export default SystemSection;