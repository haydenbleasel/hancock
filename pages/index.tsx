import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { encode } from 'he';
import Input from '../components/input';
import Textarea from '../components/textarea';

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
  const signature: string[] = [];

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
        signature.push(`<a style="color: inherit" href="${encode(website)}">`);
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
        )}; background-color: var(--backgroundColor);">P: <a style="color: inherit" href="tel:${encode(
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
        )}; background-color: var(--backgroundColor);">M: <a style="color: inherit" href="tel:${encode(
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
        )}; background-color: var(--backgroundColor);">F: <a style="color: inherit" href="tel:${encode(
          faxNumber
        )}">${encode(fax)}</a></span>`
      );
    }

    signature.push('</font></div>');
  }

  if (bookingLink || email) {
    signature.push(
      `<div style="orphans: 2; widows: 2; font-size: 2px;" dir="auto"><br></div>`,
      `<div style="orphans: 2; widows: 2;" dir="auto"><font color="#000000">`
    );

    if (bookingLink) {
      signature.push(
        `<span style="font-family: ${encode(
          fontStack
        )}; background-color: var(--backgroundColor);"><a style="color: inherit" href="${encode(
          bookingLink
        )}">Book a Call</a></span>`
      );
    }

    if (bookingLink && email) {
      signature.push(
        `<span style="font-family: ${encode(fontStack)};"> &bull; </span>`
      );
    }

    if (email) {
      signature.push(
        `<span style="font-family: ${encode(
          fontStack
        )}; background-color: var(--backgroundColor);"><a style="color: inherit" href="mailto:${encode(
          email
        )}">${encode(email)}</a></span>`
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
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Tested in Outlook and Gmail.
        </p>
      </main>

      <div className="h-screen">
        <SyntaxHighlighter
          language="javascript"
          style={tomorrow as object}
          customStyle={{ height: '50%', margin: 0, fontSize: '14px' }}
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
