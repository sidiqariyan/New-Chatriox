import {
  Cloud,
  Database,
  Boxes,
  Link2,
  Server,
  Shield,
  Snowflake,
  Store,
  CreditCard,
  Mail,
  MessageSquare,
  FileText,
  Box,
} from "lucide-react";

interface Props {
  items: string[];
}

const iconFor = (name: string) => {
  const n = name.toLowerCase();
  if (/(aws|s3|azure|gcp|google cloud|cloud)/.test(n)) return Cloud;
  if (/(postgres|bigquery|snowflake|db|database)/.test(n)) return Database;
  if (/(kafka|queue|event|stream)/.test(n)) return Server;
  if (/(salesforce|crm|hubspot|pipedrive)/.test(n)) return Boxes;
  if (/(segment|analytics|ga4|amplitude|mixpanel)/.test(n)) return Link2;
  if (/(shopify|magento|woocommerce|ecommerce|stripe)/.test(n)) return Store;
  if (/(security|okta|auth|sso|saml)/.test(n)) return Shield;
  if (/(mailgun|sendgrid|postmark|ses|gmail|outlook|email)/.test(n))
    return Mail;
  if (/(whatsapp|sms|twilio|message|vonage|360dialog)/.test(n))
    return MessageSquare;
  if (/(docs|contentful|builder|story|cms)/.test(n)) return FileText;
  return Box;
};

export default function IntegrationLogos({ items }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((name) => {
        const Icon = iconFor(name);
        return (
          <div
            key={name}
            className="px-3 py-1.5 rounded-md glass text-sm text-foreground/80 inline-flex items-center gap-2"
            aria-label={`${name} integration`}
          >
            <Icon className="h-4 w-4" aria-hidden />
            <span>{name}</span>
          </div>
        );
      })}
    </div>
  );
}
