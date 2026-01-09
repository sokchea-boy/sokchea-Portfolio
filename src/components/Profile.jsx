import { User, Mail, Phone, MapPin, Calendar } from "lucide-react"
import profileImg from "../assets/images/profile.jpg"

export function Profile() {
  return (
    <section id="Profile" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-balance">Profile</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile Image */}
              <div className="shrink-0">
                <div className="w-32 h-32 rounded-full bg-primary/10 overflow-hidden flex items-center justify-center border-4 border-b-blue-400">
                  <User className="w-16 h-16 text-primary" />
                  <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                    />
                </div>
              </div>

              {/* Profile Details */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Sokchea Boy</h3>
                  <p className="text-muted-foreground text-lg">Full Stack Developer</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">sokchea.boy16003@gmail.com</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">(+855) 979964862</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">Phnom Penh, Sangkat Tek Thla, Khan Sen Sok</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">Available for hire</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Bio</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Passionate developer with expertise in building modern web applications. I love creating elegant
                    solutions to complex problems and continuously learning new technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
