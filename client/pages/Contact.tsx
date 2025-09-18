import PageHeader from "@/components/layout/PageHeader";
import DefaultDetails from "@/components/sections/DefaultDetails";

export default function Contact() {
  return (
    <div className="relative">
      <PageHeader
        title="Contact"
        subtitle="We offer 24/7 global support with enterprise SLAs."
      />
      <div className="container py-12 grid lg:grid-cols-3 gap-8">
        <form className="glass rounded-xl p-5 space-y-3 lg:col-span-2">
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="text-sm">Full name</label>
              <input
                required
                className="w-full glass rounded-md px-3 py-2 mt-1 outline-none"
              />
            </div>
            <div>
              <label className="text-sm">Company</label>
              <input className="w-full glass rounded-md px-3 py-2 mt-1 outline-none" />
            </div>
            <div>
              <label className="text-sm">Work email</label>
              <input
                required
                type="email"
                className="w-full glass rounded-md px-3 py-2 mt-1 outline-none"
              />
            </div>
            <div>
              <label className="text-sm">Phone</label>
              <input className="w-full glass rounded-md px-3 py-2 mt-1 outline-none" />
            </div>
            <div>
              <label className="text-sm">Country</label>
              <select className="w-full glass rounded-md px-3 py-2 mt-1 outline-none">
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Germany</option>
                <option>India</option>
                <option>Australia</option>
              </select>
            </div>
            <div>
              <label className="text-sm">Topic</label>
              <select className="w-full glass rounded-md px-3 py-2 mt-1 outline-none">
                <option>Sales</option>
                <option>Support</option>
                <option>Partnerships</option>
                <option>Security</option>
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <label className="text-sm">Budget</label>
              <select className="w-full glass rounded-md px-3 py-2 mt-1 outline-none">
                <option>Undisclosed</option>
                <option>$0 - $1k/mo</option>
                <option>$1k - $5k/mo</option>
                <option>$5k - $20k/mo</option>
                <option>$20k+/mo</option>
              </select>
            </div>
            <div>
              <label className="text-sm">Website</label>
              <input className="w-full glass rounded-md px-3 py-2 mt-1 outline-none" />
            </div>
          </div>
          <div>
            <label className="text-sm">Message</label>
            <textarea
              required
              className="w-full glass rounded-md px-3 py-2 mt-1 h-28 outline-none"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-foreground/70">
            <input id="consent" type="checkbox" className="h-4 w-4" />
            <label htmlFor="consent">
              I agree to the privacy policy and to be contacted about my
              inquiry.
            </label>
          </div>
          <button className="btn-gradient rounded-md px-4 py-2 text-white">
            Send
          </button>
        </form>
        <div className="glass rounded-xl p-5">
          <div className="font-medium mb-2">Contacts</div>
          <ul className="space-y-1 text-sm text-foreground/70">
            <li>Support: support@chatriox.example</li>
            <li>Sales: sales@chatriox.example</li>
            <li>Security: security@chatriox.example</li>
          </ul>
          <div className="mt-4 text-xs text-foreground/60">
            Global support 24/7 • Average first response &lt; 2h
          </div>
        </div>
      </div>
      <DefaultDetails />
    </div>
  );
}
