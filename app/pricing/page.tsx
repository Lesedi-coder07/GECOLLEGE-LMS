import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'

const tiers = [
  {
    name: "Basic",
    price: "R600",
    description: "Access to video courses only",
    features: [
      "Unlimited access to all video courses",
      "Course progress tracking",
      "Mobile app access",
    ],
  },
  {
    name: "Standard",
    price: "R1500",
    description: "Access to video courses and community discussions",
    features: [
      "All Basic features",
      "Participate in community discussions",
      "Access to exclusive webinars",
    ],
  },
  {
    name: "Premium",
    price: "R4000",
    description: "Access to all features, including unlimited 1-on-1 tutoring",
    features: [
      "All Standard features",
      "Unlimited 1-on-1 tutoring sessions",
      "Priority support",
      "Early access to new courses",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <Card key={tier.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-3xl font-bold mb-4">{tier.price}<span className="text-sm font-normal">/month</span></p>
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Subscribe</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

