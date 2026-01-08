export function About() {
  return (
    <section id="About" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-card-foreground mb-8 text-balance">About Me</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-pretty">
              I'm a passionate full-stack developer with expertise in building modern web applications. My journey in
              web development started with a curiosity about how things work on the internet, and it has evolved into a
              deep commitment to creating exceptional user experiences.
            </p>
            <p className="text-pretty">
              I specialize in React, Next.js, TypeScript, and Node.js, with a strong focus on performance,
              accessibility, and clean architecture. I believe in writing code that not only works but is maintainable
              and scalable.
            </p>
            <p className="text-pretty">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community. I'm always eager to learn and take on new challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
