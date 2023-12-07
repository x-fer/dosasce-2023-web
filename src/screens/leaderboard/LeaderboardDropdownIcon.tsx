import { Trophy } from 'lucide-react'
import { useState } from 'react'

const LeaderboardDropdownIcon = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="relative">
      <button className="flex h-full items-center gap-1 text-2xl" onClick={() => setIsOpen(o => !o)}>
        <Trophy size={24} strokeWidth={3} />
        <p className="mb-1 hidden underline sm:block">rang-lista</p>
      </button>
      {isOpen && (
        <div className="absolute right-0 top-12 flex h-14 w-32 cursor-pointer flex-col items-center justify-center rounded-b-xl bg-red py-4 pb-6 text-white">
          <a href="/leaderboard/1">
            <p className="w-ful hover:underline">1. Zadatak</p>
          </a>
          <a href="/leaderboard/2">
            <p className="w-full hover:underline">2. Zadatak</p>
          </a>
        </div>
      )}
    </div>
  )
}

export default LeaderboardDropdownIcon
