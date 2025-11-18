import { TeamProps } from '@/components/Sections/NplTeamList'
import Image from 'next/image'
import Link from 'next/link'

export default function NplTeamCard({ team }: { team: TeamProps }) {
    return (
        <div className={`npl__team__card text-center bg-white shadow-md rounded-2xl p-4 flex flex-col justify-between h-full ${team.teamName.split(" ").join("_").toLowerCase()}`}>
            <Link href="/" className="logo__wrapper relative aspect-220/220 rounded-full h-[220px]">
                <Image src={team.teamLogo.url} alt={team.teamLogo.alt} fill className='object-contain' />
            </Link>
            <div className="npl__team__content flex flex-col gap-2">
                <div className="flex items-center justify-center gap-1">
                    {Array.from({ length: team.numberOfTrophies }).map((_, index) => (
                        <Image src={"/trophy.webp"} alt={team.teamName} className='object-cover mx-auto' width={40} height={40} key={index.toString + team.teamName} />
                    ))}
                </div>
                <Link href={"/"} className='text-[20px] font-[800]'>{team.teamName}</Link>
                <p>{team.teamOwner}</p>
            </div>
        </div>
    )
}
