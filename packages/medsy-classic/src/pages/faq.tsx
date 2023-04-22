// import { useEffect } from 'react';
import Head from 'next/head';
import Layout from 'containers/layout/layout';
import Accordion from 'components/accordion';

const accordionData = [
  {
    id: 1,
    title: 'What is your soft drink made of?',
    details:
      'Our soft drink is made with high-quality ingredients including natural flavors, carbonated water, and sweeteners.',
  },
  {
    id: 2,
    title: 'Is your soft drink suitable for vegans?',
    details:
      'Yes, our soft drink is vegan-friendly as it does not contain any animal-derived ingredients.',
  },
  {
    id: 3,
    title: 'Can I buy your soft drink online?',
    details:
      'Yes, our soft drink is available for purchase online through our website.',
  },
  {
    id: 4,
    title: 'How do I create a account?',
    details:
      'You do not need an account. Just input order information, we will contact you in 30 minutes.',
  },
];

export default function FAQ() {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content="Put your description here." />
        <title>F.A.Q</title>
      </Head>

      <div className="py-35px px-4 md:p-35px">
        <h3 className="w-full flex justify-center mb-30px text-24px text-gray-900 text-center font-semibold">
          F.A.Q
        </h3>
        <Accordion items={accordionData} />
      </div>
    </Layout>
  );
}
