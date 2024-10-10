import Header from "./_components/Header"; // Adjust the path if necessary
import Link from "next/link";
import Image from "next/image";

const educatorTestimonials = [
  { name: "Dr. Sarah Johnson", role: "Professor of Computer Science", quote: "This AI Course Generator has revolutionized my course planning process!" },
  { name: "Mark Thompson", role: "High School Math Teacher", quote: "I've saved countless hours using this tool. It's a game-changer for educators." },
  { name: "Emily Chen", role: "Online Course Creator", quote: "The AI-generated content is impressively accurate and engaging. Highly recommended!" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <a href="https://ai-course-generator-six.vercel.app/" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300" role="alert">
            <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">New</span>
            <span className="text-sm font-medium">404-AI-Course-Generator</span>
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
            </svg>
          </a>
          <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">AI Course Generator</h1>
          <p className="text-xl text-gray-600 mb-8 animate__animated animate__fadeIn">Create comprehensive, engaging courses in minutes with our AI-powered assistant</p>
          <Link href="/dashboard" className="text-xs bg-primary rounded-full text-white px-6 py-3 font-semibold hover:bg-blue-600 transition duration-300 cursor-pointer transform hover:scale-105">
            Start Creating
          </Link>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 animate__animated animate__fadeIn">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <div className="text-2xl font-bold mb-4">1. Define Your Topic</div>
              <p>Input your course subject and target audience to get started.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <div className="text-2xl font-bold mb-4">2. Customize Content</div>
              <p>Review and edit AI-generated modules, lessons, and quizzes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <div className="text-2xl font-bold mb-4">3. Publish and Share</div>
              <p>Export your course and share it with your students or on learning platforms.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-8 animate__animated animate__fadeIn">What Educators Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educatorTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}