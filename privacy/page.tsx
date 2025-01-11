import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-xl mb-6">
          This privacy policy applies to the Fremont App app for mobile devices that was created by Mohamad Mortada as an Open Source service.
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Information Collection and Use</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>The Application collects information when you download and use it. This information may include:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Your device's Internet Protocol address (e.g. IP address)</li>
            <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
            <li>The time spent on the Application</li>
            <li>The operating system you use on your mobile device</li>
          </ul>
          <p>The Application does not gather precise information about the location of your mobile device.</p>
          <p>The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Third Party Access</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.</p>
          <p>Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:</p>
          <ul className="list-disc list-inside">
            <li>Google Play Services</li>
            <li>Expo</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Data Retention Policy and Your Rights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at mohamad@mortada.dev and they will respond in a reasonable time.</p>
          <p>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Children</CardTitle>
        </CardHeader>
        <CardContent>
          <p>The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13. The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security</CardTitle>
        </CardHeader>
        <CardContent>
          <p>The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Changes to This Policy</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>
          <p>This privacy policy is effective as of 2025-01-11</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Consent and Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.</p>
          <p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at mohamad@mortada.dev.</p>
        </CardContent>
      </Card>

      <footer className="text-center text-sm text-muted-foreground">
        <Link href="/" className="hover:underline">
          Back to Home
        </Link>
      </footer>
    </div>
  )
}
