import { Trophy, Calendar, GamepadIcon } from "lucide-react";
import Link from "next/link";

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
];

export default function Achievements() {
  return (
    <section className="py-20">
      <div className="container max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Achievements and Participations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-lg p-6 bg-black/20"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-white">
                    <achievement.icon className="h-4 w-4 mr-2" />
                    {achievement.type}
                  </span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{achievement.date}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="mb-4 text-gray-300">{achievement.description}</p>
              {achievement.links.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-2">Related Posts:</p>
                  <div className="flex flex-wrap gap-3">
                    {achievement.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.url}
                        className="inline-flex items-center text-sm text-primary hover:underline"
                      >
                        <span className="mr-1">📄</span> {link.label}
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
  );
}
