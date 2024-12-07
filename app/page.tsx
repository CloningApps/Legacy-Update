import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import Image from "next/image"
import Link from "next/link"
import { Download } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto flex gap-6 p-4">
        <Sidebar />
        <main className="flex-1">
          <div className="bg-gradient-to-r from-gray-200 to-white p-4 rounded-lg mb-6">
            <div className="flex items-center gap-4">
              <Image
                src="/laptop-icon.png"
                alt="Laptop Icon"
                width={64}
                height={64}
              />
              <div>
                <h2 className="text-2xl font-semibold text-[#1E395B]">Welcome</h2>
                <p className="text-gray-600">to Legacy Update</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            <p>
              This is a community-run resource to help you fix access to the Internet and the Windows Update service on earlier versions of Windows. Since Windows XP was discontinued in 2014, followed by Windows 7 in 2020, Microsoft has closed services they depend on, such as Windows Update. There are also design flaws with these earlier versions of Windows Update, which make them difficult to get working on new installations.
            </p>

            <p>
              Legacy Update can install all relevant updates necessary to fix access to the Windows Update service on unsupported versions of Windows. These versions of Windows may display the error: "Windows could not search for new updates. Windows Update encountered an unknown error" with error code B0072EFE, or may simply never finish checking for updates. Legacy Update identifies the updates your system lacks, and installs them automatically, restoring the Windows Update service to full functionality.
            </p>

            <div className="bg-[#F5F5F5] border border-gray-200 rounded p-4 mt-6">
              <h3 className="text-lg font-semibold mb-2">System Requirements</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Compatible with Windows 2000, XP, Vista, 7, 8, 8.1, 10, and 11 (including equivalent Windows Server releases)</li>
                <li>All Windows editions (Professional, Home, Media Center Edition, etc.)</li>
                <li>32-bit, 64-bit, and Itanium processors</li>
              </ul>
            </div>

            <div className="mt-6">
              <Link
                href="/download"
                className="inline-flex items-center gap-2 bg-gradient-to-b from-[#7B9FE6] to-[#5C85C6] text-white px-4 py-2 rounded hover:opacity-90"
              >
                <Download className="h-4 w-4" />
                Install Legacy Update
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

