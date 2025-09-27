import { Search, Filter, ChevronDown, Plus } from 'lucide-react'

const questions = [
  {
    id: 1,
    votes: 0,
    answers: 0,
    views: 2,
    title: "Why do POST requests from Cloud Run arrive as GET at my Django REST API (GKE)?",
    excerpt: "What are the details of your problem? I have a serverless pipeline on Google Cloud: A \"Video Sender\" uploads .mp4 files to Google Cloud Storage (works fine). An Eventarc + Pub/Sub trigger fires a ...",
    tags: ["http", "django-rest-framework", "python-requests", "google-kubernetes-engine", "google-cloud-run"],
    author: "Raul Chiarella",
    authorReputation: 778,
    timeAgo: "57 secs ago",
    authorAvatar: "/api/placeholder/16/16"
  },
  {
    id: 2,
    votes: 0,
    answers: 0,
    views: 7,
    title: "JavaFX/Swing app freezes when connecting to GridDB cluster",
    excerpt: "I'm building a small JavaFX desktop app (with a Swing dialog for login) that connects to a local GridDB node. The UI freezes as soon as I attempt the first query, and I'm not sure if it's a driver ...",
    tags: ["griddb"],
    author: "Jeremiah Wafula",
    authorReputation: 1,
    timeAgo: "4 mins ago",
    authorAvatar: "/api/placeholder/16/16"
  },
  {
    id: 3,
    votes: 0,
    answers: 0,
    views: 5,
    title: "setuptools for python 311",
    excerpt: "I installed Python 3.11 and installed the updated version of setuptools (V80.9.0). when I try to install any local package (or if I try to import setuptools), I get this assertion error: ...",
    tags: ["python-3.x", "setuptools"],
    author: "TSobhy",
    authorReputation: 99,
    timeAgo: "4 mins ago",
    authorAvatar: "/api/placeholder/16/16"
  },
  {
    id: 4,
    votes: 1,
    answers: 0,
    views: 8,
    title: "How do I refresh the contact list in Android to make the green WhatsApp contact button appear in the Android contacts",
    excerpt: "When you add a contact to an Android mobile phone, the contact will after some seconds (or some other amount of time) should green WhatsApp contact info in the contact card. A reliable way to ensu",
    tags: ["android", "adb", "whatsapp"],
    author: "tmighty",
    authorReputation: 11500,
    timeAgo: "8 mins ago",
    authorAvatar: "/api/placeholder/16/16"
  },
  {
    id: 5,
    votes: 1,
    answers: 0,
    views: 14,
    title: "Is it safe to exclusively share ClientSession objects between N threads?",
    excerpt: "activemq-artemis version: 2.42.0 Documentation for ClientSession class claims the following. A ClientSession is a single-threaded parent object required for producing and consuming messages. Onl",
    tags: ["multithreading", "activemq-artemis"],
    author: "user655419",
    authorReputation: 336,
    timeAgo: "13 mins ago",
    authorAvatar: "/api/placeholder/16/16"
  }
]

const collectives = [
  {
    name: "Google Cloud",
    members: "65k Members",
    description: "A collective for developers who utilize Google Cloud's infrastructure and platform",
    icon: "🌤️"
  },
  {
    name: "CI/CD",
    members: "21k Members", 
    description: "A collective where developers focused on continuous integration, delivery, and",
    icon: "🔄"
  },
  {
    name: "PHP",
    members: "16k Members",
    description: "A collective where developers working with PHP can learn and connect about the open",
    icon: "🐘"
  }
]

