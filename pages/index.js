import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>💙 LETS GROW !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Sacha Yoga" />
        <p><a href="https://sachayogablog.fr/">Sachayogablog</a> est un blog de yoga qui propose une vari&eacute;t&eacute; d'articles int&eacute;ressants sur le yoga et ses bienfaits pour le corps et l'esprit. Le blog aborde divers sujets tels que les<a href="https://sachayogablog.fr/quel-yoga-choisir/"> diff&eacute;rentes formes de yoga</a>, les postures de yoga pour diff&eacute;rents besoins et niveaux, <a href="https://sachayogablog.fr/yoga/respiration/">les techniques de respiration</a>, la <a href="https://sachayogablog.fr/comment-debuter-la-meditation/">m&eacute;ditation</a> et la<a href="https://sachayogablog.fr/que-sont-les-8-piliers-du-yoga/"> philosophie du yoga.</a></p>
<p>Les articles sont bien &eacute;crits et facilement compr&eacute;hensibles, ce qui les rend accessibles &agrave; tous, m&ecirc;me aux d&eacute;butants en yoga. Le blog propose &eacute;galement des conseils pratiques pour am&eacute;liorer sa pratique de yoga et une section de questions-r&eacute;ponses o&ugrave; les lecteurs peuvent poser des questions et obtenir des r&eacute;ponses de professionnels de yoga.</p>
<p>Si vous &ecirc;tes int&eacute;ress&eacute; par le yoga et que vous souhaitez en savoir plus sur ses bienfaits, Sachayogablog est un excellent point de d&eacute;part. N'h&eacute;sitez pas &agrave; visiter leur site web pour d&eacute;couvrir leurs articles et leurs sessions de yoga en ligne.</p>
      </main>

      <Footer />
    </div>
        )
}
