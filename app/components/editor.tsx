'use client';

import { Input } from '@/app/components/input';
import { Textarea } from '@/app/components/textarea';
import { encode } from 'he';
import { parseAsString, useQueryState } from 'nuqs';
import { useState } from 'react';
import type { FC } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Card } from './card';

const defaultFontStack = [
  'Inter',
  'system-ui',
  '-apple-system',
  'Segoe UI',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'Noto Sans',
  'Liberation Sans',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
  'Noto Color Emoji',
].join(', ');

export const Editor: FC = () => {
  const [name, setName] = useQueryState<string>(
    'name',
    parseAsString.withDefault('Hayden Bleasel')
  );
  const [email, setEmail] = useQueryState<string>(
    'email',
    parseAsString.withDefault('')
  );
  const [pronouns, setPronouns] = useQueryState<string>(
    'pronouns',
    parseAsString.withDefault('He / Him')
  );
  const [role, setRole] = useQueryState<string>(
    'role',
    parseAsString.withDefault('Chief Product Officer')
  );
  const [phone, setPhone] = useQueryState<string>(
    'phone',
    parseAsString.withDefault('')
  );
  const [mobile, setMobile] = useQueryState<string>(
    'mobile',
    parseAsString.withDefault('')
  );
  const [fax, setFax] = useQueryState<string>(
    'fax',
    parseAsString.withDefault('')
  );
  const [bookingLink, setBookingLink] = useQueryState<string>(
    'bookingLink',
    parseAsString.withDefault('')
  );
  const [company, setCompany] = useQueryState<string>(
    'company',
    parseAsString.withDefault('Acme, Inc.')
  );
  const [address, setAddress] = useQueryState<string>(
    'address',
    parseAsString.withDefault('123 Charming Avenue, New York')
  );
  const [website, setWebsite] = useQueryState<string>(
    'website',
    parseAsString.withDefault('https://haydenbleasel.com/')
  );
  const [logo, setLogo] = useQueryState<string>(
    'logo',
    parseAsString.withDefault('https://haydenbleasel.com/email-signature.png')
  );
  const [footer, setFooter] = useQueryState<string>(
    'footer',
    parseAsString.withDefault(
      'CONFIDENTIALITY NOTICE — This email with all attachment(s) is solely for the use of the individual or entity to which it was intended. Unless otherwise indicated, it contains information that is confidential, privileged and/or exempt from disclosure under applicable law. If you are not the intended recipient, any disclosure, copying, distribution, or action taken based on this email is strictly prohibited. If you have received this email in error, please notify the sender of the error and delete the email. Thank you.'
    )
  );
  const [fontStack, setFontStack] = useQueryState<string>(
    'fontStack',
    parseAsString.withDefault(defaultFontStack)
  );
  const [primaryColor, setPrimaryColor] = useState<string>('#000000');
  const [twitter, setTwitter] = useState<string>('haydenbleasel');
  const signature: string[] = [];
  const parsedPrimaryColor = primaryColor === '' ? 'inherit' : primaryColor;

  if (logo) {
    signature.push(
      `<img alt="${encode(company)}" src="${encode(
        logo
      )}" width="32" height="32" style="width: 32px; height: 32px;">`,
      `<div style="orphans: 2; widows: 2; font-size: 12px;" dir="auto"><br></div>`
    );
  }

  if (name) {
    signature.push(
      `<div style="orphans: 2; widows: 2;" dir="auto"><span style="font-family: ${encode(
        fontStack
      )};"><b style="color: #000000">${encode(name)}</b>`
    );

    if (pronouns) {
      signature.push(
        `<font color="#808080" style="font-size: 14px"> (${encode(
          pronouns
        )})</font>`
      );
    }

    signature.push(
      '</span></div>',
      `<div style="orphans: 2; widows: 2; font-size: 6px;" dir="auto"><br></div>`
    );
  }

  if (role || company) {
    signature.push(
      `<div style="orphans: 2; widows: 2;" dir="auto"><span style="font-family: ${encode(
        fontStack
      )};"><font color="#000000">`
    );

    if (role) {
      signature.push(role);
    }

    if (role && company) {
      signature.push(' &bull; ');
    }

    if (company) {
      if (website) {
        signature.push(
          `<a style="color: ${parsedPrimaryColor}" href="${encode(website)}">`
        );
      }

      signature.push(company);

      if (website) {
        signature.push('</a>');
      }
    }

    signature.push('</font></span></div>');
  }

  if (address) {
    signature.push(
      `<div style="orphans: 2; widows: 2; font-size: 2px;" dir="auto"><br></div>`,
      `<div style="orphans: 2; widows: 2;" dir="auto"><span style="background-color: var(--backgroundColor); font-family: ${encode(
        fontStack
      )};"><font color="#000000">${encode(address)}</font></span></div>`
    );
  }

  if (phone || mobile || fax) {
    signature.push(
      `<div style="orphans: 2; widows: 2;" dir="auto"><font color="#000000">`
    );
    if (phone) {
      const phoneNumber = phone.replace(/\s/g, '');

      signature.push(
        `<span style="font-family: ${encode(
          fontStack
        )}; background-color: var(--backgroundColor);">P: <a style="color: ${parsedPrimaryColor}" href="tel:${encode(
          phoneNumber
        )}">${encode(phone)}</a></span>`
      );
    }

    if (phone && (mobile || fax)) {
      signature.push(
        `<span style="font-family: ${encode(fontStack)};"> &bull; </span>`
      );
    }

    if (mobile) {
      const mobileNumber = mobile.replace(/\s/g, '');

      signature.push(
        `<span style="font-family: ${encode(
          fontStack
        )}; background-color: var(--backgroundColor);">M: <a style="color: ${parsedPrimaryColor}" href="tel:${encode(
          mobileNumber
        )}">${encode(mobile)}</a></span>`
      );
    }

    if (mobile && fax) {
      signature.push(
        `<span style="font-family: ${encode(fontStack)};"> &bull; </span>`
      );
    }

    if (fax) {
      const faxNumber = fax.replace(/\s/g, '');

      signature.push(
        `<span style="font-family: ${encode(
          fontStack
        )}; background-color: var(--backgroundColor);">F: <a style="color: ${parsedPrimaryColor}" href="tel:${encode(
          faxNumber
        )}">${encode(fax)}</a></span>`
      );
    }

    signature.push('</font></div>');
  }

  if (bookingLink || email || twitter) {
    signature.push(
      `<div style="orphans: 2; widows: 2; font-size: 2px;" dir="auto"><br></div>`,
      `<div style="orphans: 2; widows: 2;" dir="auto"><font color="#000000">`
    );

    if (bookingLink) {
      signature.push(
        `<span style="font-family: ${encode(
          fontStack
        )}; background-color: var(--backgroundColor);"><a style="color: ${parsedPrimaryColor}" href="${encode(
          bookingLink
        )}">Book a Call</a></span>`
      );
    }

    if (bookingLink && (email || twitter)) {
      signature.push(
        `<span style="font-family: ${encode(fontStack)};"> &bull; </span>`
      );
    }

    if (email) {
      signature.push(
        `<span style="font-family: ${encode(
          fontStack
        )}; background-color: var(--backgroundColor);"><a style="color: ${parsedPrimaryColor}" href="mailto:${encode(
          email
        )}">${encode(email)}</a></span>`
      );
    }

    if (email && twitter) {
      signature.push(
        `<span style="font-family: ${encode(fontStack)};"> &bull; </span>`
      );
    }

    if (twitter) {
      signature.push(
        `<span style="font-family: ${encode(
          fontStack
        )}; background-color: var(--backgroundColor);"><a style="color: ${parsedPrimaryColor}" href="https://twitter.com/${encode(
          twitter
        )}">@${encode(twitter)}</a></span>`
      );
    }

    signature.push('</font></div>');
  }

  if (footer) {
    signature.push(
      `<div style="orphans: 2; widows: 2;" dir="auto"><span style="font-family: ${encode(
        fontStack
      )};"><font color="#000000"><br></font></span></div>`,
      `<div style="orphans: 2; widows: 2; line-height: 1.1;" dir="auto"><font style="font-size: 10px;" color="#808080"><span style="font-family: ${encode(
        fontStack
      )};">${encode(footer)}</span></font></div>`
    );
  }

  return (
    <main className="flex h-full flex-1 gap-4 overflow-hidden">
      <div className="flex h-full w-full max-w-[520px] shrink-0 flex-col gap-8 self-start overflow-y-auto">
        <Card className="flex h-full flex-col gap-8 overflow-auto">
          <div className="grid gap-6">
            <Input
              label="Full name"
              defaultValue={name}
              onChangeText={setName}
              placeholder="Jane Smith"
            />

            <Input
              label="Email address"
              defaultValue={email}
              onChangeText={setEmail}
              placeholder="janesmith@acme.com"
              type="email"
            />

            <Input
              label="Pronouns"
              defaultValue={pronouns}
              onChangeText={setPronouns}
              placeholder="He / him"
            />

            <Input
              label="Role"
              defaultValue={role}
              onChangeText={setRole}
              placeholder="Product Manager"
            />

            <Input
              label="Phone number"
              defaultValue={phone}
              onChangeText={setPhone}
              placeholder="+1 234 567 890"
              type="tel"
            />

            <Input
              label="Mobile number"
              defaultValue={mobile}
              onChangeText={setMobile}
              placeholder="+61 234 567 890"
              type="tel"
            />

            <Input
              label="Fax number"
              defaultValue={fax}
              onChangeText={setFax}
              placeholder="+1 234 567 890"
              type="tel"
            />

            <Input
              label="Call booking link"
              defaultValue={bookingLink}
              onChangeText={setBookingLink}
              placeholder="https://example.com/booking"
              type="url"
            />

            <Input
              label="Company"
              defaultValue={company}
              onChangeText={setCompany}
              placeholder="Acme, Inc."
            />

            <Input
              label="Company Website"
              defaultValue={website}
              onChangeText={setWebsite}
              placeholder="https://acme.com/"
            />

            <Input
              label="Company Address"
              defaultValue={address}
              onChangeText={setAddress}
              placeholder="123 Charming Avenue, New York"
            />

            <Input
              label="Logo URL"
              defaultValue={logo}
              onChangeText={setLogo}
              placeholder="https://acme.com/images/logo.png"
              type="url"
            />

            <Textarea
              label="Footer"
              defaultValue={footer}
              onChangeText={setFooter}
              placeholder="Start typing..."
            />

            <Input
              label="Font Stack"
              defaultValue={fontStack}
              onChangeText={setFontStack}
              placeholder={defaultFontStack}
            />

            <Input
              label="Primary Color"
              defaultValue={primaryColor}
              onChangeText={setPrimaryColor}
              placeholder="#000000"
            />

            <Input
              label="Twitter"
              defaultValue={twitter}
              onChangeText={setTwitter}
              placeholder="haydenbleasel"
            />
          </div>
        </Card>
      </div>

      <div className="flex h-full w-full flex-col gap-4">
        <Card className="h-1/2 overflow-auto bg-foreground">
          <SyntaxHighlighter
            language="html"
            wrapLines
            wrapLongLines
            className="text-sm"
            style={nord}
            customStyle={{ backgroundColor: 'transparent' }}
          >
            {signature.join('')}
          </SyntaxHighlighter>
        </Card>

        <Card className="h-1/2 overflow-hidden p-0">
          <iframe
            srcDoc={signature.join('')}
            className="h-full w-full"
            title="Signature Preview"
          />
        </Card>
      </div>
    </main>
  );
};
