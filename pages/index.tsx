import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Input from '../components/input';

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
  const [phone, setPhone] = useState<string>('+61 234 567 890');
  const [bookingLink, setBookingLink] = useState<string>('');
  const [company, setCompany] = useState<string>('Acme, Inc.');
  const [address, setAddress] = useState<string>(
    '123 Charming Avenue, New York'
  );
  const [website, setWebsite] = useState<string>('https://haydenbleasel.com/');
  const [logo, setLogo] = useState<string>(
    'https://haydenbleasel.com/favicon.png'
  );
  const [footer, setFooter] = useState<string>(
    `CONFIDENTIALITY NOTICE — This email with all attachment(s) is solely for the use of the individual or entity to which it was intended. Unless otherwise indicated, it contains information that is confidential, privileged and/or exempt from disclosure under applicable law. If you are not the intended recipient, any disclosure, copying, distribution, or action taken based on this email is strictly prohibited. If you have received this email in error, please notify the sender of the error and delete the email. Thank you.`
  );
  const [fontStack, setFontStack] = useState<string>(defaultFontStack);

  const signature: string[] = [];

  if (logo) {
    signature.push(
      `<a href="${website}"><img alt="${company}" src="${logo}" width="32" height="32"></a>`,
      `<div style="orphans: 2; widows: 2;" dir="auto"><br></div>`
    );
  }

  if (name) {
    signature.push(
      `<div style="orphans: 2; widows: 2;" dir="auto"><span style="caret-color: rgb(51, 51, 51); letter-spacing: -0.04100000113248825px; white-space: pre-wrap; font-family: ${fontStack};"><b style="color: rgb(0, 0, 0);">${name}</b>`
    );

    if (pronouns) {
      signature.push(`<font color="#808080"> (${pronouns})</font>`);
    }

    signature.push('</span></div>');
  }

  if (role || company) {
    signature.push(
      `<div style="orphans: 2; widows: 2;" dir="auto"><span style="caret-color: rgb(51, 51, 51); letter-spacing: -0.04100000113248825px; white-space: pre-wrap; font-family: ${fontStack};"><font color="#000000">`
    );

    if (role) {
      signature.push(role);
    }

    if (role && company) {
      signature.push(' &bull; ');
    }

    if (company) {
      signature.push(company);
    }

    signature.push('</font></span></div>');
  }

  if (address) {
    signature.push(
      `<div style="orphans: 2; widows: 2;" dir="auto"><span style="background-color: var(--backgroundColor); caret-color: rgb(51, 51, 51); letter-spacing: -0.04100000113248825px; white-space: pre-wrap; font-family: ${fontStack};"><font color="#000000">${address}</font></span></div>`
    );
  }

  if (phone || bookingLink || email) {
    signature.push(
      `<div style="orphans: 2; widows: 2;" dir="auto"><font color="#000000">`
    );

    if (phone) {
      signature.push(
        `<span style="caret-color: rgb(51, 51, 51); letter-spacing: -0.04100000113248825px; white-space: pre-wrap; font-family: ${fontStack}; background-color: var(--backgroundColor);"><a href="tel:${phone.replace(
          /\s/gu,
          ''
        )}">${phone}</a></span>`
      );
    }

    if (phone && (bookingLink || email)) {
      signature.push(
        `<span style="caret-color: rgb(51, 51, 51); letter-spacing: -0.04100000113248825px; white-space: pre-wrap; font-family: ${fontStack};"> &bull; </span>`
      );
    }

    if (bookingLink) {
      signature.push(
        `<span style="caret-color: rgb(51, 51, 51); letter-spacing: -0.04100000113248825px; white-space: pre-wrap; font-family: ${fontStack}; background-color: var(--backgroundColor);"><a href="${bookingLink}">Book a Call</a></span>`
      );
    }

    if (bookingLink && email) {
      signature.push(
        `<span style="caret-color: rgb(51, 51, 51); letter-spacing: -0.04100000113248825px; white-space: pre-wrap; font-family: ${fontStack};"> &bull; </span>`
      );
    }

    if (email) {
      signature.push(
        `<span style="caret-color: rgb(51, 51, 51); letter-spacing: -0.04100000113248825px; white-space: pre-wrap; font-family: ${fontStack}; background-color: var(--backgroundColor);"><a href="mailto:${email}">${email}</a></span>`
      );
    }

    signature.push('</font></div>');
  }

  if (footer) {
    signature.push(
      `<div style="orphans: 2; widows: 2;" dir="auto"><span style="caret-color: rgb(51, 51, 51); letter-spacing: -0.04100000113248825px; white-space: pre-wrap; font-family: ${fontStack};"><font color="#000000"><br></font></span></div>`,
      `<div style="orphans: 2; widows: 2;" dir="auto"><font style="font-size: 10px;" color="#808080"><span style="caret-color: rgb(51, 51, 51); letter-spacing: -0.04100000113248825px; white-space: pre-wrap; font-family: ${fontStack};">${footer}</span></font></div>`
    );
  }

  return (
    <div className="flex">
      <Head>
        <title>Hancock | Simple Email Signature Generator</title>
        <meta
          name="description"
          content="Enter your details below to generate your email signature."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
      </Head>

      <main className="grid h-screen w-full max-w-[520px] shrink-0 gap-8 self-start overflow-y-auto p-6">
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
            id="name"
            value={name}
            onChangeText={setName}
            placeholder="Jane Smith"
          />

          <Input
            label="Email address"
            id="email"
            value={email}
            onChangeText={setEmail}
            placeholder="janesmith@acme.com"
            type="email"
          />

          <Input
            label="Pronouns"
            id="pronouns"
            value={pronouns}
            onChangeText={setPronouns}
            placeholder="He / him"
          />

          <Input
            label="Role"
            id="role"
            value={role}
            onChangeText={setRole}
            placeholder="Product Manager"
          />

          <Input
            label="Phone number (optional)"
            id="phone"
            value={phone}
            onChangeText={setPhone}
            placeholder="+1 234 567 890"
            type="tel"
          />

          <Input
            label="Call booking link (optional)"
            id="link"
            value={bookingLink}
            onChangeText={setBookingLink}
            placeholder="https://example.com/booking"
            type="url"
          />

          <Input
            label="Company"
            id="company"
            value={company}
            onChangeText={setCompany}
            placeholder="Acme, Inc."
          />

          <Input
            label="Company Website"
            id="website"
            value={website}
            onChangeText={setWebsite}
            placeholder="https://acme.com/"
          />

          <Input
            label="Company Address"
            id="address"
            value={address}
            onChangeText={setAddress}
            placeholder="123 Charming Avenue, New York"
          />

          <Input
            label="Logo URL"
            id="logo"
            value={logo}
            onChangeText={setLogo}
            placeholder="https://acme.com/images/logo.png"
            type="url"
          />

          <Input
            label="Footer"
            id="footer"
            value={footer}
            onChangeText={setFooter}
            placeholder="Start typing..."
          />

          <Input
            label="Font Stack"
            id="fontStack"
            value={fontStack}
            onChangeText={setFontStack}
            placeholder={defaultFontStack}
          />
        </div>
      </main>

      <div className="h-screen">
        <SyntaxHighlighter
          language="javascript"
          style={tomorrow as object}
          customStyle={{ height: '50%', margin: 0 }}
          wrapLines
          wrapLongLines
        >
          {signature.join('')}
        </SyntaxHighlighter>

        <div className="h-1/2 border-l border-gray-200 p-8">
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
