import Image from 'next/image';

const teamMembers = [
  { img: '/team-1-user-1.jpg', name: 'Username', profession: 'Profession' },
  { img: '/team-1-user-2.jpg', name: 'Username', profession: 'Profession' },
  { img: '/team-1-user-3.jpg', name: 'Username', profession: 'Profession' },
  { img: '/team-1-user-4.jpg', name: 'Username', profession: 'Profession' },
  { img: '/team-1-user-5.jpg', name: 'Username', profession: 'Profession' },
  { img: '/team-1-user-6.jpg', name: 'Username', profession: 'Profession' },
  { img: '/team-1-user-7.jpg', name: 'Username', profession: 'Profession' },
  { img: '/team-1-user-8.jpg', name: 'Username', profession: 'Profession' },
  { img: '/team-1-user-9.jpg', name: 'Username', profession: 'Profession' },
];

export default function MeetOurTeam() {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-60 h-60 relative">
              <Image
                src={member.img}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.profession}</p>
            <div className="flex gap-3 mt-3">
              <a href="#" className="text-blue-600 text-xl">&#xf09a;</a>
              <a href="#" className="text-pink-500 text-xl">&#xf16d;</a>
              <a href="#" className="text-blue-400 text-xl">&#xf099;</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
