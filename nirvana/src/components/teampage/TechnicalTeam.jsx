import { technicalTeam } from "@/data/team/technicalteam";

const TechnicalTeam = () => {
  return (
    <section className="w-full px-6 py-24 md:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-14 md:mb-16">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] opacity-50">
            The people behind the tech
          </p>

          <h2 className="text-5xl font-bold uppercase tracking-tight md:text-7xl">
            Technical Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technicalTeam.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  draggable="false"
                  
                  className="h-full w-full select-none object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-end bg-black/0 p-6 transition-all duration-500 group-hover:bg-black/60">
                  <div className="translate-y-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="text-xl font-semibold text-white md:text-2xl">
                      {member.name}
                    </h3>

                    <p className="mt-1 text-sm text-white/65">
                      {member.branch}
                    </p>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="px-5 py-4">
                <h3 className="text-base font-medium">
                  {member.name}
                </h3>

                <p className="mt-1 text-xs uppercase tracking-wider opacity-45">
                  {member.branch}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalTeam;