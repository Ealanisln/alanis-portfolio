import Image from 'next/image'

type CardProps = {
  title: string;
  image: string;
  description: string;
  url: string;
};

const cards: CardProps[] = [
  {
    title: "Actual portfolio",
    image: "/portfolio.png",
    description: "It was a Blog created using nextjs, daisyUI and TypeScript. Fully responsive, with different dark and light themes.",
    url: "https://github.com/Ealanisln/alanis-portfolio",
  },
  {
    title: "Conducir es fácil",
    image: "/c-e-f.png",
    description:
      "CEF was a project where I rewrote all the code using Next.js. All the comments are stored in a SQL database, and authentication is managed by Supabase, which is connected through a JS client and API. The access rules are defined using a middleware function in Next.js.",
    url: "",
  },

  {
    title: "Linktree",
    image: "/linktree.png",
    description:
      "It was created using NextJS to render data using an external API. Shows an a grid with all the characters, fully responsive.",
    url: "https://linktree-alanis.vercel.app/",
  },
];

const Grid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-base-100">
      <h2 className="text-2xl font-bold mb-4 text-left">
        My projects:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-base-200 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              className="w-full h-48 object-cover"
              src={card.image}
              alt={card.title}
              width={192}
              height={192}
            />
            <div className="p-4">
              <h2 className="text-secondary-content text-lg mb-2">
                {card.title}
              </h2>
              <p className="text-secondary-content">{card.description}</p>
              <br />
              <div className="py-4">
                <p className="text-secondary-content">{card.url}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
