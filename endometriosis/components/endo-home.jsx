/** Add fonts into your Next.js project:

import { Prata } from 'next/font/google'
import { DM_Serif_Display } from 'next/font/google'

prata({
  subsets: ['latin'],
  display: 'swap',
})

dm_serif_display({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function EndoHome() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header
        className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FlowerIcon className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Endometriosis Empowerment</h1>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Exercise
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Meal Plans
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Infertility
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Mental Health
          </Link>
        </nav>
        <Button variant="secondary" className="hidden md:inline-flex">
          Contact Us
        </Button>
      </header>
      <main className="flex-1">
        <section id="exercise" className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Exercise Suggestions</h2>
                <p className="text-muted-foreground mb-6">
                  Discover weight and pain-free exercises tailored for women with endometriosis, with tips on managing
                  symptoms during workouts.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Low-Impact Cardio</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Gentle exercises like walking, swimming, and cycling can help manage pain and improve overall
                        fitness.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Strength Training</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Resistance training can help build muscle and improve endurance, without exacerbating symptoms.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Yoga & Pilates</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Gentle, low-impact yoga and Pilates can help improve flexibility, balance, and mindfulness.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Pelvic Floor Exercises</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Targeted pelvic floor exercises can help manage pain and improve overall pelvic health.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={400}
                  alt="Exercise"
                  className="rounded-xl" />
              </div>
            </div>
          </div>
        </section>
        <section id="meals" className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={400}
                  alt="Meal Plans"
                  className="rounded-xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Meal Plans</h2>
                <p className="text-muted-foreground mb-6">
                  Explore customizable meal plans that address the dietary needs and concerns of women with
                  endometriosis, focusing on anti-inflammatory and gut-friendly foods.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Anti-Inflammatory</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Meals rich in omega-3s, antioxidants, and other anti-inflammatory ingredients to help manage
                        symptoms.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Gut-Friendly</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Meals that promote gut health and address common digestive issues associated with endometriosis.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Customizable</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Personalized meal plans that consider your specific dietary needs and preferences.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Meal Prep</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Easy-to-follow recipes and meal prep tips to save time and support your health.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="infertility" className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Infertility Support</h2>
                <p className="text-muted-foreground mb-6">
                  Discover information and resources on managing infertility related to endometriosis, including
                  treatment options and emotional support.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Treatment Options</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Explore the latest medical treatments and therapies for endometriosis-related infertility.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Emotional Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Access resources and connect with support groups to manage the emotional challenges of
                        infertility.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Fertility Preservation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Learn about options for preserving fertility, such as egg freezing, for women with
                        endometriosis.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Adoption & Surrogacy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Explore alternative family-building options for women with endometriosis-related infertility.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={400}
                  alt="Infertility"
                  className="rounded-xl" />
              </div>
            </div>
          </div>
        </section>
        <section id="mental-health" className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={400}
                  alt="Mental Health"
                  className="rounded-xl" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Mental Health</h2>
                <p className="text-muted-foreground mb-6">
                  Explore guidance on coping strategies, self-care practices, and access to professional support
                  services to maintain a positive perspective on mental health.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Coping Strategies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Learn effective techniques to manage stress, anxiety, and depression associated with
                        endometriosis.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Self-Care Practices</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Discover mindfulness, relaxation, and other self-care activities to support your mental
                        well-being.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Professional Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Access resources and connect with mental health professionals who specialize in endometriosis
                        care.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Community Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Join online communities and support groups to connect with others who understand your
                        experiences.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="bg-primary text-primary-foreground py-6 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FlowerIcon className="h-6 w-6" />
          <p>&copy; 2024 Endometriosis Empowerment</p>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>)
  );
}

function FlowerIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path
        d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
      <path d="M12 7.5V9" />
      <path d="M7.5 12H9" />
      <path d="M16.5 12H15" />
      <path d="M12 16.5V15" />
      <path d="m8 8 1.88 1.88" />
      <path d="M14.12 9.88 16 8" />
      <path d="m8 16 1.88-1.88" />
      <path d="M14.12 14.12 16 16" />
    </svg>)
  );
}
