import { Pencil, Trash2 } from "lucide-react"
import Image from "next/image"

export default function HeadsTable() {
  const members = [
    {
      id: 1,
      name: "Darlene Robertson",
      avatar: "/images/adminstartion.png",
      division: "CPD",
      role: "Head",
    },
    {
      id: 2,
      name: "Floyd Miles",
      avatar: "/images/adminstartion.png",
      division: "Development",
      role: "Head",
    },
    {
      id: 3,
      name: "Dianne Russell",
      avatar: "/images/adminstartion.png",
      division: "Cyber",
      role: "Head",
    },
    {
      id: 4,
      name: "Cody Fisher",
      avatar: "/images/adminstartion.png",
      division: "Data Science",
      role: "Head",
    },
    {
      id: 5,
      name: "Jacob Jones",
      avatar: "/images/adminstartion.png",
      division: "AI",
      role: "Vice President",
    },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500 text-sm">
            <th className="pb-2 font-normal">Member Name</th>
            <th className="pb-2 font-normal">Division</th>
            <th className="pb-2 font-normal">Role</th>
            <th className="pb-2 font-normal">Action</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id} className="border-t border-gray-100">
              <td className="py-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span>{member.name}</span>
                </div>
              </td>
              <td className="py-3">{member.division}</td>
              <td className="py-3">{member.role}</td>
              <td className="py-3">
                <div className="flex gap-2">
                  <button className="text-gray-500 hover:text-blue-600">
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button className="text-gray-500 hover:text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
