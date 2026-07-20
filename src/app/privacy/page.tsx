import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Read the ToolWeb privacy policy.",
  path: "/privacy/"
});

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-4xl font-semibold text-ink">Privacy Policy</h1>
      <div className="mt-6 space-y-5 leading-7 text-muted">
        <p>
          ToolWeb is designed around lightweight browser-based tools. We aim to
          collect only what is necessary to operate, secure, and improve the
          website.
        </p>
        <p>
          Some pages may eventually display third-party advertising such as
          Google AdSense. Advertising partners may use cookies or similar
          technologies according to their own policies.
        </p>
        <p>
          Do not enter sensitive personal information into tools unless a page
          explicitly states how that information is processed and protected.
        </p>
      </div>
    </main>
  );
}
