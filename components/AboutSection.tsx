import { clinicConfig } from "@/lib/config";

const highlights = [
  {
    title: "Patient First",
    description:
      "Every treatment plan is personalised to the patient's specific needs and goals.",
  },
  {
    title: "Heal With Care",
    description:
      "Restore health and mobility with compassionate, hands-on therapy.",
  },
  {
    title: "Right Diagnosis",
    description:
      "Accurate assessment and targeted treatment for faster recovery.",
  },
  {
    title: "Proven Methods",
    description:
      "Science-backed physiotherapy techniques with measurable results.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-12 bg-white relative overflow-hidden">
      {/* Dotted background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #1d4ed820 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Heading — always on top */}
        <div className="mb-10">
          <span
            className="flex items-center gap-2 font-bold text-sm mb-3"
            style={{ color: "#2b1f51" }}
          >
            <span
              className="w-1 h-5 rounded-full inline-block"
              style={{ background: "#85c226" }}
            />
            About Us
          </span>
          <h2
            className="text-3xl md:text-4xl font-black leading-tight mb-4"
            style={{ color: "#2b1f51" }}
          >
            Best Physiotherapy Clinic For Pain & Rehabilitation in Gurugram
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            Physiotouch Clinic is a dedicated physiotherapy centre in Sector 45,
            Gurugram, founded by{" "}
            <strong className="text-gray-700">
              {clinicConfig.doctor.name}
            </strong>{" "}
            ({clinicConfig.doctor.degrees}). We specialise in non-surgical
            treatment of pain, injuries, and movement disorders.
          </p>
        </div>

        {/* Two columns below heading */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left — 2x2 grid */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
                style={{ background: "#f8f7ff", borderColor: "#e8e4f5" }}
              >
                <h3
                  className="font-black text-lg mb-2 leading-tight"
                  style={{ color: "#2b1f51" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div
                  className="mt-4 h-0.5 w-12 rounded-full"
                  style={{ background: "#85c226" }}
                />
              </div>
            ))}
          </div>

          {/* Right — extra details + stats */}
          <div className="flex-1">
            <p className="text-gray-500 leading-relaxed ">
              Our patient-centric approach combines accurate diagnosis with
              personalised treatment plans — ensuring every patient receives the
              right care at the right time.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              With {clinicConfig.stats[0].value} patients treated and{" "}
              {clinicConfig.stats[1].value} of experience, we are one of
              Gurugram's most trusted physiotherapy clinics.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {clinicConfig.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-4 border-l-4"
                  style={{
                    background: "#f8f7ff",
                    borderColor: "#85c226",
                    borderLeftWidth: "4px",
                  }}
                >
                  <p
                    className="text-2xl font-black"
                    style={{ color: "#85c226" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#2b1f51" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
