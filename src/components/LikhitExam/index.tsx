import Link from "next/link";

export default function LikhitExamSelectionBlock() {
    return (
        <section className="exam__type__selection__block  my-[80px] md:my-[120px]">
            <div className="container mx-auto">
                <div className="section__title mb-6 lg:mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                        Nepal Driving License Likhit Exam
                    </h2>
                    <p>The Nepal Driving License Likhit Exam is the first step toward getting your driving license in Nepal.
                        This written test evaluates your knowledge of road rules, traffic signs, penalties, and safe driving practices. The exam includes multiple-choice questions based on the official DOTM (Department of Transport Management) syllabus.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="selection__card p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Driving License Likhit Exam Preparation
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Prepare for the Nepal Driving License written test with a large collection of real exam questions and easy practice tools.
                        </p>

                        <ul className="text-gray-700 space-y-2 mb-6">
                            <li>• Over <strong>500+ likhit exam questions</strong></li>
                            <li>• Based on DOTM syllabus</li>
                            <li>• Practice by category</li>
                            <li>• Instant explanations for answers</li>
                            <li>• Unlimited attempts</li>
                            <li>• Mobile-friendly interface</li>
                        </ul>

                        <Link
                            href="#"
                            className="read__more bg-primary text-white hover:bg-transparent hover:text-primary"
                        >
                            Start Preparation
                        </Link>
                    </div>

                    <div className="selection__card p-6 bg-white rounded-xl shadow-md border hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            Nepal Driving License Likhit Mock Test
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Attempt a real exam–style mock test and get instant scoring and answer analysis.
                        </p>

                        <ul className="text-gray-700 space-y-2 mb-6">
                            <li>• <strong>30-minute</strong> exam timer</li>
                            <li>• <strong>25 questions</strong> as per official format</li>
                            <li>• Instant results & answer review</li>
                            <li>• Auto-submit when timer ends</li>
                            <li>• Real exam–like interface</li>
                            <li>• Track your progress</li>
                        </ul>

                        <Link
                            href="#"
                            className="read__more bg-primary text-white border-solid border-primary hover:bg-transparent hover:text-primary"
                        >
                            Take Mock Test
                        </Link>
                    </div>

                </div>
            </div>
        </section>

    )
}
