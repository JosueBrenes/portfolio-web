import { Trophy, Calendar, GamepadIcon, ExternalLink } from "lucide-react"
import Link from "next/link"

const achievements = [
  {
    type: "Winner",
    title: "ETH Pura Vida Hackathon",
    date: "October 2024",
    description:
      "Won with SafeTrust, an innovative blockchain solution for secure apartment rentals. The project focuses on creating a trustless platform that ensures secure and transparent transactions between landlords and tenants using smart contracts.",
    links: [
      {
        label: "View Announcement",
        url: "https://www.linkedin.com/posts/josue-brenes_web3-blockchain-ethereumcr-activity-7256373524670332928-4n8A/",
      },
      {
        label: "View Project Details",
        url: "https://www.linkedin.com/posts/alberto-chaves-costarica_safecrust-proposal-for-secure-apartment-rentals-activity-7256749069375606784-Ug9U/",
      },
    ],
    icon: Trophy,
  },
  {
    type: "Participant",
    title: "Dojo Game Jam - Spooky Edition",
    date: "November 2024",
    description:
      "Participated in this virtual game jam, developing a war-themed game. The experience enhanced skills in rapid prototyping and game development, providing valuable insights into creating engaging combat mechanics and strategic gameplay elements within a competitive environment.",
    links: [],
    icon: GamepadIcon,
  },
]

export default function Achievements() {
  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16">Achievements and Participations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="border border-white/10 rounded-lg p-4 md:p-6 bg-black/20">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                <div className="flex items-center">
                  <span className="inline-flex items-center px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium bg-gray-800 text-white">
                    <achievement.icon className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                    {achievement.type}
                  </span>
                </div>
                <div className="flex items-center text-muted-foreground text-xs md:text-sm">
                  <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                  <span>{achievement.date}</span>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="mb-4 text-gray-300 text-sm md:text-base">{achievement.description}</p>
              {achievement.links.length > 0 && (
                <div>
                  <p className="text-xs md:text-sm font-medium mb-2">Related Posts:</p>
                  <div className="flex flex-col space-y-2">
                    {achievement.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-xs md:text-sm text-primary hover:underline group"
                      >
                        <span className="mr-1">📄</span> {link.label}
                        <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
