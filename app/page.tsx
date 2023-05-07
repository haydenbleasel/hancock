'use client';

import { useEffect, useState } from 'react';
import { Snippet } from '@beskar-labs/gravity/snippet';
import { encode } from 'he';
import { useSearchParams } from 'next/navigation';
import { Input } from '@beskar-labs/gravity/input';
import { Textarea } from '@beskar-labs/gravity/textarea';
import type { NextPage } from 'next';

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

const Home: NextPage = () => {
  const [name, setName] = useState<string>('Hayden Bleasel');
  const [email, setEmail] = useState<string>('');
  const [pronouns, setPronouns] = useState<string>('He / Him');
  const [role, setRole] = useState<string>('Chief Product Officer');
  const [phone, setPhone] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [fax, setFax] = useState<string>('');
  const [bookingLink, setBookingLink] = useState<string>('');
  const [company, setCompany] = useState<string>('Acme, Inc.');
  const [address, setAddress] = useState<string>(
    '123 Charming Avenue, New York'
  );
  const [website, setWebsite] = useState<string>('https://haydenbleasel.com/');
  const [logo, setLogo] = useState<string>(
    'https://haydenbleasel.com/apple-touch-icon.png'
  );
  const [footer, setFooter] = useState<string>(
    `CONFIDENTIALITY NOTICE — This email with all attachment(s) is solely for the use of the individual or entity to which it was intended. Unless otherwise indicated, it contains information that is confidential, privileged and/or exempt from disclosure under applicable law. If you are not the intended recipient, any disclosure, copying, distribution, or action taken based on this email is strictly prohibited. If you have received this email in error, please notify the sender of the error and delete the email. Thank you.`
  );
  const [fontStack, setFontStack] = useState<string>(defaultFontStack);
  const [primaryColor, setPrimaryColor] = useState<string>('#000000');
  const [twitter, setTwitter] = useState<string>('haydenbleasel');
  const signature: string[] = [];
  const parsedPrimaryColor = primaryColor === '' ? 'inherit' : primaryColor;
  const query = useSearchParams();

  useEffect(() => {
    if (query.get('name') && typeof query.get('name') === 'string') {
      setName(query.get('name'));
    }

    if (query.get('email') && typeof query.get('email') === 'string') {
      setEmail(query.get('email'));
    }

    if (query.get('pronouns') && typeof query.get('pronouns') === 'string') {
      setPronouns(query.get('pronouns'));
    }

    if (query.get('role') && typeof query.get('role') === 'string') {
      setRole(query.get('role'));
    }

    if (query.get('phone') && typeof query.get('phone') === 'string') {
      setPhone(query.get('phone'));
    }

    if (query.get('mobile') && typeof query.get('mobile') === 'string') {
      setMobile(query.get('mobile'));
    }

    if (query.get('fax') && typeof query.get('fax') === 'string') {
      setFax(query.get('fax'));
    }

    if (
      query.get('bookingLink') &&
      typeof query.get('bookingLink') === 'string'
    ) {
      setBookingLink(query.get('bookingLink'));
    }

    if (query.get('company') && typeof query.get('company') === 'string') {
      setCompany(query.get('company'));
    }

    if (query.get('address') && typeof query.get('address') === 'string') {
      setAddress(query.get('address'));
    }

    if (query.get('website') && typeof query.get('website') === 'string') {
      setWebsite(query.get('website'));
    }

    if (query.get('logo') && typeof query.get('logo') === 'string') {
      setLogo(query.get('logo'));
    }

    if (query.get('footer') && typeof query.get('footer') === 'string') {
      setFooter(query.get('footer'));
    }

    if (query.get('fontStack') && typeof query.get('fontStack') === 'string') {
      setFontStack(query.get('fontStack'));
    }

    if (
      query.get('primaryColor') &&
      typeof query.get('primaryColor') === 'string'
    ) {
      setPrimaryColor(query.get('primaryColor'));
    }

    if (query.get('twitter') && typeof query.get('twitter') === 'string') {
      setTwitter(query.get('twitter'));
    }
  }, [query]);

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
        signature.push(`</a>`);
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
      const phoneNumber = phone.replace(/\s/gu, '');

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
      const mobileNumber = mobile.replace(/\s/gu, '');

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
      const faxNumber = fax.replace(/\s/gu, '');

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
    <div className="flex h-full gap-4">
      <main className="grid h-full w-full max-w-[520px] shrink-0 gap-8 self-start overflow-y-auto rounded border border-neutral-200 bg-white p-6">
        <div>
          <h1 className="mb-2 text-3xl font-semibold text-gray-900">
            Email Signature Generator
          </h1>

          <p className="text-md m-0 font-normal text-gray-500">
            Enter your details below to generate your email signature.
          </p>
        </div>

        <div className="grid gap-6">
          <Input
            label="Full name"
            value={name}
            onChangeText={setName}
            placeholder="Jane Smith"
          />

          <Input
            label="Email address"
            value={email}
            onChangeText={setEmail}
            placeholder="janesmith@acme.com"
            type="email"
          />

          <Input
            label="Pronouns"
            value={pronouns}
            onChangeText={setPronouns}
            placeholder="He / him"
          />

          <Input
            label="Role"
            value={role}
            onChangeText={setRole}
            placeholder="Product Manager"
          />

          <Input
            label="Phone number"
            value={phone}
            onChangeText={setPhone}
            placeholder="+1 234 567 890"
            type="tel"
          />

          <Input
            label="Mobile number"
            value={mobile}
            onChangeText={setMobile}
            placeholder="+61 234 567 890"
            type="tel"
          />

          <Input
            label="Fax number"
            value={fax}
            onChangeText={setFax}
            placeholder="+1 234 567 890"
            type="tel"
          />

          <Input
            label="Call booking link"
            value={bookingLink}
            onChangeText={setBookingLink}
            placeholder="https://example.com/booking"
            type="url"
          />

          <Input
            label="Company"
            value={company}
            onChangeText={setCompany}
            placeholder="Acme, Inc."
          />

          <Input
            label="Company Website"
            value={website}
            onChangeText={setWebsite}
            placeholder="https://acme.com/"
          />

          <Input
            label="Company Address"
            value={address}
            onChangeText={setAddress}
            placeholder="123 Charming Avenue, New York"
          />

          <Input
            label="Logo URL"
            value={logo}
            onChangeText={setLogo}
            placeholder="https://acme.com/images/logo.png"
            type="url"
          />

          <Textarea
            label="Footer"
            value={footer}
            onChangeText={setFooter}
            placeholder="Start typing..."
          />

          <Input
            label="Font Stack"
            value={fontStack}
            onChangeText={setFontStack}
            placeholder={defaultFontStack}
          />

          <Input
            label="Primary Color"
            value={primaryColor}
            onChangeText={setPrimaryColor}
            placeholder="#000000"
          />

          <Input
            label="Twitter"
            value={twitter}
            onChangeText={setTwitter}
            placeholder="haydenbleasel"
          />
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Tested in Outlook and Gmail.
        </p>
      </main>

      <div className="flex h-full flex-col gap-4">
        <Snippet
          language="javascript"
          wrapLines
          wrapLongLines
          className="flex h-1/2 overflow-auto"
        >
          {signature.join('')}
        </Snippet>

        <div className="h-1/2 rounded border border-neutral-200 bg-white p-8">
          <iframe
            srcDoc={signature.join('')}
            className="h-full w-full"
            title="Signature Preview"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