const hotQuestions = [
  "What does \"your own\" mean in \"did it not remain your own?\", Acts 5:4?",
  "Illustrating the complex Gamma function in 3D",
  "Why did Lex Luthor order the comms channel switched?",
  "General inquiries about the Ersatzinfinitiv",
  "Bias when estimating the best linear fit of a non-linear population?",
  "Superman TV episode, probably 1990s: he is in a foggy dark place, with his parents and a monster",
  "what does \"my left a** cheek\" mean?",
  "In Justice Kagan's \"Congress, as everyone agrees, prohibited each of those presidential removals.\" who exactly is \"everyone\"?",
  "Target a player vs hexproof",
  "What was the problem with eating food sacrificed to idols?"
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-t-[3px] border-orange-500 border-b border-gray-300 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold">
                  SO
                </div>
                <span className="text-blue-600 font-medium hidden sm:block">Stack Overflow</span>
              </div>
              
              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded">About</a>
                <button className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded flex items-center">
                  Products <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded">For Teams</a>
              </nav>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-2xl mx-6 hidden sm:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search…"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Auth buttons */}
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 text-sm">
                Log in
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 flex">
        {/* Left Sidebar */}
        <aside className="w-40 flex-shrink-0 py-6 hidden lg:block">
          <nav className="space-y-1">
            <a href="#" className="flex items-center px-2 py-2 text-gray-600 hover:bg-gray-100 rounded">
              <span className="text-sm">Home</span>
            </a>
            <a href="#" className="flex items-center px-2 py-2 bg-gray-100 text-gray-900 rounded font-medium">
              <span className="text-sm">Questions</span>
            </a>
            <a href="#" className="flex items-center px-2 py-2 text-gray-600 hover:bg-gray-100 rounded">
              <span className="text-sm">AI Assist</span>
              <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Labs</span>
            </a>
            <a href="#" className="flex items-center px-2 py-2 text-gray-600 hover:bg-gray-100 rounded">
              <span className="text-sm">Tags</span>
            </a>
            <a href="#" className="flex items-center px-2 py-2 text-gray-600 hover:bg-gray-100 rounded">
              <span className="text-sm">Challenges</span>
            </a>
            <a href="#" className="flex items-center px-2 py-2 text-gray-600 hover:bg-gray-100 rounded">
              <span className="text-sm">Chat</span>
            </a>
            <a href="#" className="flex items-center px-2 py-2 text-gray-600 hover:bg-gray-100 rounded">
              <span className="text-sm">Articles</span>
            </a>
            <a href="#" className="flex items-center px-2 py-2 text-gray-600 hover:bg-gray-100 rounded">
              <span className="text-sm">Users</span>
            </a>
            <a href="#" className="flex items-center px-2 py-2 text-gray-600 hover:bg-gray-100 rounded">
              <span className="text-sm">Companies</span>
            </a>
            
            <div className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-800 uppercase tracking-wide">Collectives</span>
                <Plus className="w-3 h-3 text-gray-600" />
              </div>
              <p className="text-xs text-gray-600 mb-2">
                Communities for your favorite technologies.{' '}
                <a href="#" className="text-blue-600 underline">Explore all Collectives</a>
              </p>
            </div>

            <div className="pt-6">
              <span className="text-xs font-bold text-gray-800 uppercase tracking-wide">Teams</span>
              <div className="mt-3 p-3 bg-orange-50 rounded">
                <div className="mb-3">
                  <div className="w-full h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">
                    TEAMS
                  </div>
                </div>
                <p className="text-xs text-gray-700 mb-3">
                  Ask questions, find answers and collaborate at work with Stack Overflow for Teams.
                </p>
                <button className="w-full py-2 bg-orange-500 text-white text-xs rounded hover:bg-orange-600">
                  Try Teams for free
                </button>
                <button className="w-full py-2 text-gray-700 text-xs mt-1 hover:text-gray-900">
                  Explore Teams
                </button>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 py-6 border-l border-gray-300 pl-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-normal text-gray-900">Newest Questions</h1>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                Ask Question
              </button>
            </div>
            
            <p className="text-gray-700 mb-4">24,199,987 questions</p>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex border border-gray-300 rounded">
                <button className="px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium">Newest</button>
                <button className="px-4 py-2 text-gray-600 text-sm hover:bg-gray-100">Active</button>
                <button className="px-4 py-2 text-gray-600 text-sm hover:bg-gray-100 flex items-center">
                  Bountied
                  <span className="ml-2 px-1 py-0.5 bg-blue-600 text-white text-xs rounded">24</span>
                </button>
                <button className="px-4 py-2 text-gray-600 text-sm hover:bg-gray-100">Unanswered</button>
                <button className="px-4 py-2 text-gray-600 text-sm hover:bg-gray-100 flex items-center">
                  More <ChevronDown className="w-3 h-3 ml-1" />
                </button>
              </div>
              
              <button className="flex items-center px-3 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-0">
            {questions.map((question, index) => (
              <div key={question.id} className={`py-4 ${index !== questions.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <div className="flex gap-4">
                  {/* Stats */}
                  <div className="flex flex-col items-center text-center space-y-1 min-w-[80px]">
                    <div className="text-sm">
                      <span className="font-medium text-gray-900">{question.votes}</span>
                      <div className="text-gray-600 text-xs">{question.votes === 1 ? 'vote' : 'votes'}</div>
                    </div>
                    <div className={`text-sm px-2 py-1 rounded ${question.answers > 0 ? 'border border-green-600 text-green-600' : 'text-gray-600'}`}>
                      <span className="font-medium">{question.answers}</span>
                      <div className="text-xs">{question.answers === 1 ? 'answer' : 'answers'}</div>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-gray-600">{question.views}</span>
                      <div className="text-gray-600 text-xs">views</div>
                    </div>
                  </div>

                  {/* Question Content */}
                  <div className="flex-1">
                    <h3 className="text-blue-600 hover:text-blue-800 mb-2">
                      <a href="#" className="text-base leading-tight">{question.title}</a>
                    </h3>
                    <p className="text-gray-700 text-sm mb-3 leading-tight">{question.excerpt}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {question.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded border hover:bg-gray-200 cursor-pointer font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Author */}
                    <div className="flex items-center justify-end text-xs">
                      <div className="flex items-center space-x-2">
                        <img
                          src={question.authorAvatar}
                          alt={`${question.author}'s avatar`}
                          className="w-4 h-4 rounded"
                        />
                        <a href="#" className="text-blue-600 hover:text-blue-800">{question.author}</a>
                        <span className="font-bold text-gray-700">{question.authorReputation.toLocaleString()}</span>
                        <span className="text-gray-500">asked {question.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 py-6 pl-6 hidden xl:block">
          {/* Collectives */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Collectives</h3>
            
            {collectives.map((collective, index) => (
              <div key={index} className={`p-4 ${index !== collectives.length - 1 ? 'border-b border-gray-200' : ''}`}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-lg">
                    {collective.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-1">{collective.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{collective.members}</p>
                    <p className="text-sm text-gray-700 mb-3">{collective.description}</p>
                    <button className="px-3 py-1 border border-blue-600 text-blue-600 text-sm rounded hover:bg-blue-50">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hot Network Questions */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Hot Network Questions</h3>
            <div className="space-y-3">
              {hotQuestions.slice(0, 8).map((question, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-4 h-4 bg-gray-300 rounded-sm flex-shrink-0 mt-0.5"></div>
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm leading-tight">
                    {question}
                  </a>
                </div>
              ))}
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm ml-6">more hot questions</a>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold mr-2">
                  SO
                </div>
              </div>
              <h5 className="font-bold text-gray-200 uppercase text-sm mb-4">Stack Overflow</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Questions</a></li>
                <li><a href="#" className="hover:text-white">Help</a></li>
                <li><a href="#" className="hover:text-white">Chat</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-gray-200 uppercase text-sm mb-4">Products</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Teams</a></li>
                <li><a href="#" className="hover:text-white">Advertising</a></li>
                <li><a href="#" className="hover:text-white">Talent</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-gray-200 uppercase text-sm mb-4">Company</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Work Here</a></li>
                <li><a href="#" className="hover:text-white">Legal</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Cookie Settings</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-gray-200 uppercase text-sm mb-4">Stack Exchange Network</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Technology</a></li>
                <li><a href="#" className="hover:text-white">Culture & recreation</a></li>
                <li><a href="#" className="hover:text-white">Life & arts</a></li>
                <li><a href="#" className="hover:text-white">Science</a></li>
                <li><a href="#" className="hover:text-white">Professional</a></li>
                <li><a href="#" className="hover:text-white">Business</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
                <li><a href="#" className="hover:text-white">Data</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-wrap items-center justify-between text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="hover:text-white">Blog</a>
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Instagram</a>
            </div>
            <div className="text-xs">
              Site design / logo © 2025 Stack Exchange Inc; user contributions licensed under{' '}
              <a href="#" className="underline hover:text-white">CC BY-SA</a>
              . rev 2025.9.22.34276
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
