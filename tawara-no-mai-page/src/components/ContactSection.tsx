const ContactSection = () => {
    return (
        <section id="contact" className="py-20">
            <h3 className="text-4xl font-bold text-center mb-12 font-display">CONTACT</h3>
            <div className="max-w-xl mx-auto">
                <p className="text-center mb-8">
                    メディア関係者様、その他お問い合わせはこちらのフォームからお願いいたします。
                </p>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block mb-2">お名前</label>
                        <input type="text" id="name" className="w-full bg-gray-800 border border-gray-600 rounded-md p-3" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2">メールアドレス</label>
                        <input type="email" id="email" className="w-full bg-gray-800 border border-gray-600 rounded-md p-3" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2">お問い合わせ内容</label>
                        <textarea id="message" rows={5} className="w-full bg-gray-800 border border-gray-600 rounded-md p-3"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                            送信
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default ContactSection;