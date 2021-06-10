import Head from 'next/head'
import Image from 'next/image'

import { getUrl, getStringNoLocale } from '@inrupt/solid-client'

import NoteBody from '../components/NoteBody'
import { loadNote } from 'gatekit'
import { getPaymentPointer } from '../monetization'

export async function getStaticProps(context) {
  const conceptPrefix = ""
  const tagPrefix = ""
  const affiliationsNoteUrl = "https://understory.myunderstory.com/public/apps/understory/garden/workspace/default/notes/63RcodB7T4UrQB1xA7B8V5rbBBP97FmSxzg7cGcc7HiU1vZAvsgY5ML.ttl#concept"
  const { body: affiliations } = await loadNote(affiliationsNoteUrl)
  const papersNoteUrl = "https://understory.myunderstory.com/public/apps/understory/garden/workspace/default/notes/B8ETo7iCPnQGfvGTkKJi1kczFcnB7RdTSfRMVQ9cXVBntFZt.ttl#concept"
  const { body: papers } = await loadNote(papersNoteUrl)
  const webId = ""
  const paymentPointer = webId && await getPaymentPointer(webId)
  return {
    props: { tagPrefix, conceptPrefix, affiliations, papers, paymentPointer }, // will be passed to the page component as props
    revalidate: 10
  }
}

export default function Home({ tagPrefix, conceptPrefix, affiliations, papers, paymentPointer }) {
  return (
    <>
      <Head>
        <title>Understory Academic Portfolio</title>
        {paymentPointer && (
          <meta name="monetization" content={paymentPointer} />
        )}
      </Head>
      <main className="min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <section className="max-h-96 lg:max-h-full overflow-hidden">
            {/* Photo by <a href="https://unsplash.com/@miracletwentyone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joseph Gonzalez</a> on <a href="https://unsplash.com/s/photos/headshot?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
*/}
            <Image src="/headshot.jpg"
              alt="a great headshot"
              layout="responsive"
              width={266}
              height={400} />
          </section>
          <section className="p-12">
            <h1 className="font-typewriter font-bold text-6xl lg:text-8xl mb-12 h-32 lg:h-56 w-80">
              Academic Portfolio
            </h1>
            <div className="lg:text-3xl font-serif">
              <NoteBody json={affiliations}/>
            </div>
          </section>
          <section className="p-12">
            <h2 className="font-typewriter text-6xl lg:text-8xl mb-12">Papers</h2>
            <div className="lg:text-xl font-serif">
              <NoteBody json={papers}/>
            </div>
          </section>
          <section>
            {/* Photo by <a href="https://unsplash.com/@renran?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ren Ran</a> on <a href="https://unsplash.com/s/photos/dragon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>  */}
            <Image src="/dragon.jpg"
              alt="a dragon"
              layout="responsive"
              width={266}
              height={400} />
          </section>
        </div>
      </main>
    </>
  )
}
