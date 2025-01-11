import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

export default function Page() {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Fremont High School App</h1>
        <p className="text-xl mb-6">
          Your all-in-one tool for managing school life. Quickly check your schedule, see when the next class starts, view grades from Infinite Campus, stay updated with club announcements, and access your digital ID card instantly.
        </p>
        <Button size="lg" asChild>
          <a href="#" target="_blank" rel="noopener noreferrer">Download Now</a>
        </Button>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Admin Panel</CardTitle>
            <CardDescription>Manage app features for club officers, advisors, ASB members, and staff.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">To access the admin panel, visit <a href="https://fremont-app.vercel.app" className="text-blue-600 dark:text-blue-400 hover:underline">https://fremont-app.vercel.app</a>. Sign in using your FUHSD Google Account.</p>
            <Button asChild>
              <a href="https://fremont-app.vercel.app" target="_blank" rel="noopener noreferrer">Access Admin Panel</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="h-full">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">Mohamad Mortada, Lead App Developer and Creator</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Email: <a href="mailto:mmortada685@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">mmortada685@gmail.com</a></li>
              <li>Instagram: <a href="https://www.instagram.com/mohamad_mortada" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">mohamad_mortada</a></li>
              <li>Discord: thedev132</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Self Hosting Instructions</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Clone the code:</strong> <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded">git clone https://thedev132/fremont-app</code></li>
            <li><strong>Install required dependencies:</strong> <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded">npm install</code></li>
            <li><strong>Install proper software:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>For iOS development: Install Xcode on MacOS</li>
                <li>For Android Development: Install Android Studio</li>
              </ul>
            </li>
            <li><strong>Prebuild:</strong> Run <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded">npx expo prebuild</code></li>
            <li><strong>Run:</strong>
              <ul className="list-disc list-inside ml-4 mt-1">
                <li>For iOS: <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded">npx expo run:ios</code></li>
                <li>For Android: <code className="bg-gray-100 dark:bg-gray-800 p-1 rounded">npx expo run:android</code></li>
              </ul>
            </li>
          </ol>
          <p className="mt-4">Source Code for web interface: <a href="https://github.com/thedev132/fremont-app-backend" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://github.com/thedev132/fremont-app-backend</a></p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disclaimer</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This is an unofficial app and is not promoted or endorsed by Fremont High School or the FUHSD (Fremont Union High School District). The developer reserves the right to modify, update, or discontinue the app and its services at any time without prior notice. All trademarks and names mentioned belong to their respective owners, and their inclusion does not imply any affiliation or endorsement.
          </p>
        </CardContent>
      </Card>

      <footer className="text-center text-sm text-muted-foreground">
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
      </footer>
    </div>
  )
}
