import { Card } from "@/components/ui/card"

export function JobDescription({ job }: { job: { id: Number, description: String, mesfert: [String] } }) {
  
  let display = ""
  if(job.description == "") {
    display = "hidden"
  }
  return (
    <Card className={`p-8 bg-card border-border ${display}`}>
      <div className="space-y-8">
        {/* About the Role */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">ስለ ስራው ዝርዝር መረጃ </h2>
          <p className="text-foreground leading-relaxed">
            {job.description}
          </p>
        </section>

      
        {/* Requirements */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">የሚጠበቁ መስፈርቶች</h2>
          <ul className="space-y-3 text-foreground">
            { job.mesfert.map((m, index) => (
              <li key={index} className="flex items-start space-x-2">
              <span className="text-accent mt-1">•</span>
              <span> {m} </span>
            </li>
            ))}
          </ul>
        </section>

      {/* Key Responsibilities */}
        <section className="">
          <h2 className="text-2xl font-bold text-foreground mb-4">Key Responsibilities</h2>
          <ul className="space-y-3 text-foreground">
            <li className="flex items-start space-x-2">
              <span className="text-accent mt-1">•</span>
              <span>Develop and maintain responsive web applications using React, TypeScript, and Next.js</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-accent mt-1">•</span>
              <span>Collaborate with designers and backend developers to implement user-friendly interfaces</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-accent mt-1">•</span>
              <span>Optimize applications for maximum speed and scalability</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-accent mt-1">•</span>
              <span>Write clean, maintainable code and participate in code reviews</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-accent mt-1">•</span>
              <span>Stay up-to-date with the latest frontend technologies and industry trends</span>
            </li>
          </ul>
        </section>

        {/* Benefits */}
        <hr/>
        <section id="apply">
          <h2 className="text-2xl font-bold text-foreground mb-4"> How to Apply ?</h2>
          <ul className="space-y-3 text-foreground">
            <li className="flex items-start space-x-2">
              <span className="text-accent mt-1">•</span>
              <span> ሁሉንም ዶክመንቶች ማለትም CV, የ8ኛ ክፍል እና የዲግሪ ማስረጃ ወረቀቶች በዚህ ኢሜል ይላኩ  

              <a href="gmail.com" className="text-blue-600 text-center" > 2d9y0@example.com</a> 
              </span>
            </li>
            
            <li className="flex items-start space-x-2">
              <span className="text-accent mt-1">•</span>
              <span> Attach all your documents and send it to this email address :-   

              <a href="gmail.com" className="text-blue-600 text-center" > 2d9y0@example.com</a> 
              </span>
            </li>
            
          </ul>
        </section>
      </div>
    </Card>
  )
}
