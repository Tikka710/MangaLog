import Link from 'next/link';


export const TopPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-3 w-full p-8">
      <section className="flex flex-col justify-center items-center">
        <p className="text-2xl">日々読んだ漫画を記録しています</p>
      </section>
      <article>
        <Link href="/">
          <img />
        </Link>
        <Link href="/">
          <a></a>
        </Link>
      </article>
    </div>
  )
}