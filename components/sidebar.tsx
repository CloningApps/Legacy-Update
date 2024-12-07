import Link from "next/link"
import { Download, FileWarning, BarChart2, HelpCircle, Shield, MessageCircle, Github } from 'lucide-react'

export function Sidebar() {
  return (
    <div className="w-64 bg-[#ECF3FE] p-4">
      <div className="bg-white rounded shadow-sm mb-4">
        <div className="bg-gradient-to-b from-[#7B9FE6] to-[#5C85C6] text-white p-2 rounded-t">
          Legacy Update
        </div>
        <nav className="p-2 space-y-2">
          <Link 
            href="/setup"
            className="flex items-center gap-2 text-[#1E395B] hover:text-blue-700"
          >
            <Shield className="h-4 w-4" />
            Set Up Legacy Update
          </Link>
          <Link 
            href="/download"
            className="flex items-center gap-2 text-[#1E395B] hover:text-blue-700"
          >
            <Download className="h-4 w-4" />
            Download Center
          </Link>
          <Link 
            href="/errors"
            className="flex items-center gap-2 text-[#1E395B] hover:text-blue-700"
          >
            <FileWarning className="h-4 w-4" />
            Error Reference
          </Link>
          <Link 
            href="/stats"
            className="flex items-center gap-2 text-[#1E395B] hover:text-blue-700"
          >
            <BarChart2 className="h-4 w-4" />
            Statistics
          </Link>
          <Link 
            href="/faq"
            className="flex items-center gap-2 text-[#1E395B] hover:text-blue-700"
          >
            <HelpCircle className="h-4 w-4" />
            FAQ
          </Link>
        </nav>
      </div>
      
      <div className="bg-white rounded shadow-sm">
        <div className="bg-gradient-to-b from-[#7B9FE6] to-[#5C85C6] text-white p-2 rounded-t">
          Links
        </div>
        <nav className="p-2 space-y-2">
          <Link 
            href="https://github.com/your-repo"
            className="flex items-center gap-2 text-[#1E395B] hover:text-blue-700"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
          <Link 
            href="https://discord.gg/your-server"
            className="flex items-center gap-2 text-[#1E395B] hover:text-blue-700"
          >
            <MessageCircle className="h-4 w-4" />
            Discord
          </Link>
        </nav>
      </div>
    </div>
  )
}

