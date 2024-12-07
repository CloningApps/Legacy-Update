import Image from "next/image"

export function Header() {
  return (
    <header className="bg-gradient-to-b from-[#B8C6E5] to-[#E6EAF5] p-4">
      <div className="max-w-6xl mx-auto flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="Legacy Update Logo"
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <h1 className="text-2xl font-semibold text-[#1E395B]">Legacy Update</h1>
          <p className="text-sm text-[#666]">
            Get back online, activate, and install updates on your legacy Windows PC
          </p>
        </div>
      </div>
    </header>
  )
}

