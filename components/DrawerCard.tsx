import React from "react";

type CardProps = {
  title: string;
  image: string;
  description: string;
  url: string;
};

const cards: CardProps[] = [
  {
    title: "Actual portfolio",
    image: "https://picsum.photos/seed/picsum/200/300",
    description: "It was a Blog created using nextjs, daisyUI and TypeScript. Fully responsive, with different dark and light themes.",
    url: "https://github.com/Ealanisln/alanis-portfolio",
  },
  {
    title: "Conducir es fácil",
    image: "https://picsum.photos/seed/picsum/200/300",
    description:
      "CEF was a project where I rewrote all the code using Next.js. All the comments are stored in a SQL database, and authentication is managed by Supabase, which is connected through a JS client and API. The access rules are defined using a middleware function in Next.js.",
    url: "https://linktree-alanis.vercel.app/",
  },

  {
    title: "Rick and Morty app",
    image: "https://picsum.photos/seed/picsum/200/300",
    description:
      "It was created using NextJS to render data using an external API. Shows an a grid with all the characters, fully responsive.",
    url: "https://github.com/Ealanisln/rick-morty-app",
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
            <img
              className="w-full h-48 object-cover"
              src={card.image}
              alt={card.title}
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
